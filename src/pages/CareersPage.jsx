import { useState } from 'react';
import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader } from '../components/ui';

/* Where applications are sent. Change this to your real endpoint. */
const APPLY_ENDPOINT = '/api/careers';

const areas = [
  ['Research', 'Help us conduct cutting-edge research in quantitative finance and AI systems.'],
  ['Engineering', 'Build production-grade systems for research, trading and learning infrastructure.'],
  ['Education', 'Mentor and teach the next generation of quantitative professionals.'],
];

const experienceLevels = [
  ['0-2', '0–2 years'],
  ['2-5', '2–5 years'],
  ['5-10', '5–10 years'],
  ['10+', '10+ years'],
];

const positions = [
  'Quantitative Researcher',
  'Machine Learning Engineer',
  'Software Engineer',
  'Data Engineer',
  'Trading Systems Engineer',
  'Research Analyst',
  'Stock Trader',
  'Instructor / Mentor',
  'Other',
];

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  linkedIn: '',
  experience: '',
  position: '',
  resume: null,
  coverLetter: '',
  agreed: false,
};

const inputClass =
  'w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30';

function Field({ id, label, required = false, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {hint && <span className="ml-2 text-sm font-normal text-[var(--text-muted)]">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

export default function CareersPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [fileKey, setFileKey] = useState(0); /* resets the file input after a successful send */
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] || null : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'agreed' || value === null || value === '') return;
        body.append(key, value);
      });

      const res = await fetch(APPLY_ENDPOINT, { method: 'POST', body });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);

      setSubmitted(true);
      setFormData(emptyForm);
      setFileKey((k) => k + 1);
    } catch {
      setError('We could not send your application. Please try again, or email hello@alphaedge.in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Careers | AlphaEdge"
      description="Join AlphaEdge and be part of a premier research-led institute. We're looking for passionate individuals in quantitative finance, engineering, and AI."
      keywords="careers, jobs, hiring, quantitative finance, AI, trading, research"
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <Reveal as="p" className={T.eyebrow}>
          Join us
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
        >
          Build the future of quantitative finance and AI
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          AlphaEdge is building a team of researchers, engineers and practitioners. We’re looking for exceptional
          people to help advance quantitative finance and applied AI.
        </Reveal>
        <Reveal delay={300} className="mt-8">
          <a
            href="#apply"
            className="inline-flex items-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-6 py-3 text-sm font-semibold text-[var(--accent-strong)] transition-colors hover:bg-[var(--accent)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            Apply now
          </a>
        </Reveal>
      </Section>

      {/* ============================ AREAS ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Where you could work" title="Three ways to contribute" />
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map(([title, text], i) => (
            <Reveal key={title} delay={i * 120} className={T.cardAlt}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{title}</h3>
              <p className={T.body}>{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ APPLICATION ============================ */}
      <Section>
        <div id="apply" className="mx-auto max-w-3xl scroll-mt-24">
          <SectionHeader
            eyebrow="Application"
            title="Submit your application"
            description="Fields marked * are required."
          />

          <Reveal className={T.card}>
            {submitted && (
              <div
                role="status"
                className="mb-8 flex items-start gap-3 rounded-xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-4"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-bold text-[var(--accent-strong)]"
                >
                  ✓
                </span>
                <p className="pt-0.5 text-sm leading-6 text-[var(--text-primary)]">
                  Application submitted. We’ll review your profile and get back to you.
                </p>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="mb-8 flex items-start gap-3 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 p-4"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ef4444]/15 text-sm font-bold text-[#ef4444]"
                >
                  ✕
                </span>
                <p className="pt-0.5 text-sm leading-6 text-[var(--text-primary)]">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="fullName" label="Full name" required>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </Field>
                <Field id="email" label="Email" required>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="phone" label="Phone" required>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </Field>
                <Field id="linkedIn" label="LinkedIn profile">
                  <input
                    id="linkedIn"
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="experience" label="Years of experience" required>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select experience level</option>
                    {experienceLevels.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="position" label="Position of interest" required>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select a position</option>
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="resume" label="Resume" hint="PDF or Word">
                <input
                  key={fileKey}
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[var(--accent)]/15 file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-[var(--accent-strong)]`}
                />
              </Field>

              <Field id="coverLetter" label="Cover letter or message">
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us why you’re interested in joining AlphaEdge."
                />
              </Field>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreed"
                  id="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded accent-[var(--accent)]"
                />
                <label htmlFor="agreed" className="text-sm leading-6 text-[var(--text-secondary)]">
                  I agree that AlphaEdge can store and process my information for recruitment purposes.
                  <span aria-hidden="true"> *</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Submitting…' : 'Submit application'}
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}