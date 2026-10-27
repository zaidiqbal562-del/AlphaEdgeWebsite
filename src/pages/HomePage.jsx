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
     {/* Full-width hero section */}
<section className="relative isolate w-full overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/pageone.jpeg')" }}
  />

  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 -z-10 bg-slate-950/65" />

  {/* Extra gradient: darker behind text, brighter on the right */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-blue-950/20" />

  {/* Hero content */}
  <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
    <div className="max-w-4xl">
      <p className="mb-6 inline-flex rounded-full border border-teal-300/40 bg-slate-950/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-300 shadow-lg backdrop-blur-md">
        Research-led education for modern markets
      </p>

      <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
        Build the next generation of market intelligence.
      </h1>

      <p className="mt-6 max-w-2xl rounded-lg text-base font-medium leading-8 text-white drop-shadow-md sm:text-lg">
        AlphaEdge brings together quantitative finance, algorithmic trading,
        machine learning and applied AI in a disciplined system for
        professionals, researchers and future market builders.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/programmes/ai-900"
          className="inline-flex items-center justify-center rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-teal-300"
        >
          Explore AI-900
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-teal-300"
        >
          Book a consultation
        </Link>
      </div>

      {/* Programme statistics */}
      <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
        <div className="rounded-xl border border-white/25 bg-slate-950/65 p-4 shadow-lg backdrop-blur-md sm:p-5">
          <div className="text-2xl font-black text-white sm:text-3xl">
            <NumberCounter target={52} duration={2000} />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
            Weeks
          </p>
        </div>

        <div className="rounded-xl border border-white/25 bg-slate-950/65 p-4 shadow-lg backdrop-blur-md sm:p-5">
          <div className="text-2xl font-black text-white sm:text-3xl">
            <NumberCounter target={13} duration={1500} />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
            Modules
          </p>
        </div>

        <div className="rounded-xl border border-white/25 bg-slate-950/65 p-4 shadow-lg backdrop-blur-md sm:p-5">
          <div className="text-2xl font-black text-white sm:text-3xl">
            <NumberCounter target={1100} duration={2000} suffix="+" />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
            Guided hours
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Core disciplines</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">What we teach</h2>
          </div>
          <Link to="/programmes" className="hidden text-sm font-semibold text-[var(--accent)] sm:inline-flex">View all programmes</Link>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[20px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6 shadow-[0_18px_50px_rgba(2,6,23,0.18)]">
              <div className="mb-3 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:mb-4 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.25em]">Discipline</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">AlphaEdge advantage</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Why teams choose us</h2>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            {whyAlphaEdge.map((item) => (
              <div key={item.title} className="rounded-[20px] sm:rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-5">
                <div className="mb-3 h-9 w-9 rounded-xl sm:mb-5 sm:h-11 sm:w-11 sm:rounded-2xl bg-[var(--accent)]/12" />
                <h3 className="text-base sm:text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-[var(--text-secondary)] sm:mt-3 sm:text-sm sm:leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Built for action</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Programme metrics</h2>
          </div>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:gap-4 sm:grid-cols-3 xl:gap-5 xl:grid-cols-6">
          {programmeStats.map((stat, index) => (
            <div key={index} className="rounded-[16px] sm:rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-3 sm:p-5 text-center">
              <div className="text-lg font-black tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl sm:tracking-[-0.06em]">
                <NumberCounter 
                  target={parseInt(stat.value.toString().replace(/[^0-9]/g, ''))} 
                  duration={2000}
                  suffix={stat.suffix}
                />
              </div>  
              <div className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:mt-2 sm:text-[11px] sm:tracking-[0.25em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-strong)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Expert guidance</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Mentors & practitioners</h2>
            </div>
            <Link to="/mentors" className="text-sm font-semibold text-[var(--accent)]">Meet the faculty</Link>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="rounded-[20px] sm:rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-5">
                <div className="mb-3 h-12 w-12 rounded-lg sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl bg-[linear-gradient(135deg,_rgba(45,212,191,0.25),_rgba(168,85,247,0.25))]" />
                <h3 className="text-base sm:text-xl font-semibold text-[var(--text-primary)]">{mentor.name}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)] sm:mt-2 sm:text-sm sm:tracking-[0.18em]">{mentor.role}</p>
                <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-sm sm:leading-7">{mentor.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Research desk</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Fresh thinking from the lab</h2>
          </div>
          <Link to="/research" className="text-sm font-semibold text-[var(--accent)]">Read more</Link>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchPosts.map((item) => (
            <article key={item.title} className="rounded-[20px] sm:rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:mb-4 sm:text-[10px] sm:tracking-[0.25em]">{item.category}</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">{item.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)] sm:mt-6 sm:text-xs sm:tracking-[0.18em]">
                <span>{item.author}</span>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-[24px] sm:rounded-[30px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,_rgba(16,185,129,0.12),_rgba(59,130,246,0.08),_rgba(168,85,247,0.12))] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">Admissions open</p>
              <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-3xl md:text-4xl sm:tracking-[-0.06em]">
                Prepare for quantitative, AI-led decision making in modern capital markets.
              </h2>
            </div>
            <Link to="/admissions" className="inline-flex rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] whitespace-nowrap sm:px-6 sm:py-3 sm:text-sm">
              Apply for next cohort
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
