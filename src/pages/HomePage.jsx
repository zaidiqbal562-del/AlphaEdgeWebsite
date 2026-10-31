import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const programmes = [
  {
    number: '01',
    title: 'AI-900',
    eyebrow: 'Flagship programme',
    description: 'A research-led path through quantitative finance, algorithmic trading, machine learning and applied AI.',
    meta: '52 weeks · 13 modules',
    href: '/programmes/ai-900',
  },
  {
    number: '02',
    title: 'Algo Trading',
    eyebrow: 'Systems & execution',
    description: 'Move from market structure and strategy design to systematic execution and risk-aware decision making.',
    meta: 'Research · Backtesting · Risk',
    href: '/algo-trading',
  },
  {
    number: '03',
    title: 'Learning paths',
    eyebrow: 'Explore the curriculum',
    description: 'Find the right entry point for your goals, then build the habits and technical foundations to keep progressing.',
    meta: 'Foundations · Practice · Mentorship',
    href: '/programmes',
  },
];

const principles = [
  ['01', 'First principles', 'Build durable understanding before reaching for tools or shortcuts.'],
  ['02', 'Research discipline', 'Test ideas against noisy, non-stationary financial data with rigour.'],
  ['03', 'Production mindset', 'Take systems beyond notebooks into evaluation, monitoring and deployment.'],
];

export default function HomePage() {
  return (
    <Layout
      title="AlphaEdge | Quantitative Finance, Algorithmic Trading & AI Institute"
      description="AlphaEdge is a research-led institute for quantitative finance, algorithmic trading and applied AI."
      keywords="quantitative finance, algorithmic trading, AI, machine learning, AlphaEdge"
    >
      <main>
        <section className="ae-hero relative overflow-hidden">
          <div className="ae-hero-grid" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-24">
            <div className="relative z-10">
              <div className="ae-kicker"><span /> Research-led education for modern markets</div>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--text-primary)] sm:text-7xl lg:text-[6.35rem]">
                Learn the market.<br /><em>Build an edge.</em>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                A disciplined learning environment for people who want to understand quantitative finance, build algorithmic systems and apply AI with judgement.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/programmes" className="ae-button ae-button-primary">Explore programmes <span>↗</span></Link>
                <Link to="/contact" className="ae-button ae-button-quiet">Book a consultation</Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t border-[var(--border-soft)] pt-5 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                <span><strong>52</strong> weeks</span><span><strong>13</strong> modules</span><span><strong>1100+</strong> guided hours</span>
              </div>
            </div>
            <div className="relative min-h-[390px] lg:min-h-[550px]">
              <div className="ae-orbit ae-orbit-one" aria-hidden="true" /><div className="ae-orbit ae-orbit-two" aria-hidden="true" />
              <div className="ae-hero-card">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400"><span>AlphaEdge / Research desk</span><span className="text-emerald-300">Live curriculum</span></div>
                <div className="mt-14"><span className="text-sm text-slate-400">The market is a system.</span><div className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">Learn to read it.</div></div>
                <svg className="mt-12 h-28 w-full" viewBox="0 0 500 120" fill="none" role="img" aria-label="Abstract market trend line"><path d="M0 100 C44 93 50 74 84 82 S122 54 153 68 S193 42 224 57 S272 80 306 43 S350 54 376 25 S426 34 500 3" stroke="#63e6be" strokeWidth="3" /><path d="M0 100 C44 93 50 74 84 82 S122 54 153 68 S193 42 224 57 S272 80 306 43 S350 54 376 25 S426 34 500 3 V120 H0Z" fill="url(#area)" opacity=".22" /><defs><linearGradient id="area" x1="250" y1="0" x2="250" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#63e6be" /><stop offset="1" stopColor="#63e6be" stopOpacity="0" /></linearGradient></defs></svg>
                <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.16em] text-slate-400"><span>Quant<br /><b className="text-white">Methods</b></span><span>Market<br /><b className="text-white">Systems</b></span><span>Applied<br /><b className="text-white">AI</b></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ae-trust-strip"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-10"><span className="ae-kicker">Built for serious learners</span><span>Quantitative methods</span><span>Algorithmic trading</span><span>Machine learning systems</span><span>Research mentorship</span></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="ae-kicker"><span /> Choose your starting point</div><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">A curriculum that compounds.</h2></div><Link to="/programmes" className="ae-text-link">View all programmes ↗</Link></div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">{programmes.map((programme) => <Link to={programme.href} key={programme.number} className="ae-programme-card group"><div className="flex items-start justify-between"><span className="text-sm text-[var(--accent)]">{programme.number}</span><span className="text-2xl text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div><div className="mt-16"><div className="ae-card-eyebrow">{programme.eyebrow}</div><h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{programme.title}</h3><p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{programme.description}</p><div className="mt-7 border-t border-[var(--border-soft)] pt-4 text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">{programme.meta}</div></div></Link>)}</div>
        </section>

        <section className="border-y border-[var(--border-soft)] bg-[var(--surface-strong)]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28"><div><div className="ae-kicker"><span /> The AlphaEdge approach</div><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">No shortcuts.<br /><em>Better foundations.</em></h2><p className="mt-6 max-w-md text-base leading-8 text-[var(--text-secondary)]">We teach the mechanisms behind the market so your decisions become more informed, more testable and more yours.</p></div><div className="grid gap-0">{principles.map(([number, title, description]) => <div key={number} className="flex gap-7 border-t border-[var(--border-soft)] py-7"><span className="text-sm text-[var(--accent)]">{number}</span><div><h3 className="text-xl font-medium">{title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">{description}</p></div></div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="ae-cta"><div><div className="ae-kicker"><span /> Start with clarity</div><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Your next move starts with a conversation.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">Tell us where you are in your learning journey. We&apos;ll help you find the right programme and next step.</p></div><Link to="/contact" className="ae-button ae-button-primary whitespace-nowrap">Talk to AlphaEdge <span>↗</span></Link></div></section>
      </main>
    </Layout>
  );
}
