# Admissions database setup

The Admissions form stores submissions in Aiven MySQL through the Vercel function at `/api/admissions`. Database credentials are only used by the server; do not add them to frontend variables such as `VITE_*` or commit them to Git.

1. Create a MySQL service in Aiven. Choose a free plan only if one is available in your account and region.
2. In the Aiven SQL console, run [`schema.sql`](schema.sql).
3. In the Aiven connection information, copy the MySQL service URI (in `mysql://user:password@host:port/database` form) and download its CA certificate.
4. In Vercel, open **Project Settings → Environment Variables** and add `MYSQL_URL` (the service URI) and `AIVEN_CA_CERT` (the full PEM certificate). Add them to every environment where you want the form enabled, then redeploy.
5. To view applications at `/enquiries_view`, set a long, random `ENQUIRIES_ADMIN_TOKEN` environment variable in Vercel and redeploy. The page asks for this key, keeps it only in memory, and the API checks it before returning applicant data. Do not make the records endpoint public.

To inspect applications, run this query in the Aiven SQL console:

```sql
SELECT id, full_name, email, phone, city, qualification, programme, resume_url, created_at
FROM admissions_applications
ORDER BY created_at DESC;
```

For local API testing, link the project with the Vercel CLI, pull the environment variables with `vercel env pull .env.local`, then start the app with `npx vercel dev`. The regular Vite command (`npm run dev`) does not run Vercel API functions.

Limit database access to trusted staff, and define an appropriate retention period for applicant data before collecting production submissions.