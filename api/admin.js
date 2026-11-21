import { createHash, timingSafeEqual } from 'node:crypto';
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

function getSessionToken(req) {
  const cookies = typeof req.headers.cookie === 'string' ? req.headers.cookie.split(';') : [];
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.trim().split('=');
    if (name === 'alphaedge_session') return decodeURIComponent(rest.join('='));
  }
  return '';
}

function verifySession(token) {
  if (typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [encoded, signature] = parts;
  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  const expected = createHash('sha256').update(`${encoded}.${secret}`).digest('base64url');
  const supplied = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (supplied.length !== expectedBuffer.length || !timingSafeEqual(supplied, expectedBuffer)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (!payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const session = verifySession(getSessionToken(req));
    if (!session) return res.status(401).json({ error: 'Please sign in as an administrator.' });

    const database = getPool();
    const [accountRows] = await database.execute(
      'SELECT id, name, email, role, is_active, created_at, updated_at FROM users WHERE id = ? LIMIT 1',
      [session.id],
    );

    if (!accountRows.length || accountRows[0].role !== 'admin' || !accountRows[0].is_active) {
      return res.status(403).json({ error: 'Administrator access is required.' });
    }

    const [users] = await database.execute(
      'SELECT id, name, email, role, is_active, created_at, updated_at FROM users ORDER BY created_at DESC',
    );

    const [applications] = await database.execute(
      `SELECT id, full_name, email, phone, city, qualification, programme,
              resume_url, resume_filename, resume_mime_type, created_at
       FROM admissions_applications
       ORDER BY created_at DESC
       LIMIT 500`,
    );

    return res.status(200).json({ users, applications });
  } catch (error) {
    console.error('Admin dashboard could not be loaded:', error.message);
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return res.status(503).json({ error: 'Run the users and admissions database scripts before opening the admin dashboard.' });
    }
    return res.status(500).json({ error: 'Could not load the admin dashboard.' });
  }
}
