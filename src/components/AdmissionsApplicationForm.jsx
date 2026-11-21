import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'libphonenumber-js/max';
import 'react-phone-number-input/style.css';
import { T, Reveal, SectionHeader } from './ui';

const emptyApplication = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  qualification: '',
  programme: '',
  resume: null,
  consent: false,
};

const inputClass =
  'w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30';

const resumeTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function AdmissionsApplicationForm({ compact = false }) {
  const [application, setApplication] = useState(emptyApplication);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [resumeKey, setResumeKey] = useState(0);

  const handleApplicationChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === 'file') {
      const file = files?.[0] || null;
      if (file) {
        if (!resumeTypes.includes(file.type)) {
          setError('Resume must be a PDF, DOC, or DOCX file.');
          event.target.value = '';
          setApplication((current) => ({ ...current, resume: null }));
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          setError('Resume must be smaller than 5 MB.');
          event.target.value = '';
          setApplication((current) => ({ ...current, resume: null }));
          return;
        }
      }
      setApplication((current) => ({ ...current, resume: file }));
    } else {
      setApplication((current) => ({
        ...current,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }

    setSubmitted(false);
    setError('');
  };

  const readFileAsBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = () => reject(new Error('We could not read your resume. Please try again.'));
    reader.readAsDataURL(file);
  });

  const handleApplicationSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError('');

    const fullName = application.fullName.trim();
    const email = application.email.trim().toLowerCase();
    const city = application.city.trim();
    const qualification = application.qualification.trim();

    if (fullName.length < 2) {
      setError('Please enter your full name.');
      setSubmitting(false);
      return;
    }

    if (!isValidPhoneNumber(application.phone || '')) {
      setError('Please enter a valid phone number, including the country code.');
      setSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !city || !qualification || !application.programme) {
      setError('Please complete all required fields and enter a valid email address.');
      setSubmitting(false);
      return;
    }

    if (!application.consent) {
      setError('Please confirm consent before submitting.');
      setSubmitting(false);
      return;
    }

    try {
      let resume = null;
      if (application.resume) {
        resume = {
          filename: application.resume.name,
          mimeType: application.resume.type,
          data: await readFileAsBase64(application.resume),
        };
      }

      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone: application.phone,
          city,
          qualification,
          programme: application.programme,
          resume,
          consent: application.consent,
          website: event.currentTarget.elements.website.value,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'We could not submit your application. Please try again.');
      }

      setApplication(emptyApplication);
      setResumeKey((key) => key + 1);
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
              <input id="application-full-name" name="fullName" value={application.fullName} onChange={handleApplicationChange} required minLength={2} maxLength={120} autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="application-email" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Email *</label>
              <input id="application-email" name="email" type="email" value={application.email} onChange={handleApplicationChange} required maxLength={254} autoComplete="email" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="application-phone" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Phone *</label>
              <PhoneInput
                id="application-phone"
                international
                defaultCountry="IN"
                countryCallingCodeEditable={true}
                value={application.phone}
                onChange={(value) => {
                  setApplication((current) => ({ ...current, phone: value || '' }));
                  setSubmitted(false);
                  setError('');
                }}
                limitMaxLength
                required
                className="PhoneInput"
                numberInputProps={{
                  name: 'phone',
                  autoComplete: 'tel',
                  'aria-label': 'Phone number',
                  className: inputClass,
                }}
              />
            </div>
            <div>
              <label htmlFor="application-city" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">City *</label>
              <input id="application-city" name="city" value={application.city} onChange={handleApplicationChange} required minLength={2} maxLength={100} autoComplete="address-level2" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="application-qualification" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Highest qualification *</label>
              <input id="application-qualification" name="qualification" value={application.qualification} onChange={handleApplicationChange} required minLength={2} maxLength={150} className={inputClass} />
            </div>
            <div>
              <label htmlFor="application-programme" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">Programme of interest *</label>
              <select id="application-programme" name="programme" value={application.programme} onChange={handleApplicationChange} required className={inputClass}>
                <option value="">Select a programme</option>
                <option value="Master Programme in AI/ML for Trading and Investment">Master Programme in AI/ML for Trading and Investment</option>
                <option value="Algorithmic Trading">Algorithmic Trading</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="application-resume" className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
              Resume <span className="font-normal text-[var(--text-muted)]">(optional)</span>
            </label>
            <input
              key={resumeKey}
              id="application-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleApplicationChange}
              className="block w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] text-sm text-[var(--text-muted)] file:mr-4 file:border-0 file:bg-[var(--accent)] file:px-4 file:py-3 file:text-sm file:font-semibold file:text-slate-950"
            />
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {application.resume ? `Selected: ${application.resume.name}` : 'Choose a PDF, DOC, or DOCX file (maximum 5 MB).'}
            </p>
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