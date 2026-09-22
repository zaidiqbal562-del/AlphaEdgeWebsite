import Layout from '../layout/Layout';

const researchPosts = [
  {
    title: 'Signal Design 101',
    category: 'Research',
    excerpt: 'Foundations of building robust trading signals from market data. Learn about signal quality metrics and validation.',
    author: 'Team',
    readTime: '5 min'
  },
  {
    title: 'ML in Finance',
    category: 'Systems',
    excerpt: 'Applying machine learning responsibly in algorithmic systems. Best practices for production ML in finance.',
    author: 'Team',
    readTime: '8 min'
  },
  {
    title: 'Risk Frameworks',
    category: 'Risk',
    excerpt: 'Building risk controls that survive market stress. A systematic approach to risk architecture.',
    author: 'Team',
    readTime: '6 min'
  },
];

export default function ResearchPage() {
  return (
    <Layout
      title="Research | AlphaEdge"
      description="Explore AlphaEdge research themes in quantitative finance, algorithmic decision systems and applied AI for financial markets."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Research</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Ideas shaped by evidence, discipline and market reality.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            AlphaEdge translates market complexity into research frameworks that combine statistical reasoning, systems thinking and AI literacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {researchPosts.map((item) => (
            <article key={item.title} className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{item.category}</div>
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{item.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                <span>{item.author}</span>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
