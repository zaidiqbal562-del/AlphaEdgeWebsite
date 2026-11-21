import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { T, Reveal, Section } from '../components/ui';

const inputClass = 'w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30';

export default function AuthPage({ mode }) {
  const navigate = useNavigate();
  const isRegister = mode === 'signup';
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [isRegister]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          action: isRegister ? 'register' : 'login',
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          result.error
            ? result.error
            : `Authentication endpoint is unavailable (HTTP ${response.status}). Check the Vercel deployment and /api/auth route.`,
        );
      }

      localStorage.removeItem('alphaedge_auth');
      navigate('/');
    } catch (requestError) {
      setError(requestError.message || 'Authentication failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout
      title={isRegister ? 'Create account | AlphaEdge' : 'Sign in | AlphaEdge'}
      description="Sign in to your AlphaEdge account or create a student account."
    >
      <Section>
        <div className="mx-auto max-w-md">
          <Reveal className={T.cardAlt}>
            <p className={T.eyebrow}>{isRegister ? 'New account' : 'Member access'}</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--text-primary)]">
              {isRegister ? 'Create your account' : 'Sign in to AlphaEdge'}
            </h1>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              {isRegister
                ? 'Choose the account role: student, faculty or admin.'
                : 'Enter your registered email address and password.'}
            </p>

            {error && (
              <p role="alert" className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-500">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {isRegister && (
                <>
                  <div>
                    <label htmlFor="auth-name" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Full name *</label>
                    <input id="auth-name" name="name" value={form.name} onChange={handleChange} required minLength={2} maxLength={120} autoComplete="name" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="auth-role" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Account role *</label>
                    <select id="auth-role" name="role" value={form.role} onChange={handleChange} required className={inputClass}>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="auth-email" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Email *</label>
                <input id="auth-email" name="email" type="email" value={form.email} onChange={handleChange} required maxLength={254} autoComplete="email" className={inputClass} />
              </div>

              <div>
                <label htmlFor="auth-password" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Password *</label>
                <input id="auth-password" name="password" type="password" value={form.password} onChange={handleChange} required minLength={8} autoComplete={isRegister ? 'new-password' : 'current-password'} className={inputClass} />
              </div>

              <button type="submit" disabled={submitting} className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60">
                {submitting ? 'Please wait…' : isRegister ? 'Create account' : 'Sign in'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
              {isRegister ? 'Already have an account?' : 'New to AlphaEdge?'}{' '}
              <Link to={isRegister ? '/login' : '/signup'} className="font-semibold text-[var(--accent)]">
                {isRegister ? 'Sign in' : 'Create account'}
              </Link>
            </p>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
