import { timingSafeEqual } from 'node:crypto';
import mysql from 'mysql2/promise';

let pool;

function getPool() {
  const { MYSQL_URL, AIVEN_CA_CERT } = process.env;
  if (!MYSQL_URL || !AIVEN_CA_CERT) {
    throw new Error('Admissions database environment is not configured.');
  }

  if (!pool) {
    const databaseUrl = new URL(MYSQL_URL);

    pool = mysql.createPool({
      host: databaseUrl.hostname,
      port: Number(databaseUrl.port || 3306),
      user: decodeURIComponent(databaseUrl.username),
      password: decodeURIComponent(databaseUrl.password),
      database: decodeURIComponent(databaseUrl.pathname.slice(1)),
      ssl: {
        ca: AIVEN_CA_CERT.replace(/\\n/g, '\n'),
        rejectUnauthorized: true,
      },
      waitForConnections: true,
      connectionLimit: 3,
      connectTimeout: 5000,
    });
  }

  return pool;
}

function text(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function hasAdminAccess(req) {
  const expectedToken = process.env.ENQUIRIES_ADMIN_TOKEN;
  const authorization = req.headers.authorization;
  if (!expectedToken || typeof authorization !== 'string' || !authorization.startsWith('Bearer ')) {
    return false;
  }

  const provided = Buffer.from(authorization.slice(7));
  const expected = Buffer.from(expectedToken);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (!hasAdminAccess(req)) {
      return res.status(401).json({ error: 'Access denied.' });
    }

    try {
      const database = getPool();
      const [applications] = await database.execute(
        `SELECT id, full_name, email, phone, city, qualification, programme,
                resume_url, created_at
         FROM admissions_applications
         ORDER BY created_at DESC
         LIMIT 100`,
      );
      return res.status(200).json({ applications });
    } catch (error) {
      console.error('Admissions records could not be loaded:', error.message);
      const status = error.message.includes('environment is not configured') ? 503 : 500;
      return res.status(status).json({
        error: status === 503
          ? 'Enquiries access is not configured.'
          : 'Could not load enquiries.',
      });
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid application data.' });
  }

  if (text(body.website, 200)) {
    return res.status(201).json({ success: true });
  }

  const application = {
    fullName: text(body.fullName, 120),
    email: text(body.email, 254).toLowerCase(),
    phone: text(body.phone, 30),
    city: text(body.city, 100),
    qualification: text(body.qualification, 150),
    programme: text(body.programme, 80),
  };
  const resumeUrl = text(body.resumeUrl, 1000);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email);
  const validPhone = /^[+\d\s().-]{7,30}$/.test(application.phone);
  const requiredFields = Object.values(application).every(Boolean);
  let validResumeUrl = true;

  if (resumeUrl) {
    try {
      validResumeUrl = ['http:', 'https:'].includes(new URL(resumeUrl).protocol);
    } catch {
      validResumeUrl = false;
    }
  }

  if (!requiredFields || !validEmail || !validPhone || !validResumeUrl || body.consent !== true) {
    return res.status(400).json({ error: 'Check the required fields and consent, then try again.' });
  }

  try {
    const database = getPool();
    await database.execute(
      `INSERT INTO admissions_applications
        (full_name, email, phone, city, qualification, programme, resume_url)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        application.fullName,
        application.email,
        application.phone,
        application.city,
        application.qualification,
        application.programme,
        resumeUrl || null,
      ],
    );

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Admissions application could not be saved:', error.message);
    const status = error.message.includes('environment is not configured') ? 503 : 500;
    return res.status(status).json({
      error: status === 503
        ? 'Admissions submissions are not configured yet. Please contact AlphaEdge.'
        : 'We could not save your application. Please try again later.',
    });
  }
}