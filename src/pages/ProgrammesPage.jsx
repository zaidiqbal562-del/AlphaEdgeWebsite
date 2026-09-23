import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import BrochureButton from '../components/BrochureButton';
const programmes = [
  {
    title: 'AI-900 — Master Programme in Applied Artificial Intelligence for Financial Systems',
    description: '52-week flagship programme. Machine learning, deep learning, generative AI, retrieval architectures, MCP, agentic systems, production engineering and governance — taught completely, in sequence, with nothing assumed and nothing skipped.',
    href: '/programmes/ai-900',
    badge: 'Flagship programme',
    stats: {
      weeks: 52,
      modules: 13,
      hours: 1100,
    }
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Programmes</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Learning pathways built for serious market capability.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            AlphaEdge delivers structured, research-led education for individuals and teams aiming to work at the intersection of finance, signals, AI systems and disciplined execution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-5 grid-cols-1 sm:gap-6 lg:grid-cols-2">
          {programmes.map((programme) => (
            <article key={programme.title} className="rounded-[24px] sm:rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 sm:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
              <div className="mb-3 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:mb-4 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.25em]">
                {programme.badge}
              </div>
              <h2 className="text-xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:text-3xl sm:tracking-[-0.04em]">{programme.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">{programme.description}</p>
             <div className="mt-6 flex flex-col gap-2.5 sm:gap-3 sm:mt-8 sm:flex-row sm:items-center">
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
