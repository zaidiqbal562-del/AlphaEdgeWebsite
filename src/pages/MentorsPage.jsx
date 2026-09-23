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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Mentors</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Practitioner-led guidance from research to execution.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            AlphaEdge mentors combine market understanding with technical depth, helping learners move from theory into disciplined systems thinking and applied outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-4 grid-cols-1 sm:gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="rounded-[20px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <div className="mb-3 h-12 w-12 rounded-lg sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl bg-[linear-gradient(135deg,_rgba(45,212,191,0.25),_rgba(168,85,247,0.25))]" />
              <h2 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">{mentor.name}</h2>
              <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)] sm:mt-2 sm:tracking-[0.18em]">{mentor.role}</p>
              <p className="mt-2.5 text-xs sm:text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:leading-7">{mentor.expertise}</p>
              <p className="mt-2.5 text-xs sm:text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:leading-7">{mentor.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
