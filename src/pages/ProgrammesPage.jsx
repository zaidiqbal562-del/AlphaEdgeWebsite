import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import BrochureButton from '../components/BrochureButton';

const programmes = [
  {
    title: 'AI-900 — Master Programme in Applied Artificial Intelligence for Financial Systems',
    summary:
      '52-week flagship programme. Machine learning, deep learning, generative AI, retrieval architectures, MCP, agentic systems, production engineering and governance — taught completely, in sequence, with nothing assumed and nothing skipped.',
    focus: 'Applied AI for market-facing financial systems and decision support.',
    approach: 'Structured, research-led learning that moves from fundamentals to deployment.',
    delivery: '13 modules across 52 weeks, with 1,100 hours covering engineering, modelling and governance.',
    outcome: 'A complete capability stack for building and managing AI systems in finance.',
    result: 'A practical, production-oriented AI skillset for modern financial systems.',
    href: '/programmes/ai-900',
    badge: 'Flagship programme',
    stats: {
      weeks: 52,
      modules: 13,
      hours: 1100,
    },
  },
  {
    title: 'AI & Agents in Finance — Certificate Programme',
    summary:
      '5-month certificate for finance and technology professionals. Machine learning, forecasting, generative AI, RAG and multi-agent workflows applied to real financial problems — with no prior coding background required.',
    focus: 'Applying AI, machine learning and autonomous agents to banking, trading and investment use cases.',
    approach: 'Finance-first learning through weekly live sessions, hands-on practice and an industry-relevant capstone project.',
    delivery: '8 modules over 5 months, from AI foundations and financial data analytics to FinTech product design and governance.',
    outcome: 'The ability to build predictive models, RAG pipelines and agent workflows, and to govern them responsibly.',
    result: 'Practical, finance-ready AI skills, proven through a capstone project and responsible-AI judgement.',
    href: '/programmes/ai-agents-finance',
    badge: 'Certificate programme',
    stats: {
      weeks: 20,
      modules: 8,
    },
  },
];

export default function ProgrammesPage() {
  return (
    <Layout
      title="Programmes | AlphaEdge"
      description="Explore flagship programmes in quantitative finance, algorithmic trading, research and applied AI at AlphaEdge."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">
            Programmes
          </p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">
            Learning pathways built for serious market capability.
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            AlphaEdge delivers structured, research-led education for individuals and teams aiming to work at the
            intersection of finance, signals, AI systems and disciplined execution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-5 sm:gap-6">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className="rounded-[20px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.25em]">
                  {programme.badge}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.2em]">
                  <span>{programme.stats.weeks} weeks</span>
                  <span className="text-[var(--border-soft)]">•</span>
                  <span>{programme.stats.modules} modules</span>
                  {programme.stats.hours && (
                    <>
                      <span className="text-[var(--border-soft)]">•</span>
                      <span>{programme.stats.hours} hours</span>
                    </>
                  )}
                </div>
              </div>

              <h2 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:mt-6 sm:text-3xl sm:tracking-[-0.04em]">
                {programme.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">
                {programme.summary}
              </p>

              <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">
                    Focus
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">
                    {programme.focus}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">
                    Approach
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">
                    {programme.approach}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">
                    Delivery
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">
                    {programme.delivery}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">
                    Outcome
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:mt-2 sm:text-base sm:leading-7">
                    {programme.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 text-xs leading-6 text-[var(--text-primary)] sm:mt-6 sm:rounded-2xl sm:p-4 sm:text-base sm:leading-7">
                <span className="font-semibold text-[var(--accent)]">Result:</span>{' '}
                <span className="mt-1 block sm:mt-0 sm:inline">{programme.result}</span>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center">
                <Link
                  to={programme.href}
                  className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-slate-950 sm:px-5 sm:py-3 sm:text-sm"
                >
                  Explore programme
                </Link>

                <BrochureButton />
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}