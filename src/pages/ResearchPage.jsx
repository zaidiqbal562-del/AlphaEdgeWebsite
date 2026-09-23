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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Research</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Ideas shaped by evidence, discipline and market reality.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            AlphaEdge translates market complexity into research frameworks that combine statistical reasoning, systems thinking and AI literacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchPosts.map((item) => (
            <article key={item.title} className="rounded-[20px] sm:rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:mb-4 sm:text-[10px] sm:tracking-[0.25em]">{item.category}</div>
              <h2 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">{item.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)] sm:mt-6 sm:text-xs sm:tracking-[0.18em]">
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
