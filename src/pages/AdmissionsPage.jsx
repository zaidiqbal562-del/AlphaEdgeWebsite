import { useState } from 'react';
import Layout from '../layout/Layout';
import NumberCounter from '../components/NumberCounter';
import { T, Reveal, Section, SectionHeader, Banner } from '../components/ui';

/* Where application emails go, and where the brochure lives. */
const BROCHURE_PATH = '/alphaedge-1Year.html';
const emptyApplication = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  qualification: '',
  programme: '',
  consent: false,
};

const profiles = [
  ['Career changers', 'Professionals transitioning into quantitative finance and AI.'],
  ['Engineers moving into finance', 'Software engineers and data engineers seeking financial expertise.'],
  ['Market practitioners', 'Traders, portfolio managers and risk professionals advancing their technical skills.'],
  ['Institutional cohorts', 'Teams from financial institutions and hedge funds.'],
];

const stats = [
  { target: 52, duration: 2000, label: 'Weeks' },
  { target: 13, duration: 1500, label: 'Modules' },
  { target: 1100, duration: 2000, suffix: '+', label: 'Hours' },
  { target: 17, duration: 1500, label: 'Week capstone' },
  { target: 400, duration: 2000, suffix: '+', label: 'Concepts' },
  { static: '1:6', label: 'Mentor ratio' },
];

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]';
const secondaryBtn =
  'inline-flex items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-6 py-3 text-sm font-semibold text-[var(--accent-strong)] transition-colors hover:bg-[var(--accent)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]';
const inputClass =
  'w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30';

export default function AdmissionsPage() {
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
    <Layout
      title="Admissions | AlphaEdge"
      description="Learn how to apply to AlphaEdge programmes and discover the ideal learner profiles for our quantitative finance and applied AI institute."
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <Reveal as="p" className={T.eyebrow}>
          Admissions
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
        >
          Admissions for disciplined learners and builders
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          AlphaEdge welcomes individuals and teams ready to study quantitative finance, applied AI and systematic
          market decision-making with seriousness and structure.
        </Reveal>
        <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#application" className={primaryBtn}>
            Apply now
          </a>
          <a href={BROCHURE_PATH} className={secondaryBtn}>
            Open brochure
          </a>
        </Reveal>
      </Section>

      {/* ============================ WHO SHOULD APPLY ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Who should apply" title="Four kinds of learner we build the programme for" />
        <div className="grid gap-6 md:grid-cols-2">
          {profiles.map(([title, text], i) => (
            <Reveal key={title} delay={(i % 2) * 120} className={T.cardAlt}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{title}</h3>
              <p className={T.body}>{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ PROGRAMME AT A GLANCE ============================ */}
      <Section>
        <SectionHeader
          eyebrow="Curriculum overview"
          title="The AI-900 programme at a glance"
          description="The brochure covers the programme structure, curriculum breakdown, assessment method and learning outcomes."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 6) * 80} className={`${T.card} !p-5`}>
              <p className="text-3xl font-black tracking-tight text-[var(--accent-strong)] sm:text-4xl">
                {stat.static ? (
                  stat.static
                ) : (
                  <NumberCounter target={stat.target} duration={stat.duration} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href={BROCHURE_PATH} className={secondaryBtn}>
            Open brochure
          </a>
        </Reveal>

        <Banner label="Next cohort">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Book a consultation</h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
            Review fit, discuss programme scope and understand the learning pathway that best matches your goals.
          </p>
          <a href="#application" className={`${primaryBtn} mt-6`}>
            Apply now
          </a>
        </Banner>
      </Section>

      <Section alt>
        <div id="application" className="mx-auto max-w-3xl scroll-mt-24">
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
              <div
                aria-hidden="true"
                className="absolute h-px w-px overflow-hidden"
              >
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
      </Section>
    </Layout>
  );
}