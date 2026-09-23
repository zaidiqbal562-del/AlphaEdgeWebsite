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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Student projects</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Applied research that moves from notebook to production.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            Students work on practical problems involving data pipelines, strategy design, microstructure awareness, AI workflows and operational governance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-5 sm:gap-6">
          {studentProjects.map((project) => (
            <article key={project.title} className="rounded-[20px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:tracking-[-0.04em]">{project.title}</h2>
              <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">Problem</p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">Approach</p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">{project.approach}</p>
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">Technology</p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">{project.technology}</p>
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">Validation</p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">{project.validation}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4 text-xs leading-6 text-[var(--text-primary)] sm:text-base sm:leading-7">
                <span className="font-semibold text-[var(--accent)]">Output:</span> <span className="block sm:inline mt-1 sm:mt-0">{project.output}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
