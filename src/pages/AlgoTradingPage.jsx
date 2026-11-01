import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import { ChartCard, useChart } from '../components/Ai900Charts';

/* ------------------------------------------------------------------ */
/* Page-level helpers (same tokens as ui.jsx, no new colours)          */
/* ------------------------------------------------------------------ */

const C = { accent: 'var(--accent)', blue: '#3b82f6', amber: '#f59e0b', violet: '#a855f7' };
const AXIS = 'var(--text-muted)';

/* Numbered because the content really is a sequence. "Label — text" is split for scanning. */
function StepList({ steps }) {
  return (
    <ol className="space-y-5">
      {steps.map(([label, text], i) => (
        <li key={label} className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--surface-strong)] text-xs font-bold text-[var(--accent-strong)]"
          >
            {i + 1}
          </span>
          <p className="pt-1 text-base leading-7 text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">{label}.</span> {text}
          </p>
        </li>
      ))}
    </ol>
  );
}

function CodeBlock({ code, note }) {
  return (
    <div>
      <pre
        className={`${T.inner} overflow-x-auto font-mono text-xs leading-6 text-[var(--text-primary)] sm:text-sm sm:leading-7`}
      >
        <code>{code}</code>
      </pre>
      {note && <p className={T.small}>{note}</p>}
    </div>
  );
}

