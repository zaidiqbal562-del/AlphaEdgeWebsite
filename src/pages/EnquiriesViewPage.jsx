import { useState } from 'react';
import Layout from '../layout/Layout';

export default function EnquiriesViewPage() {
  const [accessKey, setAccessKey] = useState('');
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const loadApplications = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admissions', {
        headers: { Authorization: `Bearer ${accessKey}` },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Could not load enquiries.');
      }

      setApplications(result.applications || []);
      setAuthorized(true);
    } catch (requestError) {
      setAuthorized(false);
      setApplications([]);
      setError(requestError.message || 'Could not load enquiries.');
    } finally {
      setLoading(false);
    }
  };

  const lockPage = () => {
    setAccessKey('');
    setApplications([]);
    setAuthorized(false);
    setError('');
  };

  return (
    <Layout
      title="Admissions Enquiries | AlphaEdge"
      description="Restricted admissions enquiry records for AlphaEdge administrators."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--accent-strong)]">Restricted access</p>
            <h1 className="mt-2 text-3xl font-black text-[var(--text-primary)] sm:text-4xl">
              Admissions enquiries
            </h1>
          </div>
          {authorized && (
            <button
              type="button"
              onClick={lockPage}
              className="rounded-lg border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Lock page
            </button>
          )}
        </div>

        {!authorized ? (
          <form onSubmit={loadApplications} className="mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="enquiries-access-key" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                Admin access key
              </label>
              <input
                id="enquiries-access-key"
                type="password"
                autoComplete="current-password"
                required
                value={accessKey}
                onChange={(event) => setAccessKey(event.target.value)}
                className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30"
              />
            </div>
            {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
            >
              {loading ? 'Checking…' : 'View enquiries'}
            </button>
          </form>
        ) : (
          <div className="mt-8">
            <p className="mb-4 text-sm text-[var(--text-muted)]">
              Showing the latest {applications.length} enquiries (maximum 100).
            </p>
            <div className="overflow-x-auto rounded-xl border border-[var(--border-soft)]">
              <table className="min-w-full divide-y divide-[var(--border-soft)] text-left text-sm">
                <thead className="bg-[var(--surface)] text-xs uppercase text-[var(--text-muted)]">
                  <tr>
                    {['Submitted', 'Name', 'Email', 'Phone', 'City', 'Qualification', 'Programme', 'Resume'].map((heading) => (
                      <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)]">
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td className="whitespace-nowrap px-4 py-3">{new Date(application.created_at).toLocaleString()}</td>
                      <td className="whitespace-nowrap px-4 py-3">{application.full_name}</td>
                      <td className="px-4 py-3">{application.email}</td>
                      <td className="whitespace-nowrap px-4 py-3">{application.phone}</td>
                      <td className="px-4 py-3">{application.city}</td>
                      <td className="px-4 py-3">{application.qualification}</td>
                      <td className="whitespace-nowrap px-4 py-3">{application.programme}</td>
                      <td className="px-4 py-3">
                        {application.resume_url ? (
                          <a href={application.resume_url} target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">
                            Open resume
                          </a>
                        ) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {applications.length === 0 && (
                <p className="p-6 text-sm text-[var(--text-muted)]">No applications found.</p>
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}