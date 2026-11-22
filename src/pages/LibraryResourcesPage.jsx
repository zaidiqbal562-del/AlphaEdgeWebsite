import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import { Reveal, Section, SectionHeader, T } from '../components/ui';


export default function LibraryResourcesPage() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    fetch('/api/auth', { credentials: 'include' })
      .then((response) => (response.ok ? response.json() : null))
      .then((result) => setAuthUser(result?.user || null))
      .catch(() => setAuthUser(null));
  }, []);

  const isStudent = authUser?.role === 'student';

  return (
    <Layout
      title="Library Resources | AlphaEdge"
      description="Public roadmap PDF with supplementary resources for enrolled AlphaEdge students."
    >
      <Section>
        <SectionHeader
          eyebrow="Library resources"
          title="Library Resources"
          description="Additional resources are available to enrolled students."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className={T.cardAlt}>
            <p className={T.eyebrow}>Public resource</p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
              Fintech SDE Roadmap — 40 LPA
            </h2>
            <p className={T.body}>A structured fintech software engineering roadmap.</p>

            {/* <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-white">
              <iframe
                title="Fintech SDE Roadmap PDF"
                src="/Fintech_SDE_Roadmap_40LPA.pdf"
                className="h-[520px] w-full"
              />
            </div> */}

            <a
              href="/Fintech_SDE_Roadmap_40LPA.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Open or download PDF
            </a>
          </Reveal>

          {isStudent ? (
            <Reveal className={T.cardAlt} delay={100}>
              <p className={T.eyebrow}>Enrolled Student resources </p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                Shanghai Futures Exchange
              </h2>
              <img
                src="/marketpic/images (1).jpg.jpeg"
                alt="Shanghai Futures Exchange"
                className="mt-6 w-full rounded-xl border border-[var(--border-soft)] object-cover"
              />
            </Reveal>
          ) : (
            <Reveal className={T.cardAlt} delay={100}>
              <p className="text-lg font-bold text-[var(--text-primary)]">Student-only resource</p>
              <p className={T.body}>Additional library images are available only after student login.</p>
              {!authUser && (
                <Link
                  to="/login"
                  className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Login to access
                </Link>
              )}
            </Reveal>
          )}
        </div>
      </Section>
    </Layout>
  );
}
