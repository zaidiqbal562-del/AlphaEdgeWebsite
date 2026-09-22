import Layout from '../layout/Layout';

const studentProjects = [
  {
    title: 'Systematic Momentum Signal',
    problem: 'How to isolate momentum from noise using market microstructure data.',
    approach: 'Cross-sectional factor analysis with regime-aware weighting.',
    technology: 'Python, pandas, scikit-learn, backtesting library.',
    validation: 'Walk-forward testing over 5 years, Sharpe ratio > 1.5.',
    output: 'Production-ready signal for portfolio construction.',
  },
  {
    title: 'ML-Driven Market Impact Model',
    problem: 'Predict and minimize market impact of large orders.',
    approach: 'Gradient boosting model trained on venue-level order book data.',
    technology: 'XGBoost, feature engineering, real-time inference.',
    validation: 'Out-of-sample R² > 0.75 on test set.',
    output: 'Execution optimizer reducing slippage by 20%.',
  },
];

export default function ProjectsPage() {
  return (
    <Layout
      title="Student Projects | AlphaEdge"
      description="Explore student projects at AlphaEdge spanning systematic research, execution quality, AI-assisted market intelligence and governance-first tooling."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Student projects</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Applied research that moves from notebook to production.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Students work on practical problems involving data pipelines, strategy design, microstructure awareness, AI workflows and operational governance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {studentProjects.map((project) => (
            <article key={project.title} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">{project.title}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Problem</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Approach</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Technology</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.technology}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">Validation</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.validation}</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4 text-base leading-7 text-[var(--text-primary)]">
                <span className="font-semibold text-[var(--accent)]">Output:</span> {project.output}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
