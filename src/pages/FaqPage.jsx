import Layout from '../layout/Layout';

const faqs = [
  {
    question: 'What is the time commitment?',
    answer: 'The AI-900 programme is a 52-week full-time immersive course. Participants are expected to commit 30-40 hours per week of structured learning, projects and mentorship.'
  },
  {
    question: 'What is the prerequisite experience?',
    answer: 'We welcome professionals from finance, engineering, data science and research backgrounds. Strong fundamentals in mathematics, programming and problem-solving are essential.'
  },
  {
    question: 'Are there payment plans?',
    answer: 'Yes. We offer flexible payment options including full payment, quarterly instalments and deferred payment plans depending on circumstances.'
  },
  {
    question: 'What career outcomes can I expect?',
    answer: 'Graduates transition to roles in quantitative research, algorithmic trading, ML engineering, portfolio management and fintech leadership at tier-1 institutions.'
  },
];

export default function FaqPage() {
  return (
    <Layout
      title="FAQ | AlphaEdge"
      description="Frequently asked questions about AlphaEdge programmes, curriculum, mentorship and outcomes."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">FAQ</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Questions about the programme and the learning path.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-6" open>
              <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--text-primary)]">{item.question}</summary>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
}
