import { useState } from 'react';
import { T, Reveal, SectionHeader } from './ui';

const emptyApplication = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  qualification: '',
  programme: '',
  resumeUrl: '',
  consent: false,
};

const inputClass =
  'w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30';

export default function AdmissionsApplicationForm({ compact = false }) {
  const [application, setApplication] = useState(emptyApplication);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleApplicationChange = (event) => {
    const { name, value, type, checked } = event.target;
    setApplication((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSubmitted(false);
    setError('');
  };

  const handleApplicationSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError('');

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...application,
          website: event.currentTarget.elements.website.value,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'We could not submit your application. Please try again.');
      }

      setApplication(emptyApplication);
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError.message || 'We could not submit your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id={compact ? undefined : 'application'} className={compact ? '' : 'mx-auto max-w-3xl scroll-mt-24'}>
      <SectionHeader
        eyebrow="Application"
        title="Start your application"
        description="Share a few details and our admissions team will get in touch."
      />

      <Reveal className={T.card}>
        {submitted && (
          <p role="status" className="mb-6 rounded-xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-4 text-sm leading-6 text-[var(--text-primary)]">
            Thank you. Your application has been received by the AlphaEdge admissions team.
          </p>
        )}
        {error && (
          <p role="alert" className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm leading-6 text-[var(--text-primary)]">
            {error}
          </p>
        )}

        <form onSubmit={handleApplicationSubmit} className="space-y-6">
          <div aria-hidden="true" className="absolute h-px w-px overflow-hidden">
            <label htmlFor="application-website">Leave this field empty</label>
            <input id="application-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="application-full-name" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Full name *</label>
              <input id="application-full-name" name="fullName" value={application.fullName} onChange={handleApplicationChange} required maxLength={120} autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="application-email" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Email *</label>
              <input id="application-email" name="email" type="email" value={application.email} onChange={handleApplicationChange} required maxLength={254} autoComplete="email" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="application-phone" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Phone *</label>
              <input id="application-phone" name="phone" type="tel" value={application.phone} onChange={handleApplicationChange} required maxLength={30} autoComplete="tel" className={inputClass} />
            </div>
            <div>
              <label htmlFor="application-city" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">City *</label>
              <input id="application-city" name="city" value={application.city} onChange={handleApplicationChange} required maxLength={100} autoComplete="address-level2" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="application-qualification" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Highest qualification *</label>
              <input id="application-qualification" name="qualification" value={application.qualification} onChange={handleApplicationChange} required maxLength={150} className={inputClass} />
            </div>
            <div>
              <label htmlFor="application-programme" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Programme of interest *</label>
              <select id="application-programme" name="programme" value={application.programme} onChange={handleApplicationChange} required className={inputClass}>
                <option value="">Select a programme</option>
                <option value="AI-900">AI-900</option>
                <option value="Algorithmic Trading">Algorithmic Trading</option>
                <option value="AI and Trading">AI &amp; Trading</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="application-resume-url" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Resume URL <span className="font-normal text-[var(--text-muted)]">(optional)</span></label>
            <input id="application-resume-url" name="resumeUrl" type="url" value={application.resumeUrl} onChange={handleApplicationChange} maxLength={1000} placeholder="https://drive.google.com/..." className={inputClass} />
            <p className="mt-2 text-sm text-[var(--text-muted)]">Use a shareable link that the admissions team can open.</p>
          </div>

          <div className="flex items-start gap-3">
            <input id="application-consent" name="consent" type="checkbox" checked={application.consent} onChange={handleApplicationChange} required className="mt-1 h-4 w-4 shrink-0 rounded accent-[var(--accent)]" />
            <label htmlFor="application-consent" className="text-sm leading-6 text-[var(--text-secondary)]">
              I agree that AlphaEdge may store and use these details to respond to my admissions enquiry. *
            </label>
          </div>

          <button type="submit" disabled={submitting} className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70">
            {submitting ? 'Submitting…' : 'Submit application'}
          </button>
        </form>
      </Reveal>
    </div>
  );
}