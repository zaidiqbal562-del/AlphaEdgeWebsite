import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import NumberCounter from '../components/NumberCounter';

export default function HomePage() {
  const pillars = [
    {
      title: 'Quantitative Methods',
      description: 'Statistical foundations, probability, optimization and mathematical modelling for financial systems.'
    },
    {
      title: 'Algorithmic Trading',
      description: 'Strategy design, market microstructure, execution, risk management and portfolio construction.'
    },
    {
      title: 'Machine Learning Systems',
      description: 'Feature engineering, supervised learning, deep learning and production-grade ML pipelines.'
    }
  ];

  const programmeStats = [
    { value: '52', label: 'Weeks', suffix: '' },
    { value: '13', label: 'Modules', suffix: '' },
    { value: '1100+', label: 'Hours', suffix: '' },
    { value: '17', label: 'Week Capstone', suffix: '' },
    { value: '400+', label: 'Concepts', suffix: '' },
    { value: '1', label: 'Research mentor ratio', suffix: ':6' },
  ];

  const whyAlphaEdge = [
    { title: 'First Principles', description: 'Understand mechanisms before relying on tools. The programme reconstructs core mathematical and computational ideas from first principles instead of treating frameworks as black boxes.' },
    { title: 'Research Discipline', description: 'Quantitative results are validated under a rigorous process designed for noisy and non-stationary financial data, rather than accepted on intuition or presentation quality alone.' },
    { title: 'Production Engineering', description: 'Systems move beyond notebooks into production-grade evaluation, monitoring, governance and deployment patterns.' },
    { title: 'AI + Markets', description: 'AlphaEdge combines modern AI engineering and financial systems to create practitioners who can design, test and govern intelligent market applications.' },
  ];

  const mentors = [
    { name: 'Mentor 1', role: 'Quant Researcher', expertise: 'Signal research and systematic strategy development' },
    { name: 'Mentor 2', role: 'ML Engineer', expertise: 'Deep learning systems and production ML' },
    { name: 'Mentor 3', role: 'Risk Manager', expertise: 'Portfolio risk and execution systems' },
    { name: 'Mentor 4', role: 'Trading Lead', expertise: 'Algorithmic trading and market execution' },
  ];

  const researchPosts = [
    { title: 'Signal Design 101', category: 'Research', excerpt: 'Foundations of building robust trading signals from market data.', author: 'Team', readTime: '5 min' },
    { title: 'ML in Finance', category: 'Systems', excerpt: 'Applying machine learning responsibly in algorithmic systems.', author: 'Team', readTime: '8 min' },
    { title: 'Risk Frameworks', category: 'Risk', excerpt: 'Building risk controls that survive market stress.', author: 'Team', readTime: '6 min' },
  ];

  return (
    <Layout
      title="AlphaEdge | Quantitative Finance, Algorithmic Trading & AI Institute"
      description="AlphaEdge is a premium research-led institute for quantitative finance, algorithmic trading and applied AI. Learn end-to-end from market foundations to production-grade systems."
      keywords="quantitative finance, algorithmic trading, AI, machine learning, research-led education, fintech"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),_transparent_35%),radial-gradient(circle_at_right,_rgba(168,85,247,0.14),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-1">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Research-led education for modern markets
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
                Build the next generation of market intelligence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                AlphaEdge brings together quantitative finance, algorithmic trading, machine learning and applied AI in a disciplined system for professionals, researchers and future market builders.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/programmes/ai-900" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]">
                  Explore AI-900
                </Link>
                <Link to="/contact" className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]">
                  Book a consultation
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                  <div className="text-2xl font-bold text-[var(--text-primary)]"><NumberCounter target={52} duration={2000} /></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">weeks</div>
                </div>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                  <div className="text-2xl font-bold text-[var(--text-primary)]"><NumberCounter target={13} duration={1500} /></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">modules</div>
                </div>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                  <div className="text-2xl font-bold text-[var(--text-primary)]"><NumberCounter target={1100} duration={2000} suffix="+" /></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">guided hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Core disciplines</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">What we teach</h2>
          </div>
          <Link to="/programmes" className="hidden text-sm font-semibold text-[var(--accent)] sm:inline-flex">View all programmes</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_rgba(2,6,23,0.18)]">
              <div className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Discipline</div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{pillar.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">AlphaEdge advantage</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Why teams choose us</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyAlphaEdge.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <div className="mb-5 h-11 w-11 rounded-2xl bg-[var(--accent)]/12" />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Built for action</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Programme metrics</h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
          {programmeStats.map((stat, index) => (
            <div key={index} className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-center">
              <div className="text-3xl font-black tracking-[-0.06em] text-[var(--text-primary)]">
                <NumberCounter 
                  target={parseInt(stat.value.toString().replace(/[^0-9]/g, ''))} 
                  duration={2000}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Expert guidance</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Mentors & practitioners</h2>
            </div>
            <Link to="/mentors" className="text-sm font-semibold text-[var(--accent)]">Meet the faculty</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <div className="mb-4 h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,_rgba(45,212,191,0.25),_rgba(168,85,247,0.25))]" />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{mentor.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">{mentor.role}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{mentor.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Research desk</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Fresh thinking from the lab</h2>
          </div>
          <Link to="/research" className="text-sm font-semibold text-[var(--accent)]">Read more</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {researchPosts.map((item) => (
            <article key={item.title} className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{item.category}</div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{item.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                <span>{item.author}</span>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,_rgba(16,185,129,0.12),_rgba(59,130,246,0.08),_rgba(168,85,247,0.12))] p-8 sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Admissions open</p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.06em] text-[var(--text-primary)] sm:text-4xl">
                Prepare for quantitative, AI-led decision making in modern capital markets.
              </h2>
            </div>
            <Link to="/admissions" className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              Apply for next cohort
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
