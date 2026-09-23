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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Programmes</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Learning pathways built for serious market capability.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            AlphaEdge delivers structured, research-led education for individuals and teams aiming to work at the intersection of finance, signals, AI systems and disciplined execution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {programmes.map((programme) => (
            <article key={programme.title} className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-7 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
              <div className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                {programme.badge}
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">{programme.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{programme.description}</p>
             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={programme.href}
                className="inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950"
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
