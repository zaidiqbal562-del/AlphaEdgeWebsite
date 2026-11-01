import { useChart } from './Ai900Charts';

/* Visuals for the home page. Every fact shown here already appears
   in the page copy (dates from the "Why now" sources, the Algo ID rule,
   the module list and the capstone sentence). */

/* ------------------------------------------------------------------ */
/* 1. Regulatory timeline                                              */
/* ------------------------------------------------------------------ */

const EVENTS = [
  { iso: '2025-05-05', date: '5 May 2025', label: 'NSE implementation standards', align: 'start' },
  { iso: '2025-06-20', date: '20 Jun 2025', label: 'SEBI AI/ML consultation', align: 'center' },
  { iso: '2025-09-30', date: '30 Sep 2025', label: 'SEBI circular', align: 'center' },
  { iso: '2026-04-01', date: '1 Apr 2026', label: 'Framework fully applicable to all stock brokers', align: 'end' },
];

const T0 = new Date(EVENTS[0].iso).getTime();
const T1 = new Date(EVENTS[EVENTS.length - 1].iso).getTime();
const position = (iso) => ((new Date(iso).getTime() - T0) / (T1 - T0)) * 100;
const SHIFT = { start: '0%', center: '-50%', end: '-100%' };
const TEXT_ALIGN = { start: 'text-left', center: 'text-center', end: 'text-right' };

