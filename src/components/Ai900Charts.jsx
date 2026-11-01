import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import { T, Reveal } from './ui';

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

const C = {
  accent: 'var(--accent)',
  blue: '#3b82f6',
  amber: '#f59e0b',
  violet: '#a855f7',
  red: '#ef4444',
};
const AXIS = 'var(--text-muted)';
const INK = 'var(--text-primary)';
const SUB = 'var(--text-secondary)';

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  return reduce;
}

/* Charts replay their animation every time they scroll into view. */
export function useChart() {
  const [ref, inView] = useInView({ once: false, threshold: 0.3, rootMargin: '0px' });
  const reduce = usePrefersReducedMotion();
  return { ref, show: inView || reduce, anim: !reduce };
}

function DrawPath({ d, show, anim, delay = 0, duration = 1300, ...rest }) {
  return (
    <path
      d={d}
      fill="none"
      pathLength="1"
      strokeDasharray="1"
      style={{
        strokeDashoffset: show ? 0 : 1.02,
        transition: anim ? `stroke-dashoffset ${duration}ms ease-out ${show ? delay : 0}ms` : 'none',
      }}
      {...rest}
    />
  );
}

function Fade({ show, anim, delay = 0, children }) {
  return (
    <g
      style={{
        opacity: show ? 1 : 0,
        transition: anim ? `opacity 600ms ease-out ${show ? delay : 0}ms` : 'none',
      }}
    >
      {children}
    </g>
  );
}

function ArrowDefs({ id }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill={AXIS} />
      </marker>
    </defs>
  );
}

function Arrow({ d, id, show, anim, delay }) {
  return (
    <Fade show={show} anim={anim} delay={delay}>
      <path d={d} fill="none" stroke={AXIS} strokeWidth="1.8" markerEnd={`url(#${id})`} />
    </Fade>
  );
}

function Node({ x, y, w, h, title, sub, tone, show, anim, delay = 0 }) {
  const color = tone ? C[tone] : null;
  return (
    <Fade show={show} anim={anim} delay={delay}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={color || 'var(--surface-strong)'}
        fillOpacity={color ? 0.14 : 1}
        stroke={color || 'var(--border-soft)'}
        strokeWidth={color ? 1.5 : 1.2}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 5}
        textAnchor="middle"
        fill={INK}
        fontSize="13"
        fontWeight="700"
      >
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fill={SUB} fontSize="11">
          {sub}
        </text>
      )}
    </Fade>
  );
}

