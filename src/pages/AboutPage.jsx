import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="About AlphaEdge | Quantitative Finance & AI Institute"
      description="AlphaEdge is a premium institute where research, strategy, execution and AI combine to develop leaders in quantitative finance and market intelligence."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Who we are</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Built for modern market operators.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            AlphaEdge exists to bridge two worlds: disciplined market research and applied AI engineering. We combine institutional-grade thinking with practical systems training to create professionals who can work across research, trading, risk, data and portfolio decisions.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {[
            { title: 'Research-first', text: 'We teach the discipline of questioning assumptions, validating signals and assessing evidence before acting on a strategy.' },
            { title: 'Execution-aware', text: 'Financial systems are not abstract. We highlight market structure, costs, risk controls and operational design as part of the learning loop.' },
            { title: 'AI-enabled', text: 'We blend classical quantitative methods with generative AI, retrieval systems, orchestration and governance for production-minded outcomes.' },
          ].map((item) => (
            <article key={item.title} className="rounded-[20px] sm:rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Our model</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] text-[var(--text-primary)]">Multi-disciplinary learning, not fragmented theory.</h2>
            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              Students move through the complete learning arc: foundations, modelling, systems design, AI applications, risk-aware deployment and governance. The result is a production mindset built for modern financial organisations and research teams.
            </p>
          </div>

          <div className="space-y-5">
            {[
              'Quantitative methods and market structure',
              'Data engineering and feature design',
              'ML, deep learning and LLM systems',
              'Strategy validation, risk controls and governance',
              'Capstone systems with defence and review',
            ].map((point, index) => (
              <div key={point} className="flex items-start gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-slate-950">0{index + 1}</div>
                <p className="text-base text-[var(--text-primary)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Commitment</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] text-[var(--text-primary)]">A professional standard for research and AI.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Ethical and responsible practice', 'We teach the discipline of accountable systems, transparent methods and measurable risk.'],
              ['02', 'Applied to real market problems', 'The programme is built around market-relevant issues: signal quality, risk, performance, execution and governance.'],
              ['03', 'Defensible outcomes', 'We train students to present, defend and iterate on technical work in a way that stands up to review.'],
            ].map(([number, title, text]) => (
              <div key={title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{number}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
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
