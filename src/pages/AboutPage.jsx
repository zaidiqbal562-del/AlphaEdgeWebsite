import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import { aboutCards } from '../data/aboutCards';

const checklist = [
  'PhD and M.Tech-qualified faculty',
  'Practitioners in AI/ML, data and markets',
  'Built around NSE data and SEBI rules',
];

export default function AboutPage() {
  return (
    <Layout
      title="About AlphaEdge | Quantitative Finance & AI Institute"
      description="AlphaEdge is a premium institute where research, strategy, execution and AI combine to develop leaders in quantitative finance and market intelligence."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">
            ABOUT ALPHAEDGE
          </p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">
            Industry depth meets research rigour
          </h1>
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_1.45fr] lg:px-8">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] sm:p-8">
            <div className="mb-6 flex items-center justify-start">
              <img src="/logocropped.jpeg" alt="AlphaEdge" className="h-12 w-auto object-contain" />
            </div>

            <p className="text-lg leading-8 text-[var(--text-primary)] sm:text-xl sm:leading-9">
              We train capital-market professionals to build, test and govern AI-driven trading systems.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-[var(--text-secondary)] sm:text-base">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-slate-950">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutCards.map((card) => {
              const hasDescription = Boolean(card.description && card.description.trim());

              return (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 sm:p-6"
                >
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-xl">
                    {card.title}
                  </h2>

                  {hasDescription && (
                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                      {card.description}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Next step</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.06em] text-[var(--text-primary)]">See the flagship programme.</h2>
            </div>
            <Link to="/programmes/ai-900" className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              Explore AI-900
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
