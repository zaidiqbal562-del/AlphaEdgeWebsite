import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

export default function AlgoTradingPage() {
  return (
    <Layout
      title="Algorithmic Trading | AlphaEdge"
      description="Learn algorithmic trading, market microstructure, execution quality, research design and risk-aware decision making at AlphaEdge."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Algo trading</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Professional systems thinking for market execution.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Trading is not just about patterns. It is about market structure, cost awareness, validation, risk controls and operational discipline. AlphaEdge designs learning around that reality.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ['Market microstructure', 'Understand order flow, execution quality, latency and the way information changes behaviour across venues.'],
            ['System design', 'Translate signals into systematic rules with risk controls, validation frameworks and operational discipline.'],
            ['Execution strategy', 'Value the cost of trading, slippage, decision quality and review cycles in a realistic environment.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Framework</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">From signal to system</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ['Research process', 'Hypothesis, dataset design, signal filtering, validation and review under realistic constraints.'],
            ['Model validation', 'Walk-forward testing, out-of-sample checks, regime awareness and interpretation of performance metrics.'],
            ['Risk architecture', 'Scenario controls, exposure management, drawdown awareness and capital discipline.'],
            ['Operational practice', 'Monitoring, review cadence, model governance and system maintenance in a dynamic market environment.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,_rgba(45,212,191,0.1),_rgba(59,130,246,0.08))] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Apply</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.06em] text-[var(--text-primary)]">Explore the training path behind systematic market work.</h2>
            </div>
            <Link to="/programmes/ai-900" className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              View flagship programme
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