export function RegulatoryTimeline() {
  const { ref, show, anim } = useChart();
  const t = (delay) => (anim ? `all 600ms ease-out ${show ? delay : 0}ms` : 'none');

  return (
    <div ref={ref}>
      {/* Wide screens: dates are spaced in proportion to the time between them */}
      <div className="relative hidden h-64 lg:block" role="img" aria-label="Timeline of the regulatory dates, May 2025 to April 2026">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[var(--border-soft)]" />
        <div
          className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 origin-left bg-[var(--accent)]"
          style={{
            transform: `translateY(-50%) scaleX(${show ? 1 : 0})`,
            transition: anim ? 'transform 1800ms ease-out' : 'none',
          }}
        />
        {EVENTS.map((e, i) => {
          const above = i % 2 === 0;
          return (
            <div key={e.iso}>
              <span
                className="absolute top-1/2 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--surface-strong)]"
                style={{
                  left: `${position(e.iso)}%`,
                  transform: `translate(-50%, -50%) scale(${show ? 1 : 0})`,
                  transition: t(i * 450),
                }}
              />
              <div
                className={`absolute w-52 ${TEXT_ALIGN[e.align]} ${above ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'}`}
                style={{
                  left: `${position(e.iso)}%`,
                  transform: `translateX(${SHIFT[e.align]}) translateY(${show ? 0 : 8}px)`,
                  opacity: show ? 1 : 0,
                  transition: t(i * 450 + 150),
                }}
              >
                <p className="text-base font-bold text-[var(--accent-strong)]">{e.date}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{e.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small screens: simple vertical list */}
      <ol className="space-y-6 border-l-2 border-[var(--border-soft)] pl-6 lg:hidden">
        {EVENTS.map((e, i) => (
          <li
            key={e.iso}
            className="relative"
            style={{
              opacity: show ? 1 : 0,
              transform: `translateY(${show ? 0 : 8}px)`,
              transition: t(i * 200),
            }}
          >
            <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--surface-strong)]" />
            <p className="text-base font-bold text-[var(--accent-strong)]">{e.date}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{e.label}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Algo ID registration threshold                                   */
/* ------------------------------------------------------------------ */

export function AlgoThresholdMeter() {
  const { ref, show, anim } = useChart();
  return (
    <div ref={ref}>
      <p className="text-sm font-semibold text-[var(--text-primary)]">Orders per second, per exchange</p>

      <div className="relative mt-10 h-4 rounded-full bg-[var(--border-soft)]" role="img" aria-label="Every algo order carries an Algo ID; above 10 orders per second the strategy must be registered">
        <div
          className="absolute inset-y-0 left-0 w-1/2 origin-left rounded-l-full bg-[var(--accent)]"
          style={{ transform: `scaleX(${show ? 1 : 0})`, transition: anim ? 'transform 900ms ease-out' : 'none' }}
        />
        <div
          className="absolute inset-y-0 left-1/2 w-1/2 origin-left rounded-r-full bg-[#f59e0b]"
          style={{ transform: `scaleX(${show ? 1 : 0})`, transition: anim ? `transform 900ms ease-out ${show ? 900 : 0}ms` : 'none' }}
        />
        <div
          className="absolute -top-3 left-1/2 flex -translate-x-1/2 flex-col items-center"
          style={{ opacity: show ? 1 : 0, transition: anim ? `opacity 500ms ease-out ${show ? 1500 : 0}ms` : 'none' }}
        >
          <span className="-mt-6 mb-1 text-sm font-black text-[var(--text-primary)]">10</span>
          <span className="h-10 w-0.5 bg-[var(--text-primary)]" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm leading-6">
        <p className="text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--accent-strong)]">Up to 10:</span> every algo order carries an
          exchange-issued tag.
        </p>
        <p className="text-right text-[var(--text-secondary)]">
          <span className="font-semibold text-[#f59e0b]">Above 10:</span> the strategy must be registered.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Module learning path                                             */
/* ------------------------------------------------------------------ */

export function ModulePathRail({ modules }) {
  const { ref, show, anim } = useChart();
  const nodes = [...modules.map((m) => ({ key: m.code, badge: m.code, title: m.title })), { key: 'cap', badge: '★', title: 'Capstone', last: true }];
  const n = nodes.length;
  const inset = `${100 / (2 * n)}%`;

  return (
    <div ref={ref} className="relative mb-10 hidden lg:block">
      <div className="absolute top-5 h-0.5 bg-[var(--border-soft)]" style={{ left: inset, right: inset }} />
      <div
        className="absolute top-5 h-0.5 origin-left bg-[var(--accent)]"
        style={{
          left: inset,
          right: inset,
          transform: `scaleX(${show ? 1 : 0})`,
          transition: anim ? 'transform 2000ms ease-out' : 'none',
        }}
      />
      <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {nodes.map((node, i) => (
          <li key={node.key} className="flex flex-col items-center px-1 text-center">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--accent)] text-sm font-bold ${
                node.last ? 'bg-[var(--accent)] text-slate-950' : 'bg-[var(--surface-strong)] text-[var(--accent-strong)]'
              }`}
              style={{
                transform: `scale(${show ? 1 : 0.4})`,
                opacity: show ? 1 : 0,
                transition: anim ? `all 500ms ease-out ${show ? i * 280 : 0}ms` : 'none',
              }}
            >
              {node.badge}
            </span>
            <span className="mt-3 text-sm font-medium leading-5 text-[var(--text-secondary)]">{node.title}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Capstone flow                                                    */
/* ------------------------------------------------------------------ */

const CAPSTONE_STEPS = ['Build', 'Backtest', 'Paper-trade', 'Defend before a mock risk committee'];

export function CapstoneFlow() {
  const { ref, show, anim } = useChart();
  return (
    <ol ref={ref} className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
      {CAPSTONE_STEPS.map((step, i) => (
        <li key={step} className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span
            className="inline-flex rounded-full border border-[var(--accent)]/50 bg-[var(--page-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)]"
            style={{
              opacity: show ? 1 : 0,
              transform: `translateY(${show ? 0 : 8}px)`,
              transition: anim ? `all 500ms ease-out ${show ? i * 250 : 0}ms` : 'none',
            }}
          >
            {step}
          </span>
          {i < CAPSTONE_STEPS.length - 1 && (
            <span
              aria-hidden="true"
              className="pl-4 text-[var(--accent-strong)] sm:pl-0"
              style={{ opacity: show ? 1 : 0, transition: anim ? `opacity 500ms ease-out ${show ? i * 250 + 200 : 0}ms` : 'none' }}
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}