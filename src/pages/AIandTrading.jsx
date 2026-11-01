import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import { ChartCard, useChart } from '../components/Ai900Charts';

/* ------------------------------------------------------------------ */
/* Shared bits (same tokens as ui.jsx, no new colours)                 */
/* ------------------------------------------------------------------ */

const C = { accent: 'var(--accent)', blue: '#3b82f6', amber: '#f59e0b', violet: '#a855f7', red: '#ef4444' };
const AXIS = 'var(--text-muted)';

/* A titled block inside a module section (one per original slide). */
function Block({ id, title, intro, first = false, children }) {
  return (
    <div id={id} className={`${first ? '' : 'mt-16 sm:mt-20'} scroll-mt-24`}>
      <Reveal as="h3" className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={80} className={`${T.lead} !max-w-3xl`}>
          {intro}
        </Reveal>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function CodeBlock({ lines, label }) {
  return (
    <div>
      {label && <p className="mb-3 text-sm font-semibold text-[var(--text-primary)]">{label}</p>}
      <pre
        className={`${T.inner} overflow-x-auto font-mono text-xs leading-6 text-[var(--text-primary)] sm:text-sm sm:leading-7`}
      >
        <code>{lines.join('\n')}</code>
      </pre>
    </div>
  );
}

function Cross() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ef4444]/15 text-sm font-bold text-[#ef4444]"
    >
      ✕
    </span>
  );
}

