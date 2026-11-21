import { createHash, timingSafeEqual } from 'node:crypto';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

let pool;

function getPool() {
  const { MYSQL_URL, AIVEN_CA_CERT } = process.env;
  if (!MYSQL_URL || !AIVEN_CA_CERT) {
    throw new Error('Database environment is not configured.');
  }

  if (!pool) {
    const databaseUrl = new URL(MYSQL_URL);
    pool = mysql.createPool({
      host: databaseUrl.hostname,
      port: Number(databaseUrl.port || 3306),
      user: decodeURIComponent(databaseUrl.username),
      password: decodeURIComponent(databaseUrl.password),
      database: decodeURIComponent(databaseUrl.pathname.slice(1)),
      ssl: { ca: AIVEN_CA_CERT.replace(/\\n/g, '\n'), rejectUnauthorized: true },
      waitForConnections: true,
      connectionLimit: 3,
      connectTimeout: 5000,
    });
  }
  return pool;
}

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) {
    throw new Error('AUTH_SECRET must be configured with at least 32 characters.');
  }
  return value;
}

function sign(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHash('sha256').update(`${encoded}.${secret()}`).digest('base64url');
  return `${encoded}.${signature}`;
}

function verify(token) {
  if (typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [encoded, signature] = parts;
  const expected = createHash('sha256').update(`${encoded}.${secret()}`).digest('base64url');
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (!payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

function getSessionToken(req) {
  const authorization = req.headers.authorization;
  if (typeof authorization === 'string' && authorization.startsWith('Bearer ')) {
    return authorization.slice(7);
  }

  const cookies = typeof req.headers.cookie === 'string' ? req.headers.cookie.split(';') : [];
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.trim().split('=');
    if (name === 'alphaedge_session') return decodeURIComponent(rest.join('='));
  }
  return '';
}

function sessionCookie(token, maxAge) {
  return `alphaedge_session=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}; Max-Age=${maxAge}`;
}

export default async function handler(req, res) {
  if (!['POST', 'GET'].includes(req.method)) {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const database = getPool();

    if (req.method === 'GET') {
      const token = getSessionToken(req);
      const session = verify(token);
      if (!session) return res.status(401).json({ error: 'Please sign in again.' });

      const [rows] = await database.execute(
        'SELECT id, name, email, role, is_active FROM users WHERE id = ? LIMIT 1',
        [session.id],
      );
      if (!rows.length || !rows[0].is_active) {
        return res.status(401).json({ error: 'Account is unavailable.' });
      }
      return res.status(200).json({ user: rows[0] });
    }

    const action = clean(req.body?.action, 20).toLowerCase();

    if (action === 'register') {
      const name = clean(req.body?.name, 120);
      const email = clean(req.body?.email, 254).toLowerCase();
      const password = typeof req.body?.password === 'string' ? req.body.password : '';
      const role = clean(req.body?.role, 20).toLowerCase();
      const allowedSignupRole = ['admin', 'faculty', 'student'].includes(role) ? role : '';

      if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 8 || !allowedSignupRole) {
        return res.status(400).json({ error: 'Enter a name, valid email and password with at least 8 characters.' });
      }

      const [existing] = await database.execute('SELECT id FROM users WHERE email = ? LIMIT 1', [email]);
      if (existing.length) {
        return res.status(409).json({ error: 'An account with this email already exists.' });
      }

      const passwordHash = await hashPassword(password);
      const [result] = await database.execute(
        'INSERT INTO users (name, email, password_hash, password_salt, role) VALUES (?, ?, ?, NULL, ?)',
        [name, email, passwordHash, allowedSignupRole],
      );

      const user = { id: result.insertId, name, email, role: allowedSignupRole, is_active: true };
      const token = sign({ id: user.id, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 });
      res.setHeader('Set-Cookie', sessionCookie(token, 7 * 24 * 60 * 60));
      return res.status(201).json({ user, token });
    }

    if (action === 'logout') {
      res.setHeader('Set-Cookie', sessionCookie('', 0));
      return res.status(200).json({ success: true });
    }

    if (action === 'login') {
      const email = clean(req.body?.email, 254).toLowerCase();
      const password = typeof req.body?.password === 'string' ? req.body.password : '';

      const [rows] = await database.execute(
        'SELECT id, name, email, password_hash, role, is_active FROM users WHERE email = ? LIMIT 1',
        [email],
      );
      if (!rows.length) return res.status(401).json({ error: 'Invalid email or password.' });

      const row = rows[0];
      const suppliedHash = await bcrypt.compare(password, row.password_hash);

      if (!row.is_active || !suppliedHash) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }

      const user = { id: row.id, name: row.name, email: row.email, role: row.role, is_active: row.is_active };
      const token = sign({ id: user.id, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 });
      res.setHeader('Set-Cookie', sessionCookie(token, 7 * 24 * 60 * 60));
      return res.status(200).json({ user, token });
    }

    return res.status(400).json({ error: 'Unknown authentication action.' });
  } catch (error) {
    console.error('Authentication request failed:', error.message);
    if (error.message.includes('AUTH_SECRET')) {
      return res.status(503).json({ error: 'Set AUTH_SECRET in Vercel to a random value of at least 32 characters, then redeploy.' });
    }
    if (error.message.includes('not configured')) {
      return res.status(503).json({ error: 'Authentication is not configured yet. Set MYSQL_URL and AIVEN_CA_CERT in Vercel, then redeploy.' });
    }
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return res.status(503).json({ error: 'The users table is missing. Run database/users.sql in the Aiven SQL console.' });
    }
    if (error.code === 'ER_ACCESS_DENIED_ERROR' || error.code === 'ER_DBACCESS_DENIED_ERROR') {
      return res.status(503).json({ error: 'Aiven rejected the MYSQL_URL database credentials.' });
    }
    if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
      return res.status(503).json({ error: 'Could not connect to Aiven MySQL. Check the service host, port and network settings.' });
    }
    return res.status(500).json({ error: 'Authentication is temporarily unavailable.' });
  }
}
