import Layout from '../layout/Layout';

const mentors = [
  {
    name: 'Mentor 1',
    role: 'Quantitative Researcher',
    expertise: 'Signal research and systematic strategy development',
    bio: 'Combines market research with disciplined quantitative methods.',
  },
  {
    name: 'Mentor 2',
    role: 'Machine Learning Engineer',
    expertise: 'Deep learning systems and production ML',
    bio: 'Specialized in scaling ML systems for financial market applications.',
  },
  {
    name: 'Mentor 3',
    role: 'Risk Manager',
    expertise: 'Portfolio risk and execution systems',
    bio: 'Expert in risk architecture and governance frameworks.',
  },
  {
    name: 'Mentor 4',
    role: 'Trading Systems Lead',
    expertise: 'Algorithmic trading and market execution',
    bio: 'Designs execution strategies for institutional trading.',
  },
];

export default function MentorsPage() {
  return (
    <Layout
      title="Mentors | AlphaEdge"
      description="Meet the AlphaEdge mentors and practitioner faculty guiding research, quantitative finance and AI-led market disciplines."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Mentors</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">Practitioner-led guidance from research to execution.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            AlphaEdge mentors combine market understanding with technical depth, helping learners move from theory into disciplined systems thinking and applied outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-5 h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,_rgba(45,212,191,0.25),_rgba(168,85,247,0.25))]" />
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{mentor.name}</h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">{mentor.role}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{mentor.expertise}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{mentor.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