function BulletList({ items, icon: Icon = Check }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
          <Icon />
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Cards with a title and a line of text. */
function CardGrid({ cards, cols = 'md:grid-cols-2 xl:grid-cols-3', small = false }) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {cards.map(([title, text], i) => (
        <Reveal key={title} delay={(i % 3) * 100} className={`${T.card} ${small ? '!p-5' : ''}`}>
          <h4 className={small ? 'text-base font-semibold text-[var(--accent-strong)]' : T.h3}>{title}</h4>
          <p className={small ? 'mt-2 text-sm leading-6 text-[var(--text-secondary)]' : T.body}>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* Numbered cards, because the content is a real sequence. */
function FlowRow({ label, steps, start = 1, cols = 'xl:grid-cols-4' }) {
  return (
    <div>
      {label && <p className="mb-4 text-sm font-semibold text-[var(--accent-strong)]">{label}</p>}
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${cols}`}>
        {steps.map(([title, text], i) => (
          <Reveal key={title} delay={(i % 5) * 80} className={`${T.card} !p-5`}>
            <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
              {start + i}
            </span>
            <h4 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* Three-column table: header row on desktop, labelled rows on mobile. */
function DataTable({ heads, rows }) {
  return (
    <div className={`${T.card} overflow-hidden !p-0`}>
      <div className="hidden grid-cols-3 gap-4 border-b border-[var(--border-soft)] bg-[var(--surface-strong)] px-6 py-4 text-sm font-semibold text-[var(--text-muted)] sm:grid">
        {heads.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <Reveal
          key={row[0]}
          delay={(i % 4) * 60}
          className="grid grid-cols-1 gap-3 border-b border-[var(--border-soft)] px-4 py-5 last:border-b-0 sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <div className="text-base font-semibold text-[var(--accent-strong)]">{row[0]}</div>
          {row.slice(1).map((cell, j) => (
            <div key={j} className="text-sm leading-6 text-[var(--text-secondary)]">
              <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">{heads[j + 1]}</span>
              {cell}
            </div>
          ))}
        </Reveal>
      ))}
    </div>
  );
}

/* A labelled role bar for the multi-agent desk. */
function RoleBar({ label, text, tone }) {
  const styles =
    tone === 'accent'
      ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10'
      : tone === 'amber'
        ? 'border-[#f59e0b]/50 bg-[#f59e0b]/10'
        : 'border-[var(--border-soft)] bg-[var(--surface)]';
  return (
    <Reveal className={`rounded-2xl border p-5 sm:p-6 ${styles}`}>
      <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
      <p className="mt-1 text-base leading-7 text-[var(--text-secondary)]">{text}</p>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Illustrations                                                       */
/* ------------------------------------------------------------------ */

function fadeStyle(show, anim, delay = 0) {
  return {
    opacity: show ? 1 : 0,
    transition: anim ? `opacity 600ms ease-out ${show ? delay : 0}ms` : 'none',
  };
}

function NetworkChart() {
  const { ref, show, anim } = useChart();
  const inputs = ['Returns', 'RSI', 'OI change', 'India VIX', 'FII flow'];
  const ys = inputs.map((_, i) => 40 + i * 55);
  const xs = [150, 290, 410];
  const OUT = { x: 530, y: 150 };

  return (
    <svg
      ref={ref}
      viewBox="0 0 700 300"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: five inputs feed two hidden layers of nodes, which combine into one output, the probability the market goes up"
    >
      <g style={fadeStyle(show, anim, 200)} stroke={AXIS} strokeOpacity="0.3" strokeWidth="1.5">
        {[0, 1].map((layer) =>
          ys.flatMap((y1, a) => ys.map((y2, b) => (
            <line key={`${layer}-${a}-${b}`} x1={xs[layer]} y1={y1} x2={xs[layer + 1]} y2={y2} />
          ))),
        )}
        {ys.map((y, a) => (
          <line key={`o-${a}`} x1={xs[2]} y1={y} x2={OUT.x} y2={OUT.y} />
        ))}
      </g>

      {inputs.map((label, i) => (
        <g key={label} style={fadeStyle(show, anim, i * 80)}>
          <text x="130" y={ys[i] + 7} textAnchor="end" fill="var(--text-secondary)" fontSize="20">
            {label}
          </text>
          <circle cx={xs[0]} cy={ys[i]} r="11" fill={C.accent} />
        </g>
      ))}

      <g style={fadeStyle(show, anim, 500)}>
        {[1, 2].map((layer) =>
          ys.map((y) => <circle key={`${layer}-${y}`} cx={xs[layer]} cy={y} r="11" fill={C.blue} fillOpacity="0.85" />),
        )}
      </g>

      <g style={fadeStyle(show, anim, 900)}>
        <circle cx={OUT.x} cy={OUT.y} r="21" fill={C.amber} />
        <text x={OUT.x + 30} y={OUT.y + 7} fill="var(--text-primary)" fontSize="19" fontWeight="700">
          P(up) = 0.64
        </text>
      </g>
    </svg>
  );
}

function EmbeddingChart() {
  const { ref, show, anim } = useChart();
  const clusters = [
    { color: C.amber, pts: [[100, 80], [125, 95], [90, 110], [135, 70], [115, 120]] },
    { color: C.blue, pts: [[320, 70], [345, 95], [300, 100], [360, 70], [335, 120]] },
    { color: C.violet, pts: [[215, 205], [245, 190], [200, 225], [260, 220], [230, 235]] },
  ];
  return (
    <svg
      ref={ref}
      viewBox="0 0 440 260"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: passages with similar meaning sit close together, and the query lands next to the margin pressure group"
    >
      <rect x="6" y="6" width="428" height="248" rx="10" fill="none" stroke="var(--border-soft)" />
      {clusters.map((c, ci) => (
        <g key={c.color} style={fadeStyle(show, anim, ci * 250)}>
          {c.pts.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill={c.color} fillOpacity="0.9" />
          ))}
        </g>
      ))}
      <g style={fadeStyle(show, anim, 1000)}>
        <circle cx="150" cy="100" r="13" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
        <text x="150" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="16">
          Your query
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const ruleCode = ['IF RSI(14) < 30', 'AND close > SMA(200)', 'THEN BUY 1 lot', 'STOP 1.5 × ATR'];
const learnedCode = [
  'X = [RSI, ATR, OI_chg, PCR, VIX,',
  '     FII_flow, … +40 more]',
  'p_up = model.predict(X)',
  'IF p_up > 0.60 → BUY, size ∝ edge',
];

const vocabulary = [
  ['Model', 'A rulebook learned from data', 'Your strategy, with learned weights'],
  ['Features', 'The inputs the model sees', 'Indicators: RSI, OI change, VWAP gap, PCR'],
  ['Label', 'What we want to predict', 'Next-day direction, 5-day volatility'],
  ['Training', 'Fitting the model to history', 'Building the strategy on past data'],
  ['Validation', 'Testing on data it has never seen', 'Out-of-sample backtest, paper trading'],
  ['Overfitting', 'Memorising noise, not signal', 'The curve-fitted backtest that fails live'],
  ['Inference', 'Running the model on new data', 'Generating today’s live signal'],
  ['Drift', 'Data no longer looks like history', 'Regime change, e.g., a volatility shock'],
];

const research = [
  ['Collect', 'Bhavcopy, ticks, option chain, news'],
  ['Clean', 'Splits, bonuses, holidays, gaps'],
  ['Features', 'Returns, RSI, OI, VIX, flows'],
  ['Label', 'What to predict, over what horizon'],
  ['Train', 'Fit on the past only'],
];
const production = [
  ['Walk-forward', 'Retrain and test, window by window'],
  ['Costs', 'STT, brokerage, GST, stamp, slippage'],
  ['Paper trade', 'Live data, no money at risk'],
  ['Go live', 'Small size, hard limits, kill switch'],
  ['Monitor', 'Drift, decay, retrain triggers'],
];

const architectures = [
  ['LSTM / GRU', 'Reads prices as a sequence and remembers what mattered earlier. Desk use: volatility and return forecasts from 60–120-day windows.'],
  ['1D-CNN', 'Scans short windows for local shapes, like a chart reader. Desk use: pattern detection on OHLC bars and order-book snapshots.'],
  ['Transformer', '“Attention” decides which past days, or which stocks, matter most today. Desk use: multi-horizon forecasts (Temporal Fusion Transformer).'],
  ['Autoencoder', 'Learns what “normal” looks like, then flags the unusual. Desk use: abnormal OI build-up, volume spikes, risk alerts.'],
];

const networkNotes = [
  'Each node is a tiny analyst. It weighs a few inputs and passes an opinion to the next layer.',
  'Layers combine opinions into patterns that no single indicator shows.',
  'Training nudges millions of weights until predictions on history are least wrong (backpropagation).',
  'Use it where data is rich: ticks, order books, text. On a few thousand daily rows, simpler models often win.',
];

const lstmCards = [
  ['Input · 60 days', 'NIFTY returns, realised vol, India VIX, ATM IV, PCR.'],
  ['Model', 'LSTM, 2 layers × 64 units, dropout 0.2.'],
  ['Output', 'Forecast of next-5-day realised volatility.'],
];
const lstmDecision = [
  'IV well above forecast: options look rich. Sell defined-risk premium, e.g., an iron condor.',
  'IV well below forecast: options look cheap. Buy a long straddle or strangle.',
];
const lstmCode = [
  'model = Sequential([',
  '    LSTM(64, return_sequences=True),',
  '    Dropout(0.2),',
  '    LSTM(64),',
  '    Dense(1)',
  '])',
  '',
  'model.fit(X_60d, y_vol5d, epochs=50)',
  'edge = atm_iv - model.predict(X_today)',
];

const llmFacts = [
  ['Token', 'A word-piece. Cost and limits are counted in tokens.'],
  ['Context', 'How much it can read at once: a full annual report, or more.'],
  ['Prompt', 'Your instruction. Structure in, structure out.'],
  ['Temperature', '0 gives consistent answers; higher is more creative.'],
  ['Hallucination', 'Confident but wrong. Fix it with sources and checks.'],
];

const techniques = [
  ['Zero-shot', 'Instruction only, no examples', 'Quick summaries, clear-cut classification'],
  ['Few-shot', 'Adds 2–5 solved examples', 'Consistent labels, e.g., event type'],
  ['Step-by-step reasoning', 'Reasons before it answers', 'Multi-step analysis, scenario logic'],
  ['Structured output', 'Enforces a JSON schema', 'Anything that feeds a database or model'],
  ['Prompt chaining', 'Splits a job into linked prompts', 'Extract, verify, then summarise long reports'],
  ['Self-check', 'A second prompt audits the first', 'Catching invented numbers early'],
];
const promptsAreCode = ['Version control', 'Test sets', 'Temperature 0', 'Re-test on upgrade'];

const weakPrompt = ['Summarise this concall.'];
const strongPrompt = [
  'ROLE: Banking analyst, Indian equities.',
  'TASK: From the transcript, extract FY27 guidance:',
  '      loan growth, NIM, credit cost.',
  'RULES: Use only management’s words.',
  '       If a figure is not stated, return null.',
  'FORMAT: JSON {metric, value, quote}',
  'TRANSCRIPT: "..."',
];
const weakPoints = ['A different answer on every run', 'Rounds or skips key numbers', 'May invent guidance that was never given'];
const strongPoints = ['Same structure on every run', 'Every figure tied to a direct quote', 'Says “null” instead of guessing'];

const promptParts = [
  ['Role', 'Who the model should act as. “Credit analyst covering PSU banks.”'],
  ['Context', 'The data it must use, and only that. “Use only the Q2 FY27 transcript.”'],
  ['Task', 'One clear, checkable job. “Extract NIM and slippage guidance.”'],
  ['Constraints', 'What it must never do. “No forecasts. If missing, return null.”'],
  ['Output format', 'A schema your code can parse: {"metric": "...", "value": "...", "quote": "..."}'],
  ['Examples', 'One or two solved cases (few-shot): an input and the exact output you want.'],
];

const llmUses = [
  ['Read at scale', 'Summarise 200 concall transcripts overnight: guidance, capex, margins.'],
  ['Event triage', 'Classify NSE announcements by type and materiality in seconds.'],
  ['Sentiment features', 'Turn news and filings into numeric scores your ML models can use.'],
  ['Code co-pilot', 'Write, explain and review Python for backtests and data pipelines.'],
  ['Regulation helper', 'Explain SEBI and exchange circulars; draft checklists for sign-off.'],
  ['Research drafts', 'Draft morning notes and post-trade reports from structured data.'],
];

const sentimentFlow = [
  ['Collect', 'NSE announcements and news, timestamped'],
  ['Score', 'LLM returns JSON: type, sentiment, materiality'],
  ['Validate', 'Schema check; humans audit a sample'],
  ['Aggregate', 'Per stock, per day, decay-weighted'],
  ['Feed', 'New features into the Algorithm 1 model'],
];
const sentimentPrompt = [
  'SYSTEM: Indian equity analyst. JSON only.',
  'USER: Classify this NSE announcement:',
  '"announcement_text"',
  '',
  '{"type": "order_win",',
  ' "sentiment": 0.7,',
  ' "materiality": 4,',
  ' "reason": "order ≈ 8% of revenue"}',
];
const sentimentRules = [
  'Use announcement time, not processing time',
  'Temperature 0; freeze the model version',
  'Keep it only if it adds out-of-sample value',
  'Log every prompt and output for audit',
];

const embeddingSteps = [
  'An embedding model turns any text into a vector: a list of hundreds or thousands of numbers.',
  'Similar meaning lands close together, even with no shared words.',
  'A vector database stores millions of them and finds the nearest in milliseconds.',
];

const ragIndexing = [
  ['Documents', 'SEBI circulars, reports, concalls'],
  ['Chunk', 'Split into short passages'],
  ['Embed', 'Each passage becomes a vector'],
  ['Vector DB', 'Stored with source and date'],
];
const ragAnswering = [
  ['Question', '“Which banks guided lower slippages?”'],
  ['Embed', 'Same model, same vector space'],
  ['Retrieve', 'Top-5 nearest passages'],
  ['LLM answer', 'Written from passages, with citations'],
];

const mcpLeft = [
  ['Market data', 'Quotes, OHLC, option chain'],
  ['Backtest engine', 'Run a strategy, return metrics'],
  ['Broker API', 'Positions and P&L, read-only'],
];
const mcpRight = [
  ['Risk database', 'Limits, exposure, margin'],
  ['Research store', 'RAG over filings and circulars'],
  ['News feed', 'Announcements and headlines'],
];

const agentFlow = [
  ['Plan', 'Break the goal into steps'],
  ['Act', 'Call a tool via MCP'],
  ['Observe', 'Read the result it got back'],
  ['Reflect', 'Goal met? If not, loop again'],
];
const agentParts = [
  'Brain: an LLM that reasons and picks the next step',
  'Tools: reached through MCP: data, backtests, documents',
  'Memory: vector database plus a log of past steps',
  'Guardrails: limits, permissions and human approval',
];

const agents = [
  ['Data', 'Pulls prices, OI and flows via MCP'],
  ['Analyst', 'Reads filings and concalls via RAG'],
  ['Quant', 'Runs backtests; reports Sharpe and drawdown'],
  ['Risk', 'Checks exposure, margin and loss limits'],
  ['Compliance', 'Checks the plan against SEBI and exchange rules'],
];

const index = [
  ['mental-model', 'Mental model'],
  ['deep-learning', 'Deep learning'],
  ['llms', 'LLMs and prompts'],
  ['retrieval', 'Embeddings, RAG, MCP'],
  ['agents', 'Agentic AI'],
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AIandTrading() {
  return (
    <Layout
      title="AI & Trading | AlphaEdge"
      description="AI and trading systems: rule-based versus learned algorithms, ML pipelines, deep learning, LLMs, prompt engineering, embeddings, RAG, MCP and agentic AI."
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
          How AI works on a trading desk
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          From rule-based algorithms to agents: the ideas behind the programme, in the order you meet them. Each
          idea is tied back to what you already do on the desk.
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

      {/* ============================ MENTAL MODEL ============================ */}
      <Section alt>
        <div id="mental-model" className="scroll-mt-24">
          <SectionHeader eyebrow="The mental model" title="From fixed rules to learned models" />
        </div>

        <Block first title="Rule-based algo versus learned algo">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal className={T.cardAlt}>
              <h4 className={T.h3}>Rule-based: what you run today</h4>
              <div className="mt-4">
                <CodeBlock lines={ruleCode} />
              </div>
              <p className={T.body}>
                Clear and simple. But 30, 200 and 1.5 are your guesses, and they stay fixed while the market
                changes.
              </p>
            </Reveal>
            <Reveal delay={150} className={T.cardAlt}>
              <h4 className={T.h3}>Learned: what ML adds</h4>
              <div className="mt-4">
                <CodeBlock lines={learnedCode} />
              </div>
              <p className={T.body}>
                The model learns which signals matter, how much, and in what combination, from years of NSE
                history.
              </p>
            </Reveal>
          </div>
          <Banner>
            ML does not replace your judgment. It turns your judgment into a testable, measurable process.
          </Banner>
        </Block>

        <Block title="AI vocabulary, translated into trading">
          <DataTable heads={['AI term', 'What it means', 'Your trading equivalent']} rows={vocabulary} />
        </Block>

        <Block title="The trading ML pipeline, end to end">
          <div className="space-y-10">
            <FlowRow label="Research: build the model" steps={research} cols="xl:grid-cols-5" />
            <FlowRow label="Production: earn the right to trade" steps={production} start={6} cols="xl:grid-cols-5" />
          </div>
        </Block>
      </Section>

      {/* ============================ DEEP LEARNING ============================ */}
      <Section>
        <div id="deep-learning" className="scroll-mt-24">
          <SectionHeader eyebrow="Module 3 · Deep learning" title="Deep learning architectures for markets" />
        </div>

        <Block first title="Four architectures, four desk uses">
          <CardGrid cards={architectures} cols="md:grid-cols-2" />
        </Block>

        <Block title="Neural networks, in one picture">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <ChartCard
              caption="Illustration, not a real model."
              legend={[
                { label: 'Inputs', color: 'var(--accent)' },
                { label: 'Hidden layers', color: '#3b82f6' },
                { label: 'Output', color: '#f59e0b' },
              ]}
            >
              <NetworkChart />
            </ChartCard>
            <Reveal delay={150}>
              <BulletList items={networkNotes} />
            </Reveal>
          </div>
        </Block>

        <Block id="lstm" title="Algorithm 4: LSTM volatility forecaster for options">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {lstmCards.map(([title, text], i) => (
              <Reveal key={title} delay={i * 120} className={T.card}>
                <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
                <h4 className={T.h3}>{title}</h4>
                <p className={T.body}>{text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal className={T.card}>
              <h4 className={T.h3}>Decision rule</h4>
              <div className="mt-5">
                <BulletList items={lstmDecision} />
              </div>
              <p className={`${T.small} mt-5`}>Filters: skip RBI policy, Budget and results days; cap loss per trade.</p>
            </Reveal>
            <Reveal delay={150} className={T.card}>
              <CodeBlock lines={lstmCode} />
            </Reveal>
          </div>
        </Block>
      </Section>

      {/* ============================ LLMs ============================ */}
      <Section alt>
        <div id="llms" className="scroll-mt-24">
          <SectionHeader eyebrow="Module 4 · Generative AI and LLMs" title="Language models on the desk" />
        </div>

        <Block
          first
          title="What a large language model really is"
          intro="An LLM predicts the next word after reading a vast share of the world’s text. That makes it a superb reader, writer and coder, not a price oracle."
        >
          <CardGrid cards={llmFacts} cols="md:grid-cols-2 xl:grid-cols-5" small />
        </Block>

        <Block title="Six techniques for financial work">
          <DataTable heads={['Technique', 'What it does', 'Use it on the desk for']} rows={techniques} />
          <Reveal className="mt-8">
            <p className="mb-4 text-sm font-semibold text-[var(--accent-strong)]">Treat prompts as code</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {promptsAreCode.map((item) => (
                <div key={item} className={`${T.inner} flex items-center gap-3 text-base text-[var(--text-primary)]`}>
                  <Check />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Block>

        <Block title="Same model, very different answers">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal className={T.cardAlt}>
              <h4 className={T.h3}>Weak prompt</h4>
              <div className="mt-4">
                <CodeBlock lines={weakPrompt} />
              </div>
              <div className="mt-6">
                <BulletList items={weakPoints} icon={Cross} />
              </div>
            </Reveal>
            <Reveal delay={150} className={T.cardAlt}>
              <h4 className={T.h3}>Engineered prompt</h4>
              <div className="mt-4">
                <CodeBlock lines={strongPrompt} />
              </div>
              <div className="mt-6">
                <BulletList items={strongPoints} />
              </div>
            </Reveal>
          </div>
        </Block>

        <Block title="Anatomy of a production prompt">
          <CardGrid cards={promptParts} />
        </Block>

        <Block title="Where LLMs help the desk today">
          <CardGrid cards={llmUses} />
          <Banner label="Rule">LLMs read and write. Numbers, signals and orders come from tested code.</Banner>
        </Block>

        <Block id="sentiment" title="Algorithm 5: announcement sentiment as a feature">
          <FlowRow steps={sentimentFlow} cols="xl:grid-cols-5" />
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <Reveal className={T.cardAlt}>
              <CodeBlock lines={sentimentPrompt} />
            </Reveal>
            <Reveal delay={150} className={T.cardAlt}>
              <h4 className={T.h3}>Rules that keep it honest</h4>
              <div className="mt-5">
                <BulletList items={sentimentRules} />
              </div>
            </Reveal>
          </div>
        </Block>
      </Section>

      {/* ============================ RETRIEVAL ============================ */}
      <Section>
        <div id="retrieval" className="scroll-mt-24">
          <SectionHeader eyebrow="Module 5 · Vector databases, RAG and MCP" title="Search by meaning, answer from sources" />
        </div>

        <Block first title="Embeddings: search by meaning">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <ol className="space-y-5">
                {embeddingSteps.map((line, i) => (
                  <li key={line} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--surface-strong)] text-xs font-bold text-[var(--accent-strong)]"
                    >
                      {i + 1}
                    </span>
                    <p className="pt-1 text-base leading-7 text-[var(--text-secondary)]">{line}</p>
                  </li>
                ))}
              </ol>
              <Reveal className={`${T.card} mt-8`}>
                <p className="text-sm font-semibold text-[var(--accent-strong)]">Example</p>
                <p className="mt-3 text-base font-semibold leading-7 text-[var(--text-primary)]">
                  Query: “management expects margin pressure”
                </p>
                <p className={T.small}>Finds: “input-cost inflation will weigh on EBITDA for two quarters”</p>
              </Reveal>
            </div>
            <ChartCard
              caption="Illustration: distance in the chart stands for difference in meaning."
              legend={[
                { label: 'Margin pressure', color: '#f59e0b' },
                { label: 'Order wins', color: '#3b82f6' },
                { label: 'Debt reduction', color: '#a855f7' },
              ]}
            >
              <EmbeddingChart />
            </ChartCard>
          </div>
        </Block>

        <Block title="RAG: the LLM answers from your documents">
          <div className="space-y-10">
            <FlowRow label="Indexing: once, then daily" steps={ragIndexing} />
            <FlowRow label="Answering: every question" steps={ragAnswering} />
          </div>
          <Banner>
            Why RAG: answers grounded in sources you trust, on private and current data, with every claim traceable
            to a page.
          </Banner>
        </Block>

        <Block
          title="MCP: one standard plug for every tool"
          intro="An open standard that lets any AI app connect to your data and tools. Think of it as USB-C for AI."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              {mcpLeft.map(([title, text], i) => (
                <Reveal key={title} delay={i * 100} className={`${T.card} !p-5`}>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{title}</h4>
                  <p className={T.small}>{text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal
              delay={150}
              className="rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-6 text-center sm:p-8"
            >
              <p className="text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
                AI assistant or agent
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">speaks MCP</p>
            </Reveal>
            <div className="space-y-4">
              {mcpRight.map(([title, text], i) => (
                <Reveal key={title} delay={i * 100} className={`${T.card} !p-5`}>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{title}</h4>
                  <p className={T.small}>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Banner>Build each tool once; any model or agent can use it. Orders stay behind human approval.</Banner>
        </Block>
      </Section>

      {/* ============================ AGENTS ============================ */}
      <Section alt>
        <div id="agents" className="scroll-mt-24">
          <SectionHeader eyebrow="Module 6 · Agentic AI" title="Agents and multi-agent desks" />
        </div>

        <Block first title="What makes AI “agentic”">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-4">
              <FlowRow steps={agentFlow} cols="" />
              <Reveal className={T.inner}>
                <p className="text-sm font-semibold text-[var(--accent-strong)]">Example goal</p>
                <p className="mt-2 text-base leading-7 text-[var(--text-primary)]">
                  “Find F&amp;O stocks with unusual OI build-up; check results dates”
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className={T.cardAlt}>
              <h4 className={T.h3}>What an agent is made of</h4>
              <div className="mt-5">
                <BulletList items={agentParts} />
              </div>
            </Reveal>
          </div>
        </Block>

        <Block title="A multi-agent research desk">
          <div className="space-y-4">
            <RoleBar
              tone="accent"
              label="Orchestrator"
              text="Splits the task, gathers results, writes the trade proposal."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
              {agents.map(([title, text], i) => (
                <Reveal key={title} delay={(i % 5) * 80} className={`${T.card} !p-5`}>
                  <h4 className="text-base font-semibold text-[var(--accent-strong)]">{title}</h4>
                  <p className={T.small}>{text}</p>
                </Reveal>
              ))}
            </div>
            <RoleBar tone="amber" label="Human" text="Portfolio manager reviews, edits and approves, or rejects." />
            <RoleBar
              label="Execution"
              text="Through the broker’s approved algo channel, tagged with its Algo ID."
            />
          </div>
        </Block>
      </Section>
    </Layout>
  );
}