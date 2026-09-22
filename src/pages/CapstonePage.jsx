import Layout from '../layout/Layout';

const capstones = [
  {
    number: '01',
    title: 'Research Quality',
    description: 'Hypothesis formation, signal validation, walk-forward testing and evidence-based decision making.'
  },
  {
    number: '02',
    title: 'System Design',
    description: 'Architecture for risk management, execution awareness, data pipelines and operational governance.'
  },
  {
    number: '03',
    title: 'Defensive Practice',
    description: 'Students present and defend their work to mentors and peers, learning to articulate technical choices.'
  },
];

export default function CapstonePage() {
  return (
    <Layout
      title="Capstone | AlphaEdge"
      description="AlphaEdge capstone projects integrate systematic trading, data science, AI workflows and governance-ready system design."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Capstone</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">A final defence of research quality, system design and judgement.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            The capstone is the culmination of the programme, where students build and defend market-relevant systems with attention to evidence, risk and operational maturity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capstones.map((item) => (
            <article key={item.number} className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{item.number}</div>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