/* Card that wraps a chart: title, caption, scroll container, legend. */
export function ChartCard({ title, caption, legend, alt = false, className = '', children }) {
  return (
    <Reveal className={`${alt ? T.cardAlt : T.card} ${className}`}>
      {title && <h3 className={T.h3}>{title}</h3>}
      {caption && <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{caption}</p>}
      <div className="mt-6 overflow-x-auto">{children}</div>
      {legend && (
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className="h-2.5 w-6 rounded-full" style={{ background: item.color }} />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Programme timeline (built from the real term / week data)        */
/* ------------------------------------------------------------------ */

const TERM_COLORS = [C.accent, C.blue, C.violet, C.amber];

export function TermTimeline({ terms }) {
  const { ref, show, anim } = useChart();
  const spans = terms.map((t) => {
    const weeks = t.modules.flatMap((m) => m.weeks.map((w) => w.number));
    return {
      number: t.number,
      title: t.title,
      modules: t.modules.length,
      start: Math.min(...weeks),
      end: Math.max(...weeks),
    };
  });

  return (
    <div ref={ref}>
      <div className="flex gap-1.5" role="img" aria-label="Timeline of the four terms across 52 weeks">
        {spans.map((s, i) => (
          <div
            key={s.number}
            className="h-3 origin-left rounded-full"
            style={{
              flexGrow: s.end - s.start + 1,
              flexBasis: 0,
              background: TERM_COLORS[i % 4],
              transform: `scaleX(${show ? 1 : 0})`,
              transition: anim ? `transform 900ms ease-out ${show ? i * 180 : 0}ms` : 'none',
            }}
          />
        ))}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {spans.map((s, i) => (
          <div key={s.number} className="flex items-start gap-3">
            <span
              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: TERM_COLORS[i % 4] }}
            />
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Term {s.number}: {s.title}
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Weeks {s.start}–{s.end} · {s.modules} modules
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Assessment donut                                                 */
/* ------------------------------------------------------------------ */

const DONUT_COLORS = [C.accent, C.blue, C.amber, C.violet];

export function AssessmentDonut({ items }) {
  const { ref, show, anim } = useChart();
  const R = 70;
  const CIRC = 2 * Math.PI * R;
  let cumulative = 0;
  const segments = items.map((item, i) => {
    const pct = parseFloat(item.value);
    const len = (pct / 100) * CIRC;
    const seg = { ...item, len, offset: cumulative, color: DONUT_COLORS[i % 4] };
    cumulative += len;
    return seg;
  });

  return (
    <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
      <svg
        ref={ref}
        viewBox="0 0 200 200"
        className="mx-auto h-56 w-56"
        role="img"
        aria-label="Donut chart of the assessment weighting"
      >
        <circle cx="100" cy="100" r={R} fill="none" stroke="var(--border-soft)" strokeWidth="24" />
        <g transform="rotate(-90 100 100)">
          {segments.map((s, i) => (
            <circle
              key={s.label}
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth="24"
              strokeDasharray={`${show ? Math.max(s.len - 3, 0) : 0} ${CIRC}`}
              strokeDashoffset={-s.offset}
              style={{
                transition: anim ? `stroke-dasharray 900ms ease-out ${show ? i * 200 : 0}ms` : 'none',
              }}
            />
          ))}
        </g>
        <text x="100" y="98" textAnchor="middle" fill={INK} fontSize="24" fontWeight="800">
          100%
        </text>
        <text x="100" y="118" textAnchor="middle" fill={AXIS} fontSize="11">
          Assessment
        </text>
      </svg>

      <ul className="grid gap-4 sm:grid-cols-2">
        {segments.map((s) => (
          <li key={s.label} className="flex items-start gap-3">
            <span className="mt-2 h-3 w-3 shrink-0 rounded-sm" style={{ background: s.color }} />
            <div>
              <p className="text-3xl font-black tracking-tight text-[var(--text-primary)]">{s.value}</p>
              <p className="text-base font-semibold text-[var(--text-primary)]">{s.label}</p>
              <p className="text-sm leading-6 text-[var(--text-muted)]">{s.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Rule-based vs learned decision boundary (illustration)           */
/* ------------------------------------------------------------------ */

const boundary = (x) => 0.5 + 0.22 * Math.sin(x * 7);

function makePoints() {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const pts = [];
  while (pts.length < 70) {
    const x = rnd();
    const y = rnd();
    if (Math.abs(y - boundary(x)) < 0.05) continue;
    pts.push({ x, y, up: y > boundary(x) });
  }
  return pts;
}
const POINTS = makePoints();

const px = (x) => 12 + x * 216;
const py = (y) => 188 - y * 176;

function BoundaryPanel({ title, learned, show, anim }) {
  const curve = Array.from({ length: 41 }, (_, i) => {
    const x = i / 40;
    return `${i === 0 ? 'M' : 'L'}${px(x).toFixed(1)} ${py(boundary(x)).toFixed(1)}`;
  }).join(' ');

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-[var(--text-primary)]">{title}</p>
      <svg viewBox="0 0 240 200" className="h-auto w-full min-w-[220px]" role="img" aria-label={title}>
        <rect x="12" y="12" width="216" height="176" rx="8" fill="none" stroke="var(--border-soft)" />
        <Fade show={show} anim={anim}>
          {POINTS.map((p, i) => {
            const wrong = !learned && p.y > 0.5 !== p.up;
            return (
              <g key={i}>
                <circle cx={px(p.x)} cy={py(p.y)} r="3.6" fill={p.up ? C.accent : C.blue} />
                {wrong && (
                  <circle cx={px(p.x)} cy={py(p.y)} r="7" fill="none" stroke={C.red} strokeWidth="1.5" />
                )}
              </g>
            );
          })}
        </Fade>
        {learned ? (
          <DrawPath d={curve} show={show} anim={anim} delay={400} stroke={C.amber} strokeWidth="3" />
        ) : (
          <DrawPath
            d={`M12 ${py(0.5)} H228`}
            show={show}
            anim={anim}
            delay={400}
            stroke={C.amber}
            strokeWidth="3"
          />
        )}
      </svg>
    </div>
  );
}

export function RuleVsLearnedChart() {
  const { ref, show, anim } = useChart();
  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-2">
      <BoundaryPanel title="Rule-based: one fixed threshold" learned={false} show={show} anim={anim} />
      <BoundaryPanel title="Learned: a boundary fitted from data" learned show={show} anim={anim} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. ML pipeline rail (10 steps from the data)                        */
/* ------------------------------------------------------------------ */

export function PipelineRail({ steps }) {
  const { ref, show, anim } = useChart();
  return (
    <div ref={ref} className="relative mb-10 hidden lg:block">
      <div className="absolute left-[5%] right-[5%] top-4 h-0.5 bg-[var(--border-soft)]" />
      <div
        className="absolute left-[5%] right-[5%] top-4 h-0.5 origin-left bg-[var(--accent)]"
        style={{
          transform: `scaleX(${show ? 1 : 0})`,
          transition: anim ? `transform 1800ms ease-out ${show ? 0 : 0}ms` : 'none',
        }}
      />
      <ol className="relative grid grid-cols-10">
        {steps.map((s, i) => (
          <li key={s.step} className="flex flex-col items-center text-center">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--surface-strong)] text-xs font-bold text-[var(--accent-strong)]"
              style={{
                opacity: show ? 1 : 0.2,
                transition: anim ? `opacity 400ms ease-out ${show ? i * 150 : 0}ms` : 'none',
              }}
            >
              {s.step}
            </span>
            <span className="mt-2 text-xs font-medium text-[var(--text-secondary)]">{s.title}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Walk-forward windows (illustration)                              */
/* ------------------------------------------------------------------ */

export function WalkForwardChart() {
  const { ref, show, anim } = useChart();
  const rows = [0, 1, 2, 3, 4];
  return (
    <svg
      ref={ref}
      viewBox="0 0 520 250"
      className="h-auto w-full min-w-[480px]"
      role="img"
      aria-label="Walk-forward validation: training window followed by an unseen test window, repeated across time"
    >
      <ArrowDefs id="wf-arrow" />
      {rows.map((i) => (
        <Fade key={i} show={show} anim={anim} delay={i * 200}>
          <text x="8" y={56 + i * 34} fill={AXIS} fontSize="12">
            W{i + 1}
          </text>
          <rect x={50 + i * 45} y={40 + i * 34} width="170" height="22" rx="5" fill={C.accent} fillOpacity="0.85" />
          <rect x={220 + i * 45} y={40 + i * 34} width="55" height="22" rx="5" fill={C.amber} fillOpacity="0.9" />
        </Fade>
      ))}
      <Arrow d="M50 226 H490" id="wf-arrow" show={show} anim={anim} delay={900} />
      <Fade show={show} anim={anim} delay={900}>
        <text x="270" y="246" textAnchor="middle" fill={AXIS} fontSize="12">
          Time
        </text>
      </Fade>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Six data layers feeding a point-in-time store                    */
/* ------------------------------------------------------------------ */

export function DataFlowGraphic({ layers }) {
  const { ref, show, anim } = useChart();
  return (
    <svg
      ref={ref}
      viewBox="0 0 600 250"
      className="h-auto w-full min-w-[540px]"
      role="img"
      aria-label="Six market data layers flowing into a point-in-time store, then features"
    >
      <ArrowDefs id="df-arrow" />
      {layers.map((layer, i) => {
        const y = 10 + i * 40;
        return (
          <g key={layer.title}>
            <DrawPath
              d={`M180 ${y + 15} C225 ${y + 15} 220 125 260 125`}
              show={show}
              anim={anim}
              delay={i * 120}
              stroke={AXIS}
              strokeOpacity="0.6"
              strokeWidth="1.6"
            />
            <Fade show={show} anim={anim} delay={i * 120}>
              <rect x="10" y={y} width="170" height="30" rx="8" fill="var(--surface-strong)" stroke="var(--border-soft)" />
              <text x="22" y={y + 19} fill={INK} fontSize="12" fontWeight="600">
                {layer.title}
              </text>
            </Fade>
          </g>
        );
      })}
      <Node x={260} y={85} w={160} h={80} title="Point-in-time store" sub="Stamped when available" tone="accent" show={show} anim={anim} delay={800} />
      <Arrow d="M422 125 H456" id="df-arrow" show={show} anim={anim} delay={1000} />
      <Node x={460} y={95} w={130} h={60} title="Features" sub="Ready for models" show={show} anim={anim} delay={1100} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Backtest vs live equity curves (illustration)                    */
/* ------------------------------------------------------------------ */

export function BacktestVsLiveChart() {
  const { ref, show, anim } = useChart();
  return (
    <svg
      ref={ref}
      viewBox="0 0 520 300"
      className="h-auto w-full min-w-[480px]"
      role="img"
      aria-label="Illustration: a backtest without costs looks strong, the same backtest after costs is lower, and live results fall short"
    >
      <path d="M50 30 V250 H490" fill="none" stroke={AXIS} strokeWidth="1.5" />
      <DrawPath d="M50 240 C130 210 200 170 270 140 S400 80 490 50" show={show} anim={anim} stroke={C.accent} strokeWidth="3" strokeLinecap="round" />
      <DrawPath d="M50 240 C130 225 200 200 270 185 S400 150 490 135" show={show} anim={anim} delay={300} stroke={C.blue} strokeWidth="3" strokeLinecap="round" />
      <Fade show={show} anim={anim} delay={1100}>
        <line x1="330" y1="30" x2="330" y2="250" stroke={AXIS} strokeDasharray="4 4" />
        <text x="330" y="22" textAnchor="middle" fill={AXIS} fontSize="12">
          Go live
        </text>
      </Fade>
      <DrawPath d="M330 166 C370 172 420 190 490 214" show={show} anim={anim} delay={1300} duration={900} stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <text x="270" y="284" textAnchor="middle" fill={AXIS} fontSize="12">
        Time
      </text>
      <text transform="rotate(-90)" x="-140" y="16" textAnchor="middle" fill={AXIS} fontSize="12">
        Equity
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Four ML families (mini illustrations)                            */
/* ------------------------------------------------------------------ */

export function FamilyIcon({ type }) {
  const dots = [[16, 58], [30, 50], [44, 52], [58, 40], [72, 36], [88, 26], [104, 20]];
  return (
    <svg viewBox="0 0 120 80" className="h-20 w-full max-w-[160px]" role="img" aria-label={`${type} illustration`}>
      {type === 'Regression' && (
        <>
          <line x1="8" y1="66" x2="112" y2="14" stroke={C.amber} strokeWidth="2.5" strokeLinecap="round" />
          {dots.map(([x, y]) => (
            <circle key={x} cx={x} cy={y - 4} r="3.5" fill={C.accent} />
          ))}
        </>
      )}
      {type === 'Classification' && (
        <>
          {[[22, 24], [34, 34], [28, 46], [44, 22], [40, 40]].map(([x, y]) => (
            <circle key={`a${x}`} cx={x} cy={y} r="3.5" fill={C.accent} />
          ))}
          {[[80, 40], [92, 54], [100, 36], [84, 62], [72, 52]].map(([x, y]) => (
            <circle key={`b${x}`} cx={x} cy={y} r="3.5" fill={C.blue} />
          ))}
          <line x1="48" y1="76" x2="72" y2="4" stroke={C.amber} strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
        </>
      )}
      {type === 'Clustering' && (
        <>
          {[[30, 28, C.accent], [88, 24, C.blue], [58, 58, C.violet]].map(([cx, cy, col]) => (
            <g key={cx}>
              <circle cx={cx} cy={cy} r="19" fill={col} fillOpacity="0.12" stroke={col} strokeDasharray="3 3" />
              {[[-7, -5], [6, 4], [0, 9], [8, -8], [-8, 6]].map(([dx, dy]) => (
                <circle key={`${dx}${dy}`} cx={cx + dx} cy={cy + dy} r="3" fill={col} />
              ))}
            </g>
          ))}
        </>
      )}
      {type === 'Reinforcement Learning' && (
        <>
          <ArrowDefs id="rl-arrow" />
          <rect x="6" y="22" width="40" height="36" rx="8" fill="var(--surface-strong)" stroke={C.accent} />
          <rect x="74" y="22" width="40" height="36" rx="8" fill="var(--surface-strong)" stroke={C.blue} />
          <text x="26" y="44" textAnchor="middle" fill={INK} fontSize="9" fontWeight="700">Agent</text>
          <text x="94" y="44" textAnchor="middle" fill={INK} fontSize="9" fontWeight="700">Market</text>
          <path d="M46 32 H72" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#rl-arrow)" fill="none" />
          <path d="M74 50 H48" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#rl-arrow)" fill="none" />
          <text x="60" y="26" textAnchor="middle" fill={SUB} fontSize="7">action</text>
          <text x="60" y="62" textAnchor="middle" fill={SUB} fontSize="7">reward</text>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Overfitting curve (illustration)                                 */
/* ------------------------------------------------------------------ */

export function OverfitChart() {
  const { ref, show, anim } = useChart();
  return (
    <svg
      ref={ref}
      viewBox="0 0 520 310"
      className="h-auto w-full min-w-[480px]"
      role="img"
      aria-label="Illustration: training error keeps falling as model complexity grows, while validation error rises after the best fit"
    >
      <rect x="270" y="30" width="220" height="220" fill={C.red} fillOpacity="0.06" />
      <path d="M50 30 V250 H490" fill="none" stroke={AXIS} strokeWidth="1.5" />
      <DrawPath d="M50 100 C110 190 200 240 490 262" show={show} anim={anim} stroke={C.accent} strokeWidth="3" strokeLinecap="round" />
      <DrawPath d="M50 60 C110 150 170 205 270 208 S410 170 490 90" show={show} anim={anim} delay={300} stroke={C.amber} strokeWidth="3" strokeLinecap="round" />
      <Fade show={show} anim={anim} delay={1200}>
        <line x1="270" y1="30" x2="270" y2="250" stroke={AXIS} strokeDasharray="4 4" />
        <text x="270" y="22" textAnchor="middle" fill={AXIS} fontSize="12">Best fit</text>
        <text x="150" y="50" textAnchor="middle" fill={AXIS} fontSize="12">Underfit</text>
        <text x="380" y="50" textAnchor="middle" fill={C.red} fontSize="12" fontWeight="600">Overfit</text>
        <line x1="476" y1="112" x2="476" y2="258" stroke={C.red} strokeWidth="1.5" />
        <line x1="470" y1="112" x2="482" y2="112" stroke={C.red} strokeWidth="1.5" />
        <line x1="470" y1="258" x2="482" y2="258" stroke={C.red} strokeWidth="1.5" />
        <text x="466" y="190" textAnchor="end" fill={C.red} fontSize="12">Overfitting gap</text>
      </Fade>
      <text x="270" y="288" textAnchor="middle" fill={AXIS} fontSize="12">Model complexity</text>
      <text transform="rotate(-90)" x="-140" y="16" textAnchor="middle" fill={AXIS} fontSize="12">Error</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 10. RAG flow                                                        */
/* ------------------------------------------------------------------ */

export function RagFlowGraphic() {
  const { ref, show, anim } = useChart();
  return (
    <svg
      ref={ref}
      viewBox="0 0 620 240"
      className="h-auto w-full min-w-[540px]"
      role="img"
      aria-label="Documents are chunked and embedded into a vector database, the question retrieves the nearest passages, and the LLM answers with citations"
    >
      <ArrowDefs id="rag-arrow" />
      <Node x={10} y={30} w={120} h={60} title="Documents" sub="Reports, calls" show={show} anim={anim} />
      <Arrow d="M132 60 H168" id="rag-arrow" show={show} anim={anim} delay={200} />
      <Node x={170} y={30} w={120} h={60} title="Chunk + embed" sub="Meaning to vectors" tone="accent" show={show} anim={anim} delay={300} />
      <Arrow d="M292 60 H328" id="rag-arrow" show={show} anim={anim} delay={500} />
      <Node x={330} y={30} w={120} h={60} title="Vector DB" sub="Nearest matches" tone="blue" show={show} anim={anim} delay={600} />
      <Arrow d="M452 60 H488" id="rag-arrow" show={show} anim={anim} delay={800} />
      <Node x={490} y={30} w={120} h={60} title="LLM answer" sub="With citations" tone="amber" show={show} anim={anim} delay={900} />
      <Node x={330} y={150} w={120} h={60} title="Question" sub="Embedded too" show={show} anim={anim} delay={1100} />
      <Arrow d="M390 148 V94" id="rag-arrow" show={show} anim={anim} delay={1300} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 11. Agent loop                                                      */
/* ------------------------------------------------------------------ */

export function AgentLoopGraphic({ items }) {
  const { ref, show, anim } = useChart();
  const subs = ['Break the goal down', 'Call tools via MCP', 'Read the results', 'Check the limits'];
  const tones = [null, 'accent', 'blue', 'amber'];
  return (
    <svg
      ref={ref}
      viewBox="0 0 520 240"
      className="h-auto w-full min-w-[480px]"
      role="img"
      aria-label="Agent loop: plan, act, observe, reflect, then loop again"
    >
      <ArrowDefs id="ag-arrow" />
      {items.map((item, i) => (
        <Node
          key={item.title}
          x={12 + i * 135}
          y={50}
          w={96}
          h={58}
          title={item.title}
          sub={subs[i]}
          tone={tones[i]}
          show={show}
          anim={anim}
          delay={i * 250}
        />
      ))}
      <Arrow d="M110 79 H143" id="ag-arrow" show={show} anim={anim} delay={200} />
      <Arrow d="M245 79 H278" id="ag-arrow" show={show} anim={anim} delay={450} />
      <Arrow d="M380 79 H413" id="ag-arrow" show={show} anim={anim} delay={700} />
      <Arrow d="M465 110 C465 215 60 215 60 112" id="ag-arrow" show={show} anim={anim} delay={1000} />
      <Fade show={show} anim={anim} delay={1000}>
        <text x="262" y="165" textAnchor="middle" fill={SUB} fontSize="12">
          Loop again if more work is needed
        </text>
      </Fade>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 12. Governance flow                                                 */
/* ------------------------------------------------------------------ */

export function GovernanceFlowGraphic() {
  const { ref, show, anim } = useChart();
  const nodes = [
    { title: 'AI proposal', sub: 'Alert or order idea', tone: null },
    { title: 'Human approval', sub: 'Before any order', tone: 'accent' },
    { title: 'Risk controls', sub: 'Hard limits', tone: 'amber' },
    { title: 'Algo ID order', sub: 'Exchange-tagged', tone: 'blue' },
  ];
  return (
    <svg
      ref={ref}
      viewBox="0 0 550 190"
      className="h-auto w-full min-w-[500px]"
      role="img"
      aria-label="An AI proposal passes human approval and risk controls before an exchange-tagged order, with a model register, audit trail and drift monitoring underneath"
    >
      <ArrowDefs id="gv-arrow" />
      {nodes.map((n, i) => (
        <Node key={n.title} x={8 + i * 138} y={24} w={116} h={58} title={n.title} sub={n.sub} tone={n.tone} show={show} anim={anim} delay={i * 250} />
      ))}
      <Arrow d="M126 53 H144" id="gv-arrow" show={show} anim={anim} delay={200} />
      <Arrow d="M264 53 H282" id="gv-arrow" show={show} anim={anim} delay={450} />
      <Arrow d="M402 53 H420" id="gv-arrow" show={show} anim={anim} delay={700} />
      <Fade show={show} anim={anim} delay={1000}>
        {nodes.map((_, i) => (
          <line key={i} x1={66 + i * 138} y1="84" x2={66 + i * 138} y2="116" stroke={AXIS} strokeDasharray="3 4" />
        ))}
        <rect x="8" y="118" width="530" height="50" rx="12" fill="none" stroke={AXIS} strokeDasharray="5 4" />
        <text x="273" y="148" textAnchor="middle" fill={SUB} fontSize="12">
          Model register · audit trail · drift monitoring · versioned prompts
        </text>
      </Fade>
    </svg>
  );
}