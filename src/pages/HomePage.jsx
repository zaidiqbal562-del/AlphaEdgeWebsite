import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const tickerItems = ['QUANT RESEARCH', 'ALGO EXECUTION', 'APPLIED AI', 'RISK SYSTEMS', 'MARKET MICROSTRUCTURE'];
const programmes = [
  { id: '01', tag: 'FLAGSHIP', title: 'AI-900', text: 'The full-stack path from market theory to intelligent systems.', meta: '52 WEEKS · 13 MODULES', href: '/programmes/ai-900' },
  { id: '02', tag: 'EXECUTION', title: 'Algo Trading', text: 'Design, test and deploy strategies with a risk-first mindset.', meta: 'RESEARCH · BACKTEST · SHIP', href: '/algo-trading' },
  { id: '03', tag: 'START HERE', title: 'Learning paths', text: 'A clear route into the concepts that compound over time.', meta: 'FOUNDATIONS · PRACTICE · MENTORSHIP', href: '/programmes' },
];

function Ticker() {
  return <div className="ae-ticker" aria-label="AlphaEdge disciplines"><div className="ae-ticker-track">{[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>;
}

export default function HomePage() {
  return (
    <Layout title="AlphaEdge | Quantitative Finance, Algorithmic Trading & AI Institute" description="A research-led institute for quantitative finance, algorithmic trading and applied AI." keywords="quantitative finance, algorithmic trading, AI, machine learning, AlphaEdge">
      <main className="ae-modern-home">
        <section className="ae-hero ae-hero-modern relative overflow-hidden">
          <div className="ae-hero-grid" aria-hidden="true" /><div className="ae-scanline" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <div className="ae-kicker"><span /> ALPHAEDGE / INSTITUTE 01</div>
              <h1 className="ae-display mt-7 max-w-4xl text-5xl font-semibold leading-[.9] tracking-[-.09em] sm:text-7xl lg:text-[7.2rem]">The edge is<br /><em>earned.</em></h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">A modern learning lab for quantitative finance, algorithmic trading and applied AI. Learn the mechanism. Build the system. Make better decisions.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/programmes" className="ae-button ae-button-primary">Enter the curriculum <span>↗</span></Link><Link to="/about" className="ae-button ae-button-quiet">How we think</Link></div>
              <div className="ae-stat-row mt-14"><div><strong>52</strong><span>weeks of depth</span></div><div><strong>13</strong><span>research modules</span></div><div><strong>01</strong><span>serious edge</span></div></div>
            </div>
            <div className="relative min-h-[430px] lg:min-h-[600px]">
              <div className="ae-hero-orbit" aria-hidden="true" /><div className="ae-terminal-card">
                <div className="ae-terminal-top"><span><i /><i /><i /></span><b>AE_RESEARCH_DESK / LIVE</b><span>04:27:18</span></div>
                <div className="mt-10 flex items-start justify-between"><div><div className="ae-mono-label">SYSTEM STATUS</div><div className="mt-2 text-3xl font-semibold text-white">Learning in motion.</div></div><div className="ae-live-pill">● LIVE</div></div>
                <div className="ae-chart mt-10"><div className="ae-chart-grid" /><svg viewBox="0 0 620 190" fill="none" role="img" aria-label="Rising market system chart"><path d="M0 151 C38 150 45 118 82 129 S118 82 155 108 S201 82 235 96 S276 54 313 75 S351 92 383 56 S432 69 461 35 S510 46 544 16 S581 28 620 2" stroke="var(--accent)" strokeWidth="3" /><path d="M0 151 C38 150 45 118 82 129 S118 82 155 108 S201 82 235 96 S276 54 313 75 S351 92 383 56 S432 69 461 35 S510 46 544 16 S581 28 620 2 V190 H0Z" fill="url(#chartfill)" opacity=".25" /><defs><linearGradient id="chartfill" x1="310" y1="0" x2="310" y2="190" gradientUnits="userSpaceOnUse"><stop stopColor="var(--accent)" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></linearGradient></defs></svg></div>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-5"><div><span className="ae-mono-label">SIGNAL</span><b className="mt-2 block text-white">+18.42%</b></div><div><span className="ae-mono-label">FOCUS</span><b className="mt-2 block text-white">MARKETS</b></div><div><span className="ae-mono-label">MODE</span><b className="mt-2 block text-white">RESEARCH</b></div></div>
              </div>
            </div>
          </div>
        </section>
        <Ticker />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><div className="ae-kicker"><span /> THE CURRICULUM</div><h2 className="ae-display mt-5 text-4xl font-semibold leading-[.95] tracking-[-.07em] sm:text-6xl">Build signal<br /><em>from noise.</em></h2></div><div><p className="max-w-2xl text-xl leading-9 text-[var(--text-secondary)]">Markets reward people who can see the system beneath the surface. AlphaEdge gives you the frameworks, technical fluency and feedback loops to do exactly that.</p><div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="ae-mini-stat"><b>01</b><span>Understand</span><small>First principles</small></div><div className="ae-mini-stat"><b>02</b><span>Validate</span><small>Research discipline</small></div><div className="ae-mini-stat"><b>03</b><span>Deploy</span><small>Production mindset</small></div></div></div></div></section>
        <section className="ae-programmes-band"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="ae-kicker"><span /> CHOOSE YOUR VECTOR</div><h2 className="ae-display mt-5 text-4xl font-semibold tracking-[-.07em] sm:text-6xl">Where will you<br /><em>take the edge?</em></h2></div><Link to="/programmes" className="ae-text-link">All programmes ↗</Link></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{programmes.map((programme) => <Link to={programme.href} key={programme.id} className="ae-programme-card ae-modern-card group"><div className="flex items-start justify-between"><span className="ae-card-number">{programme.id}</span><span className="ae-card-arrow">↗</span></div><div className="mt-20"><div className="ae-card-eyebrow">{programme.tag}</div><h3 className="mt-3 text-3xl font-semibold tracking-[-.06em]">{programme.title}</h3><p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{programme.text}</p><div className="mt-7 border-t border-[var(--border-soft)] pt-4 text-[10px] uppercase tracking-[.18em] text-[var(--text-muted)]">{programme.meta}</div></div></Link>)}</div></div></section>
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-32"><div className="ae-quote-card"><div className="ae-kicker"><span /> THE ALPHAEDGE STANDARD</div><blockquote className="ae-display mt-7 max-w-5xl text-4xl font-semibold leading-[.98] tracking-[-.07em] sm:text-6xl">“Don&apos;t chase the market. Build the mind that can read it.”</blockquote><div className="mt-10 flex items-center justify-between border-t border-[var(--border-soft)] pt-5 text-xs uppercase tracking-[.16em] text-[var(--text-muted)]"><span>AlphaEdge / Research-led education</span><span>01—03</span></div></div></section>
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-32"><div className="ae-cta ae-modern-cta"><div><div className="ae-kicker"><span /> YOUR NEXT MOVE</div><h2 className="ae-display mt-5 max-w-2xl text-4xl font-semibold tracking-[-.07em] sm:text-6xl">Make it<br /><em>intentional.</em></h2><p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">Tell us where you are in your journey. We&apos;ll help you find the right programme and next step.</p></div><Link to="/contact" className="ae-button ae-button-primary whitespace-nowrap">Talk to AlphaEdge <span>↗</span></Link></div></section>
      </main>
    </Layout>
  );
}
