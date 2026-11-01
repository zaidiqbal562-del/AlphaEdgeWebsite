import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import NumberCounter from '../components/NumberCounter';
import useInView from '../hooks/useInView';

/* ------------------------------------------------------------------ */
/* Design tokens: every section below uses these, so the page looks    */
/* the same in dark and light mode and nothing is hard-coded.          */
/* ------------------------------------------------------------------ */

const T = {
  // Card on the normal page background
  card: 'rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-8',
  // Card placed inside an "alt" (tinted) section
  cardAlt: 'rounded-2xl border border-[var(--border-soft)] bg-[var(--page-bg)] p-6 sm:p-8',
  eyebrow: 'text-sm font-semibold text-[var(--accent-strong)]',
  h2: 'mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl',
  lead: 'mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg',
  h3: 'text-xl font-semibold text-[var(--text-primary)]',
  body: 'mt-3 text-base leading-7 text-[var(--text-secondary)]',
  btnPrimary:
    'inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:brightness-110 sm:w-auto',
  btnSecondary:
    'inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto',
};

/* ------------------------------------------------------------------ */
/* Scroll reveal: fades and lifts an element into place every time it  */
/* enters the viewport (pass once to play only the first time).        */
/* Honors "reduce motion" automatically.                               */
/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0, className = '', as: Tag = 'div', once = false }) {
  // once = false -> the animation replays every time the element re-enters the screen
  const [ref, inView] = useInView({ once });

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

function Section({ alt = false, children }) {
  return (
    <section
      className={
        alt
          ? 'border-y border-[var(--border-soft)] bg-[var(--surface-strong)] py-16 sm:py-24'
          : 'py-16 sm:py-24'
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className={T.eyebrow}>{eyebrow}</p>
        <h2 className={T.h2}>{title}</h2>
        {description && <p className={T.lead}>{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}

function Check() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-bold text-[var(--accent-strong)]"
    >
      ✓
    </span>
  );
}

function CapstoneBanner({ children }) {
  return (
    <Reveal className="mt-8 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-6 sm:p-8">
      <p className="text-sm font-semibold text-[var(--accent-strong)]">Capstone</p>
      <p className="mt-2 text-xl font-semibold leading-snug text-[var(--text-primary)] sm:text-2xl">
        {children}
      </p>
    </Reveal>
  );
}

export default function HomePage() {
  const heroStats = [
    { target: 52, duration: 2000, suffix: '', label: 'Weeks' },
    { target: 13, duration: 1500, suffix: '', label: 'Modules' },
    { target: 1100, duration: 2000, suffix: '+', label: 'Guided hours' },
  ];

  const pillars = [
    {
      title: 'Quantitative Methods',
      description:
        'Statistical foundations, probability, optimization and mathematical modelling for financial systems.',
    },
    {
      title: 'Algorithmic Trading',
      description:
        'Strategy design, market microstructure, execution, risk management and portfolio construction.',
    },
    {
      title: 'Machine Learning Systems',
      description:
        'Feature engineering, supervised learning, deep learning and production-grade ML pipelines.',
    },
  ];

  const programmeStats = [
    { target: 52, suffix: '', label: 'Weeks' },
    { target: 13, suffix: '', label: 'Modules' },
    { target: 1100, suffix: '+', label: 'Hours' },
    { target: 17, suffix: '', label: 'Week capstone' },
    { target: 400, suffix: '+', label: 'Concepts' },
    { target: 1, suffix: ':6', label: 'Research mentor ratio' },
  ];

  const whyAlphaEdge = [
    {
      title: 'First Principles',
      description:
        'Understand mechanisms before relying on tools. The programme reconstructs core mathematical and computational ideas from first principles instead of treating frameworks as black boxes.',
    },
    {
      title: 'Research Discipline',
      description:
        'Quantitative results are validated under a rigorous process designed for noisy and non-stationary financial data, rather than accepted on intuition or presentation quality alone.',
    },
    {
      title: 'Production Engineering',
      description:
        'Systems move beyond notebooks into production-grade evaluation, monitoring, governance and deployment patterns.',
    },
    {
      title: 'AI + Markets',
      description:
        'AlphaEdge combines modern AI engineering and financial systems to create practitioners who can design, test and govern intelligent market applications.',
    },
  ];

  const researchPosts = [
    { title: 'Signal Design 101', category: 'Research', excerpt: 'Foundations of building robust trading signals from market data.', author: 'Team', readTime: '5 min' },
    { title: 'ML in Finance', category: 'Systems', excerpt: 'Applying machine learning responsibly in algorithmic systems.', author: 'Team', readTime: '8 min' },
    { title: 'Risk Frameworks', category: 'Risk', excerpt: 'Building risk controls that survive market stress.', author: 'Team', readTime: '6 min' },
  ];

  const aboutPillars = [
    {
      title: 'AI, ML and deep learning',
      text: '[Production models we have built, e.g., forecasting, NLP, risk scoring — with scale and outcome]',
    },
    {
      title: 'Data engineering at market scale',
      text: '[Tick-data platforms, real-time pipelines, data volumes handled]',
    },
    {
      title: 'Indian capital markets',
      text: '[Desks and products — equity, F&O, quant research — plus publications or patents]',
    },
  ];

  const aboutBullets = [
    'PhD and M.Tech-qualified faculty',
    'Practitioners in AI/ML, data and markets',
    'Built around NSE data and SEBI rules',
  ];

  const whyNowCards = [
    { title: '1 Apr 2026', text: "SEBI's framework for safer retail algo trading became fully applicable to all stock brokers." },
    { title: 'Algo ID', text: 'Every algo order carries an exchange-issued tag. Above 10 orders per second per exchange, the strategy must be registered.' },
    { title: 'AI rules', text: 'SEBI has consulted on responsible AI/ML use and signalled human oversight and kill switches.' },
  ];

  const courseModules = [
    { code: 'M1', title: 'Data foundation', description: 'NSE data, cleaning, features, backtest biases' },
    { code: 'M2', title: 'Machine learning', description: 'Classifiers, regimes, pairs, walk-forward tests' },
    { code: 'M3', title: 'Deep learning', description: 'LSTM, CNN and Transformers for time series' },
    { code: 'M4', title: 'GenAI and LLMs', description: 'Prompt engineering; filings and concalls at scale' },
    { code: 'M5', title: 'RAG, vector DB, MCP', description: 'AI connected to your documents and tools' },
    { code: 'M6', title: 'Agents and governance', description: 'AI teammates inside SEBI-aware guardrails' },
  ];

  const outcomes = [
    'Build clean, point-in-time NSE datasets and leakage-free features',
    'Forecast volatility with LSTMs — and know when simpler models win',
    'Build a citable RAG assistant over SEBI circulars and company filings',
    'Train, walk-forward test and cost-adjust ML classifiers and regime models',
    'Turn announcements and concalls into tested LLM sentiment features',
    'Design a governed multi-agent research desk connected through MCP',
  ];

  return (
    <Layout
      title="AlphaEdge | Quantitative Finance, Algorithmic Trading & AI Institute"
      description="AlphaEdge is a premium research-led institute for quantitative finance, algorithmic trading and applied AI. Learn end-to-end from market foundations to production-grade systems."
      keywords="quantitative finance, algorithmic trading, AI, machine learning, research-led education, fintech"
    >
      {/* ============================ HERO ============================ */}
      <section className="relative isolate flex min-h-[90svh] w-full items-center overflow-hidden sm:min-h-[80vh] lg:min-h-0">
        <img
          src="/pageone.jpeg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] sm:object-[60%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/70 md:bg-slate-950/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/85 md:bg-gradient-to-r md:from-slate-950/80 md:via-slate-950/45 md:to-blue-950/20" />

        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Reveal
              as="p"
              className="mb-6 inline-flex rounded-full border border-teal-300/40 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-teal-300 shadow-lg backdrop-blur-md"
            >
              Research-led education for modern markets
            </Reveal>

            <Reveal
              as="h1"
              delay={100}
              className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build the next generation of market intelligence.
            </Reveal>

            <Reveal
              as="p"
              delay={200}
              className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/90 drop-shadow-md sm:text-lg sm:leading-8"
            >
              AlphaEdge brings together quantitative finance, algorithmic trading,
              machine learning and applied AI in a disciplined system for
              professionals, researchers and future market builders.
            </Reveal>

            <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link to="/programmes/ai-900" className={T.btnPrimary}>
                Explore AI-900
              </Link>
              <Link to="/contact" className={T.btnSecondary}>
                Book a consultation
              </Link>
            </Reveal>

            <Reveal delay={400} className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/25 bg-slate-950/65 p-3 shadow-lg backdrop-blur-md sm:p-5"
                >
                  <div className="text-2xl font-black text-white sm:text-3xl">
                    <NumberCounter target={s.target} duration={s.duration} suffix={s.suffix} />
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-slate-200">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <Section>
        <SectionHeader eyebrow="About AlphaEdge" title="Industry depth meets research rigor" />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className={`${T.card} flex flex-col`}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)] text-2xl font-black text-slate-950">
                α
              </div>
              <div>
                <p className="text-xl font-black tracking-wide text-[var(--text-primary)]">ALPHAEDGE</p>
                <p className="text-xs text-[var(--text-muted)]">Quant and financial engineering academy</p>
              </div>
            </div>

            <p className="mt-8 text-2xl font-semibold leading-snug text-[var(--text-primary)] sm:text-3xl">
              We train capital-market professionals to build, test and govern AI-driven trading systems.
            </p>

            <ul className="mt-8 space-y-4">
              {aboutBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-4">
            {aboutPillars.map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) * 120} className={`${T.card} flex-1`}>
                <h3 className={T.h3}>{item.title}</h3>
                <p className={T.body}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================ WHY NOW ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Why now" title="The Indian algo desk changed in 2026" />

        <div className="grid gap-6 lg:grid-cols-3">
          {whyNowCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120} className={T.cardAlt}>
              <p className="text-3xl font-black tracking-tight text-[var(--accent-strong)] sm:text-4xl">
                {card.title}
              </p>
              <p className={T.body}>{card.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mt-12 max-w-4xl text-2xl font-bold leading-snug text-[var(--text-primary)] sm:text-3xl"
        >
          Desks that understand AI and its controls will build faster — and stay compliant.
        </Reveal>

        <Reveal as="p" delay={100} className="mt-6 text-sm text-[var(--text-muted)]">
          Sources: SEBI circular, 30 Sep 2025 • NSE implementation standards, 5 May 2025 • SEBI AI/ML
          consultation, 20 Jun 2025
        </Reveal>
      </Section>

      {/* ============================ WHAT WE TEACH ============================ */}
      <Section>
        <SectionHeader
          eyebrow="Core disciplines"
          title="What we teach"
          action={
            <Link to="/programmes" className="text-sm font-semibold text-[var(--accent-strong)] hover:underline">
              View all programmes
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 120} className={T.card}>
              <h3 className={T.h3}>{pillar.title}</h3>
              <p className={T.body}>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ COURSE MAP ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Course map" title="Six modules, one capstone" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courseModules.map((module, i) => (
            <Reveal key={module.code} delay={(i % 3) * 120} className={T.cardAlt}>
              <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
                {module.code}
              </span>
              <h3 className={`${T.h3} mt-4`}>{module.title}</h3>
              <p className={T.body}>{module.description}</p>
            </Reveal>
          ))}
        </div>

        <CapstoneBanner>Build, backtest and paper-trade an ML + LLM signal on real NSE data</CapstoneBanner>
      </Section>

      {/* ============================ OUTCOMES ============================ */}
      <Section>
        <SectionHeader eyebrow="Outcomes" title="What participants will be able to do" />

        <div className="grid gap-4 lg:grid-cols-2">
          {outcomes.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 2) * 120}
              className={`${T.card} flex items-center gap-4 !p-5`}
            >
              <Check />
              <p className="text-base font-medium leading-7 text-[var(--text-primary)]">{item}</p>
            </Reveal>
          ))}
        </div>

        <CapstoneBanner>
          Build, backtest and paper-trade one ML + LLM signal on NSE data — then defend it before a mock
          risk committee.
        </CapstoneBanner>
      </Section>

      {/* ============================ WHY ALPHAEDGE ============================ */}
      <Section alt>
        <SectionHeader eyebrow="AlphaEdge advantage" title="Why teams choose us" />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whyAlphaEdge.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100} className={T.cardAlt}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ METRICS ============================ */}
      <Section>
        <SectionHeader eyebrow="Built for action" title="Programme metrics" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
          {programmeStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={(i % 6) * 80}
              className={`${T.card} text-center !p-5`}
            >
              <div className="text-3xl font-black tracking-tight text-[var(--text-primary)]">
                <NumberCounter target={stat.target} duration={2000} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ RESEARCH ============================ */}
      <Section alt>
        <SectionHeader
          eyebrow="Research desk"
          title="Fresh thinking from the lab"
          action={
            <Link to="/programmes/ai-900" className="text-sm font-semibold text-[var(--accent-strong)] hover:underline">
              Read more
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchPosts.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120} className={`${T.cardAlt} flex flex-col`}>
              <p className="text-sm font-semibold text-[var(--accent-strong)]">{item.category}</p>
              <h3 className={`${T.h3} mt-3`}>{item.title}</h3>
              <p className={`${T.body} flex-1`}>{item.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[var(--border-soft)] pt-4 text-sm text-[var(--text-muted)]">
                <span>{item.author}</span>
                <span>{item.readTime}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ CTA ============================ */}
      <Section>
        <Reveal className="rounded-3xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className={T.eyebrow}>Admissions open</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Prepare for quantitative, AI-led decision making in modern capital markets.
              </h2>
            </div>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-bold text-black shadow-lg transition hover:brightness-110"
            >
              Apply for next cohort
            </Link>
          </div>
        </Reveal>
      </Section>
    </Layout>
  );
}