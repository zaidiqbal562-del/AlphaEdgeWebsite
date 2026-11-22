import { timingSafeEqual } from 'node:crypto';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

const resumeTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendApplicationAcknowledgement(application) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP environment variables are not configured.');
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: ['true', '1', 'yes'].includes(String(SMTP_SECURE).toLowerCase()),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const fromName = process.env.SMTP_FROM_NAME || 'AlphaEdge Admissions';
  const fromAddress = process.env.SMTP_FROM || SMTP_USER;
  const safeName = escapeHtml(application.fullName);
  const safeProgramme = escapeHtml(application.programme);

  await transport.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: application.email,
    subject: `Application received — ${application.programme}`,
    text: `Dear ${application.fullName},\n\nThank you for applying to ${application.programme} at AlphaEdge.\n\nWe have received your application and our admissions team will review your details and contact you soon within 24 hours .\n\nBest regards,\nAlphaEdge Admissions Team\n\nContact us\n1F-CS-56, Ansal Plaza Mall, Sector-1,\nVaishali, Ghaziabad,\nUttar Pradesh – 201010\n+91 92057 75137\ninfo@alphaedge.net.in`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#0f172a;line-height:1.6">
        <div style="text-align:center;padding:20px 0;border-bottom:1px solid #e2e8f0">
          <img
            src="https://alphaedge.in/logocroppedbgpxl.png"
            alt="AlphaEdge"
            width="180"
            style="display:inline-block;width:180px;height:auto;max-width:180px"
          />
        </div>
        <div style="padding:24px 20px">
          <h2 style="color:#059669">Application Received</h2>
          <p>Dear ${safeName},</p>
          <p>Thank you for applying to <strong>${safeProgramme}</strong> at AlphaEdge.</p>
          <p>We have received your application and our admissions team will review your details and contact you soon within 24 hours.</p>
          <p>Best regards,<br><strong>AlphaEdge Admissions Team</strong></p>
        </div>
        <div style="border-top:1px solid #e2e8f0;padding:20px;background:#f8fafc;text-align:center;font-size:13px;color:#475569">
          <strong style="display:block;margin-bottom:8px;color:#0f172a">Contact us</strong>
          1F-CS-56, Ansal Plaza Mall, Sector-1,<br>
          Vaishali, Ghaziabad,<br>
          Uttar Pradesh – 201010<br>
          <a href="tel:+919205775137" style="color:#059669;text-decoration:none">+91 92057 75137</a><br>
          <a href="mailto:info@alphaedge.net.in" style="color:#059669;text-decoration:none">info@alphaedge.net.in</a>
        </div>
      </div>
    `,
  });
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (!hasAdminAccess(req)) {
      return res.status(401).json({ error: 'Access denied.' });
    }

    try {
      const database = getPool();
      const resumeId = req.query?.resume;

      if (resumeId) {
        const id = Number(resumeId);
        if (!Number.isSafeInteger(id) || id < 1) {
          return res.status(400).json({ error: 'Invalid resume request.' });
        }

        const [rows] = await database.execute(
          `SELECT resume_filename, resume_mime_type, resume_data
           FROM admissions_applications
           WHERE id = ? LIMIT 1`,
          [id],
        );

        if (!rows.length || !rows[0].resume_data) {
          return res.status(404).json({ error: 'Resume not found.' });
        }

        const mimeType = resumeTypes.includes(rows[0].resume_mime_type)
          ? rows[0].resume_mime_type
          : 'application/octet-stream';
        const filename = String(rows[0].resume_filename || 'resume').replace(/[\r\n"]/g, '_');
        res.setHeader('Content-Type', mimeType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Cache-Control', 'private, no-store');
        return res.status(200).send(Buffer.from(rows[0].resume_data));
      }

      const [applications] = await database.execute(
        `SELECT id, full_name, email, phone, city, qualification, programme,
                resume_url, resume_filename, resume_mime_type, created_at
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
  const validPhone = /^\+[1-9]\d{6,14}$/.test(application.phone);
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

  let resumeBuffer = null;
  let resumeFilename = null;
  let resumeMimeType = null;

  if (body.resume) {
    const filename = text(body.resume.filename, 255);
    const mimeType = text(body.resume.mimeType, 100);
    const data = typeof body.resume.data === 'string' ? body.resume.data : '';

    if (!filename || !resumeTypes.includes(mimeType) || !/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data)) {
      return res.status(400).json({ error: 'The resume must be a valid PDF, DOC, or DOCX file.' });
    }

    resumeBuffer = Buffer.from(data, 'base64');
    if (resumeBuffer.length === 0 || resumeBuffer.length > 5 * 1024 * 1024) {
      return res.status(400).json({ error: 'Resume must be smaller than 5 MB.' });
    }

    resumeFilename = filename.replace(/[\r\n/"]/g, '_');
    resumeMimeType = mimeType;
  }

  try {
    const database = getPool();
    await database.execute(
      `INSERT INTO admissions_applications
        (full_name, email, phone, city, qualification, programme,
         resume_url, resume_filename, resume_mime_type, resume_data)
       VALUES (?, ?, ?, ?, ?, ?, NULL, ?, ?, ?)`,
      [
        application.fullName,
        application.email,
        application.phone,
        application.city,
        application.qualification,
        application.programme,
        resumeFilename,
        resumeMimeType,
        resumeBuffer,
      ],
    );

    let emailSent = false;
    try {
      await sendApplicationAcknowledgement(application);
      emailSent = true;
    } catch (mailError) {
      console.error('Admissions acknowledgement email could not be sent:', mailError.message);
    }

    return res.status(201).json({ success: true, emailSent });
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