function AlgoHeader({ id, eyebrow, title, description, alt }) {
  return (
    <div id={id} className="scroll-mt-24">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Charts                                                              */
/* ------------------------------------------------------------------ */

function PairsChart() {
  const { ref, show, anim } = useChart();
  const draw = (delay = 0, duration = 1500) => ({
    pathLength: 1,
    strokeDasharray: 1,
    style: {
      strokeDashoffset: show ? 0 : 1.02,
      transition: anim ? `stroke-dashoffset ${duration}ms ease-out ${show ? delay : 0}ms` : 'none',
    },
  });
  const pop = (delay) => ({
    style: {
      opacity: show ? 1 : 0,
      transition: anim ? `opacity 500ms ease-out ${show ? delay : 0}ms` : 'none',
    },
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 520 240"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: the spread z-score crosses +2 and the pair is shorted, crosses minus 2 and the pair is bought, and both trades exit at zero"
    >
      {/* bands */}
      {[
        [50, '+2'],
        [120, '0'],
        [190, '−2'],
      ].map(([y, label]) => (
        <g key={label}>
          <line x1="40" y1={y} x2="510" y2={y} stroke={AXIS} strokeOpacity="0.5" strokeDasharray={label === '0' ? '0' : '4 5'} />
          <text x="8" y={y + 4} fill={AXIS} fontSize="15">
            {label}
          </text>
        </g>
      ))}
      <line x1="40" y1="18" x2="510" y2="18" stroke="#ef4444" strokeOpacity="0.35" strokeDasharray="2 5" />
      <line x1="40" y1="226" x2="510" y2="226" stroke="#ef4444" strokeOpacity="0.35" strokeDasharray="2 5" />
      <text x="510" y="12" textAnchor="end" fill="#ef4444" fontSize="14">
        Stop ±3.5
      </text>

      <path
        d="M40 120 C70 112 90 28 122 26 S165 96 185 120 S235 214 268 208 S315 140 335 120 S385 92 405 94 S470 120 510 120"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        {...draw()}
      />

      <g {...pop(500)}>
        <circle cx="103" cy="50" r="7" fill={C.amber} />
        <circle cx="185" cy="120" r="7" fill={C.accent} />
      </g>
      <g {...pop(1000)}>
        <circle cx="250" cy="190" r="7" fill={C.blue} />
        <circle cx="335" cy="120" r="7" fill={C.accent} />
      </g>
      <text x="103" y="40" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">
        Short A, long B
      </text>
      <text x="250" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">
        Long A, short B
      </text>
    </svg>
  );
}

function WalkForwardFolds() {
  const { ref, show, anim } = useChart();
  return (
    <div ref={ref} role="img" aria-label="Five folds: a training window followed by an unseen test window, rolling forward in time">
      <div className="space-y-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="w-14 shrink-0 text-sm text-[var(--text-muted)]">Fold {i + 1}</span>
            <div className="relative h-8 flex-1 overflow-hidden rounded-lg bg-[var(--surface-strong)]">
              <div
                className="absolute top-0 h-full origin-left rounded-lg"
                style={{
                  left: `${i * 9}%`,
                  width: '52%',
                  background: C.accent,
                  opacity: 0.85,
                  transform: `scaleX(${show ? 1 : 0})`,
                  transition: anim ? `transform 700ms ease-out ${show ? i * 150 : 0}ms` : 'none',
                }}
              />
              <div
                className="absolute top-0 h-full rounded-lg"
                style={{
                  left: `${i * 9 + 52}%`,
                  width: '14%',
                  background: C.amber,
                  opacity: show ? 0.95 : 0,
                  transition: anim ? `opacity 500ms ease-out ${show ? i * 150 + 500 : 0}ms` : 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className={`${T.small} mt-5`}>
        The model never sees the test months while it learns. Then the window rolls forward, exactly as it would live.
      </p>
    </div>
  );
}

function MetricTable() {
  const rows = [
    ['Sharpe ratio', 'Return per unit of risk', '> 1, net'],
    ['Sortino ratio', 'Return ÷ downside risk', '> 1.5, net'],
    ['Max drawdown', 'Worst fall from a peak', 'Survivable'],
    ['Hit rate', 'Share of winning trades', 'Read with R:R'],
    ['Profit factor', 'Profits ÷ losses', '> 1.3'],
    ['Calmar ratio', 'Yearly return ÷ max drawdown', '> 1'],
  ];
  return (
    <div className={`${T.card} overflow-hidden !p-0`}>
      <div className="hidden grid-cols-3 gap-4 border-b border-[var(--border-soft)] bg-[var(--surface-strong)] px-6 py-4 text-sm font-semibold text-[var(--text-muted)] sm:grid">
        <div>Metric</div>
        <div>Plain meaning</div>
        <div>Rule of thumb</div>
      </div>
      {rows.map(([metric, meaning, rule], i) => (
        <Reveal
          key={metric}
          delay={(i % 3) * 60}
          className="grid grid-cols-1 gap-2 border-b border-[var(--border-soft)] px-4 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <div className="text-base font-semibold text-[var(--accent-strong)]">{metric}</div>
          <div className="text-sm leading-6 text-[var(--text-secondary)]">
            <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">Plain meaning</span>
            {meaning}
          </div>
          <div className="text-sm leading-6 text-[var(--text-primary)]">
            <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">Rule of thumb</span>
            {rule}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const classifierSteps = [
  ['Data', '10 years of NIFTY 50 daily bars, India VIX, FII/DII flows and the GIFT Nifty gap.'],
  ['Label', '1 if tomorrow’s close beats today’s by more than costs, else 0.'],
  ['Features', '1, 5 and 20-day returns, RSI, ATR, VIX change, PCR and 5-day FII flow.'],
  ['Train', 'LightGBM with walk-forward: train on 3 years, test the next 3 months, roll.'],
  ['Signal', 'Long above 58% probability, short below 42%, otherwise flat.'],
  ['Risk', 'Size by volatility, set a daily loss limit, exit by the close.'],
];

const classifierCode = `for w in walk_forward(train="3y", test="3m"):
    m = LGBMClassifier(max_depth=4)
    m.fit(X[w.train], y[w.train])
    p = m.predict_proba(X[w.test])[:, 1]
    sig = where(p > 0.58, 1,
               where(p < 0.42, -1, 0))
    pnl += backtest(sig, costs=NSE_COSTS)
    report(pnl)  # Sharpe, max DD, hit rate`;

const regimeInputs = [
  '20-day return',
  '20-day volatility',
  'India VIX level',
  'Breadth: % of stocks above 50-DMA',
];

const regimes = [
  ['Calm trend', 'Momentum and breakouts, full size.'],
  ['Range-bound', 'Mean reversion and option selling.'],
  ['Stress', 'Cut size, hedge, or stay flat.'],
];

const pairsSteps = [
  ['Pick', 'Two same-sector F&O stocks, for example two large private banks.'],
  ['Test', 'Cointegration on 1 year of data (Engle-Granger, p < 0.05).'],
  ['Hedge', 'Regress A on B to get β; spread = A − β × B.'],
  ['Score', 'z = (spread − 60-day mean) ÷ 60-day standard deviation.'],
  ['Trade', 'z above +2: short A, long B. Below −2: the reverse. Exit at 0.'],
  ['Protect', 'Stop beyond ±3.5 or after 20 days; re-test the pair monthly.'],
];

const lstmCards = [
  ['Input · 60 days', 'NIFTY returns, realised volatility, India VIX, ATM IV and PCR.'],
  ['Model', 'LSTM, 2 layers × 64 units, dropout 0.2.'],
  ['Output', 'Forecast of the next 5 days of realised volatility.'],
];

const lstmCode = `model = Sequential([
    LSTM(64, return_sequences=True),
    Dropout(0.2),
    LSTM(64),
    Dense(1)
])

model.fit(X_60d, y_vol5d, epochs=50)
edge = atm_iv - model.predict(X_today)`;

const sentimentSteps = [
  ['Collect', 'NSE announcements and news, timestamped.'],
  ['Score', 'LLM returns JSON: type, sentiment, materiality.'],
  ['Validate', 'Schema check; humans audit a sample.'],
  ['Aggregate', 'Per stock, per day, decay-weighted.'],
  ['Feed', 'New features go into the Algorithm 1 model.'],
];

const sentimentCode = `SYSTEM: Indian equity analyst. JSON only.
USER: Classify this NSE announcement:
<announcement_text>

{"type": "order_win",
 "sentiment": 0.7,
 "materiality": 4,
 "reason": "order ~ 8% of revenue"}`;

const sentimentRules = [
  'Use announcement time, not processing time',
  'Temperature 0; freeze the model version',
  'Keep the feature only if it adds out-of-sample value',
  'Log every prompt and output for audit',
];

const agentSchedule = [
  ['07:30', 'Collect', 'GIFT Nifty, global indices, crude and USD/INR via MCP data servers.'],
  ['07:45', 'Read', 'Overnight NSE announcements and watchlist news, sentiment-scored.'],
  ['08:00', 'Analyse', 'Previous day’s FII/DII flows, OI build-up, India VIX and today’s regime.'],
  ['08:15', 'Draft', 'Ranked events, key levels, risks and suggested strategy switches.'],
  ['08:45', 'Human review', 'Desk head edits and approves the brief.'],
  ['09:00', 'Pre-open', 'Team trades the plan; the agent has logged every source it used.'],
];

const index = [
  ['algo-1', 'Direction classifier'],
  ['algo-2', 'Regime detection'],
  ['algo-3', 'Pairs trading'],
  ['validation', 'Walk-forward testing'],
  ['algo-4', 'LSTM volatility'],
  ['algo-5', 'Announcement sentiment'],
  ['algo-6', 'Pre-market agent'],
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AlgoTradingPage() {
  return (
    <Layout
      title="Algorithms | AlphaEdge"
      description="Six worked algorithms for the trading desk: classification, regime detection, pairs trading, LSTM volatility, LLM sentiment and an agentic pre-market brief, with walk-forward validation."
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <Reveal as="p" className={T.eyebrow}>
          AI for the trading desk
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
        >
          Six algorithms, built from data to desk
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          Each one is a complete recipe on Indian market data: the inputs, the model, the signal and the risk
          control. Parameters are illustrative; the method is what you learn to defend.
        </Reveal>

        <Reveal delay={300} className="mt-8">
          <nav aria-label="On this page" className="flex flex-wrap gap-3">
            {index.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {label}
              </a>
            ))}
          </nav>
        </Reveal>
      </Section>

      {/* ============================ ALGORITHM 1 ============================ */}
      <Section alt>
        <AlgoHeader id="algo-1" eyebrow="Algorithm 1 · Classification" title="NIFTY next-day direction classifier" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal className={T.cardAlt}>
            <StepList steps={classifierSteps} />
          </Reveal>
          <Reveal delay={150} className={T.cardAlt}>
            <CodeBlock
              code={classifierCode}
              note="Illustrative parameters. Tune them inside walk-forward windows, never on the full history."
            />
          </Reveal>
        </div>
      </Section>

      {/* ============================ ALGORITHM 2 ============================ */}
      <Section>
        <AlgoHeader id="algo-2" eyebrow="Algorithm 2 · Unsupervised learning" title="Market regime detection" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:items-stretch">
          <Reveal className={T.card}>
            <h3 className={T.h3}>Inputs, daily</h3>
            <ul className="mt-5 space-y-3">
              {regimeInputs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col justify-center rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-6 text-center sm:p-8"
          >
            <p className={T.eyebrow}>Model</p>
            <p className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
              Hidden Markov model or K-Means
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">3 states, retrained monthly</p>
          </Reveal>

          <div className="space-y-4">
            {regimes.map(([title, copy], i) => (
              <Reveal key={title} delay={240 + i * 100} className={`${T.card} !p-5`}>
                <h3 className={T.h3}>{title}</h3>
                <p className={T.small}>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Banner>
          Most strategies work in one regime and bleed in another.{' '}
          <strong>The regime model decides which strategy may trade today.</strong>
        </Banner>
      </Section>

      {/* ============================ ALGORITHM 3 ============================ */}
      <Section alt>
        <AlgoHeader id="algo-3" eyebrow="Algorithm 3 · Statistical arbitrage" title="Pairs trading with cointegration" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal className={T.cardAlt}>
            <StepList steps={pairsSteps} />
          </Reveal>
          <ChartCard
            alt
            title="The spread z-score"
            caption="Illustration, not real data. Enter at ±2, exit at 0, stop out beyond ±3.5."
            legend={[
              { label: 'Short the spread', color: '#f59e0b' },
              { label: 'Long the spread', color: '#3b82f6' },
              { label: 'Exit at 0', color: 'var(--accent)' },
            ]}
          >
            <PairsChart />
          </ChartCard>
        </div>
      </Section>

      {/* ============================ VALIDATION ============================ */}
      <Section>
        <AlgoHeader id="validation" eyebrow="Module 2 · Validation" title="Proving the edge: walk-forward testing" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <ChartCard
            title="Train, test, roll forward"
            legend={[
              { label: 'Train (past only)', color: 'var(--accent)' },
              { label: 'Test (unseen)', color: '#f59e0b' },
            ]}
          >
            <WalkForwardFolds />
          </ChartCard>
          <MetricTable />
        </div>
      </Section>

      {/* ============================ ALGORITHM 4 ============================ */}
      <Section alt>
        <AlgoHeader id="algo-4" eyebrow="Algorithm 4 · Deep learning" title="LSTM volatility forecaster for options" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {lstmCards.map(([title, text], i) => (
            <Reveal key={title} delay={i * 120} className={T.cardAlt}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{title}</h3>
              <p className={T.body}>{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal className={T.cardAlt}>
            <h3 className={T.h3}>Decision rule</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                <Check />
                <span className="pt-0.5">
                  IV well above forecast: options look rich. Sell defined-risk premium, for example an iron condor.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                <Check />
                <span className="pt-0.5">
                  IV well below forecast: options look cheap. Buy a long straddle or strangle.
                </span>
              </li>
            </ul>
            <p className={`${T.small} mt-5`}>
              Filters: skip RBI policy, Budget and results days, and cap the loss per trade.
            </p>
          </Reveal>
          <Reveal delay={150} className={T.cardAlt}>
            <CodeBlock code={lstmCode} />
          </Reveal>
        </div>
      </Section>

      {/* ============================ ALGORITHM 5 ============================ */}
      <Section>
        <AlgoHeader id="algo-5" eyebrow="Algorithm 5 · Generative AI" title="Announcement sentiment as a feature" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {sentimentSteps.map(([title, text], i) => (
            <Reveal key={title} delay={(i % 5) * 80} className={`${T.card} !p-5`}>
              <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal className={T.card}>
            <CodeBlock code={sentimentCode} />
          </Reveal>
          <Reveal delay={150} className={T.card}>
            <h3 className={T.h3}>Rules that keep it honest</h3>
            <ul className="mt-5 space-y-4">
              {sentimentRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{rule}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ============================ ALGORITHM 6 ============================ */}
      <Section alt>
        <AlgoHeader id="algo-6" eyebrow="Algorithm 6 · Agentic AI" title="Pre-market brief agent, every trading day" />
        <Reveal className={`${T.cardAlt} overflow-hidden !p-0`}>
          {agentSchedule.map(([time, task, detail]) => (
            <div
              key={time}
              className="grid grid-cols-1 gap-1 border-b border-[var(--border-soft)] px-5 py-5 last:border-b-0 md:grid-cols-[90px_150px_minmax(0,1fr)] md:items-baseline md:gap-6 md:px-8"
            >
              <time className="text-lg font-bold tabular-nums text-[var(--accent-strong)]">{time}</time>
              <p className="text-lg font-semibold text-[var(--text-primary)]">{task}</p>
              <p className="text-base leading-7 text-[var(--text-secondary)]">{detail}</p>
            </div>
          ))}
        </Reveal>

        <Banner label="Boundary">
          The agent prepares; humans decide. Its tools are read-only, so it never places orders.
        </Banner>
      </Section>
    </Layout>
  );
}