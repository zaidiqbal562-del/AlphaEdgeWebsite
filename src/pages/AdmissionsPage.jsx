import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import NumberCounter from '../components/NumberCounter';

const admissionsProfiles = [
  'Career Changers | Professionals transitioning into quantitative finance and AI',
  'Engineers Moving into Finance | Software engineers, data engineers seeking financial expertise',
  'Market Practitioners | Traders, portfolio managers, risk professionals advancing technical skills',
  'Institutional Cohorts | Teams from financial institutions and hedge funds',
];

export default function AdmissionsPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadBrochure = async () => {
    setDownloading(true);
    try {
      window.location.href = '/alphaedge-1Year';
    } catch (error) {
      console.error('Navigation failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Layout
      title="Admissions | AlphaEdge"
      description="Learn how to apply to AlphaEdge programmes and discover the ideal learner profiles for our quantitative finance and applied AI institute."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Admissions</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Admissions for disciplined learners and builders.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            AlphaEdge welcomes individuals and teams ready to study quantitative finance, applied AI and systematic market decision-making with seriousness and structure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Who should apply?</h2>
            <ul className="mt-6 space-y-4">
              {admissionsProfiles.map((profile, index) => (
                <li 
                  key={profile} 
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4 text-base text-[var(--text-primary)]"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-slate-950 flex-shrink-0">✓</span>
                  <span>{profile}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,_rgba(16,185,129,0.12),_rgba(59,130,246,0.08))] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Next cohort</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Apply now</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Book a consultation to review fit, discuss programme scope and understand the learning pathway that best matches your goals.
            </p>
        <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=zaidiqbal901@gmail.com&su=${encodeURIComponent(
            'AlphaEdge Course Application'
        )}&body=${encodeURIComponent(
            `Hello AlphaEdge HR Team,

        I am interested in applying for an AlphaEdge programme.

        Please find my details below:

        Full Name:
        Email:
        Phone Number:
        City:
        Qualification:

        Regards,
        [Your Full Name]`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]"
        >
        Apply Now
        </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] p-8 sm:p-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Curriculum Overview</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">Download Course Brochure</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                Get detailed information about our AI-900 programme structure, curriculum breakdown, assessment methodology, and learning outcomes.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {downloading ? 'Opening...' : '📥 Open Brochure'}
              </button>
                 
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]"><NumberCounter target={52} duration={2000} /></div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Weeks</div>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]"><NumberCounter target={13} duration={1500} /></div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Modules</div>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]"><NumberCounter target={1100} duration={2000} suffix="+" /></div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Hours</div>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]"><NumberCounter target={17} duration={1500} /></div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Week Capstone</div>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]"><NumberCounter target={400} duration={2000} suffix="+" /></div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Concepts</div>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/50 p-4 text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">1:6</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Mentor Ratio</div>
              </div>
       
            </div>
                  <div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=zaidiqbal901@gmail.com&su=${encodeURIComponent(
                    'AlphaEdge Course Application'
                )}&body=${encodeURIComponent(
                    `Hello AlphaEdge HR Team,

                I am interested in applying for an AlphaEdge programme.

                Please find my details below:

                Full Name:
                Email:
                Phone Number:
                City:
                Qualification:

                Regards,
                [Your Full Name]`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]"
                >
                Apply Now
                </a>
                </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
