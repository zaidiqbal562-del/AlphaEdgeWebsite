import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader } from '../components/ui';

const tableClass = 'min-w-full divide-y divide-[var(--border-soft)] text-left text-sm';
const headClass = 'bg-[var(--surface)] text-xs uppercase text-[var(--text-muted)]';

export default function AdminDashboardPage() {
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin', { credentials: 'include' })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || 'Could not load the admin dashboard.');
        setUsers(result.users || []);
        setApplications(result.applications || []);
      })
      .catch((requestError) => setError(requestError.message || 'Could not load the admin dashboard.'))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (value) => value ? new Date(value).toLocaleString() : '—';

  return (
    <Layout title="Admin Dashboard | AlphaEdge" description="Restricted administrator dashboard.">
      <Section>
        <SectionHeader eyebrow="Restricted access" title="Administrator dashboard" description="Review registered accounts and admissions applications." />

        {loading && <Reveal className={`${T.card} text-sm text-[var(--text-muted)]`}>Loading dashboard…</Reveal>}
        {error && <Reveal className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-500">{error}</Reveal>}

        {!loading && !error && (
          <div className="space-y-10">
            <Reveal className={T.cardAlt}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">Registered users</h2>
                <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">{users.length} users</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-[var(--border-soft)]">
                <table className={tableClass}>
                  <thead className={headClass}><tr>
                    {['ID', 'Name', 'Email', 'Role', 'Active', 'Created', 'Updated'].map((heading) => <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>)}
                  </tr></thead>
                  <tbody className="divide-y divide-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)]">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-4 py-3">{user.id}</td>
                        <td className="whitespace-nowrap px-4 py-3">{user.name}</td>
                        <td className="px-4 py-3">{user.email}</td>
                        <td className="whitespace-nowrap px-4 py-3"><span className="rounded-full border border-[var(--border-soft)] px-2 py-1 text-xs font-semibold">{user.role}</span></td>
                        <td className="px-4 py-3">{user.is_active ? 'Yes' : 'No'}</td>
                        <td className="whitespace-nowrap px-4 py-3">{formatDate(user.created_at)}</td>
                        <td className="whitespace-nowrap px-4 py-3">{formatDate(user.updated_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length === 0 && <p className="p-6 text-sm text-[var(--text-muted)]">No registered users found.</p>}
              </div>
            </Reveal>

            <Reveal className={T.cardAlt}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">Admissions applications</h2>
                <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">{applications.length} applications</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-[var(--border-soft)]">
                <table className={tableClass}>
                  <thead className={headClass}><tr>
                    {['ID', 'Submitted', 'Name', 'Email', 'Phone', 'City', 'Qualification', 'Programme', 'Resume'].map((heading) => <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>)}
                  </tr></thead>
                  <tbody className="divide-y divide-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)]">
                    {applications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-4 py-3">{application.id}</td>
                        <td className="whitespace-nowrap px-4 py-3">{formatDate(application.created_at)}</td>
                        <td className="whitespace-nowrap px-4 py-3">{application.full_name}</td>
                        <td className="px-4 py-3">{application.email}</td>
                        <td className="whitespace-nowrap px-4 py-3">{application.phone}</td>
                        <td className="px-4 py-3">{application.city}</td>
                        <td className="px-4 py-3">{application.qualification}</td>
                        <td className="px-4 py-3">{application.programme}</td>
                        <td className="px-4 py-3">
                          {application.resume_filename ? application.resume_filename : application.resume_url ? (
                            <a href={application.resume_url} target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">Open resume</a>
                          ) : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {applications.length === 0 && <p className="p-6 text-sm text-[var(--text-muted)]">No admissions applications found.</p>}
              </div>
            </Reveal>
          </div>
        )}
      </Section>
    </Layout>
  );
}
