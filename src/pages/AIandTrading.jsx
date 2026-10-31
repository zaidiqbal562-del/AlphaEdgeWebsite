import Layout from '../layout/Layout';

const deck = [
  {
    theme: 'light',
    eyebrow: 'THE MENTAL MODEL',
    title: 'Rule-based algo vs. learned algo',
    variant: 'two-column-compare',
    left: {
      title: 'Rule-based: what you run today',
      code: ['IF RSI(14) < 30', 'AND close > SMA(200)', 'THEN BUY 1 lot', 'STOP 1.5 × ATR'],
      body: 'Clear and simple. But 30, 200 and 1.5 are your guesses — and they stay fixed while the market changes.'
    },
    right: {
      title: 'Learned: what ML adds',
      code: ['X = [RSI, ATR, OI_chg, PCR, VIX,', 'FII_flow, … +40 more]', 'p_up = model.predict(X)', 'IF p_up > 0.60 → BUY, size ∝ edge'],
      body: 'The model learns which signals matter, how much, and in what combination — from years of NSE history.'
    },
    banner: 'ML does not replace your judgment. It turns your judgment into a testable, measurable process.'
  },
  {
    theme: 'light',
    eyebrow: 'THE MENTAL MODEL',
    title: 'AI vocabulary, translated into trading',
    variant: 'table',
    rows: [
      ['Model', 'A rulebook learned from data', 'Your strategy, with learned weights'],
      ['Features', 'The inputs the model sees', 'Indicators: RSI, OI change, VWAP gap, PCR'],
      ['Label', 'What we want to predict', 'Next-day direction, 5-day volatility'],
      ['Training', 'Fitting the model to history', 'Building the strategy on past data'],
      ['Validation', 'Testing on data it has never seen', 'Out-of-sample backtest, paper trading'],
      ['Overfitting', 'Memorising noise, not signal', 'The curve-fitted backtest that fails live'],
      ['Inference', 'Running the model on new data', 'Generating today\'s live signal'],
      ['Drift', 'Data no longer looks like history', 'Regime change, e.g., a volatility shock']
    ]
  },
  {
    theme: 'light',
    eyebrow: 'THE MENTAL MODEL',
    title: 'The trading ML pipeline, end to end',
    variant: 'pipeline',
    research: [
      ['01', 'Collect', 'Bhavcopy, ticks, option chain, news'],
      ['02', 'Clean', 'Splits, bonuses, holidays, gaps'],
      ['03', 'Features', 'Returns, RSI, OI, VIX, flows'],
      ['04', 'Label', 'What to predict, over what horizon'],
      ['05', 'Train', 'Fit on the past only']
    ],
    production: [
      ['06', 'Walk-forward', 'Retrain and test, window by window'],
      ['07', 'Costs', 'STT, brokerage, GST, stamp, slippage'],
      ['08', 'Paper trade', 'Live data, no money at risk'],
      ['09', 'Go live', 'Small size, hard limits, kill switch'],
      ['10', 'Monitor', 'Drift, decay, retrain triggers']
    ]
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 3 · DEEP LEARNING',
    title: 'Deep learning architectures for markets',
    variant: 'architecture-grid',
    cards: [
      ['LSTM / GRU', 'Reads prices as a sequence and remembers what mattered earlier. Desk use: volatility and return forecasts from 60–120-day windows.'],
      ['1D-CNN', 'Scans short windows for local shapes, like a chart reader. Desk use: pattern detection on OHLC bars and order-book snapshots.'],
      ['Transformer', '“Attention” decides which past days, or which stocks, matter most today. Desk use: multi-horizon forecasts (Temporal Fusion Transformer).'],
      ['Autoencoder', 'Learns what “normal” looks like, then flags the unusual. Desk use: abnormal OI build-up, volume spikes, risk alerts.']
    ]
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 3 · DEEP LEARNING',
    title: 'Neural networks, in one picture',
    variant: 'network-visual',
    leftText: [
      'Each node is a tiny analyst. It weighs a few inputs and passes an opinion to the next layer.',
      'Layers combine opinions into patterns that no single indicator shows.',
      'Training nudges millions of weights until predictions on history are least wrong (backpropagation).',
      'Use it where data is rich — ticks, order books, text. On a few thousand daily rows, simpler models often win.'
    ],
    inputs: ['Returns', 'RSI', 'OI change', 'India VIX', 'FII flow'],
    output: 'P(up) = 0.64'
  },
  {
    theme: 'dark',
    eyebrow: 'ALGORITHM 4 · DEEP LEARNING',
    title: 'LSTM volatility forecaster for options',
    variant: 'lstm',
    input: 'NIFTY returns, realised vol, India VIX, ATM IV, PCR',
    model: 'LSTM, 2 layers × 64 units, dropout 0.2',
    output: 'Forecast of next-5-day realised volatility',
    decision: [
      'IV well above forecast → options look rich → defined-risk selling, e.g., iron condor',
      'IV well below forecast → options look cheap → long straddle or strangle'
    ],
    code: ['model = Sequential([', '    LSTM(64, return_sequences=True),', '    Dropout(0.2),', '    LSTM(64),', '    Dense(1)', '])', '', 'model.fit(X_60d, y_vol5d, epochs=50)', 'edge = atm_iv - model.predict(X_today)'],
    note: 'Filters: skip RBI policy, Budget and results days; cap loss per trade.'
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 4 · GENERATIVE AI AND LLMS',
    title: 'What a large language model really is',
    variant: 'llm-facts',
    subtitle: 'An LLM predicts the next word, after reading a vast share of the world\'s text. That makes it a superb reader, writer and coder — not a price oracle.',
    cards: [
      ['Token', 'A word-piece. Cost and limits are counted in tokens.'],
      ['Context', 'How much it can read at once — a full annual report, or more.'],
      ['Prompt', 'Your instruction. Structure in, structure out.'],
      ['Temperature', '0 gives consistent answers; higher is more creative.'],
      ['Hallucination', 'Confident but wrong. Fix it with sources and checks.']
    ]
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 4 · PROMPT ENGINEERING',
    title: 'Six techniques for financial work',
    variant: 'prompt-table',
    rows: [
      ['Zero-shot', 'Instruction only, no examples', 'Quick summaries, clear-cut classification'],
      ['Few-shot', 'Adds 2–5 solved examples', 'Consistent labels, e.g., event type'],
      ['Step-by-step reasoning', 'Reasons before it answers', 'Multi-step analysis, scenario logic'],
      ['Structured output', 'Enforces a JSON schema', 'Anything that feeds a database or model'],
      ['Prompt chaining', 'Splits a job into linked prompts', 'Extract → verify → summarise long reports'],
      ['Self-check', 'A second prompt audits the first', 'Catching invented numbers early']
    ],
    notes: ['Version control', 'Test sets', 'Temperature 0', 'Re-test on upgrade']
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 4 · PROMPT ENGINEERING',
    title: 'Same model, very different answers',
    variant: 'prompt-compare',
    weak: 'Summarise this concall.',
    strong: ['ROLE: Banking analyst, Indian equities.', 'TASK: From the transcript, extract FY27 guidance: loan growth, NIM, credit cost.', 'RULES: Use only management\'s words.', 'If a figure is not stated, return null.', 'FORMAT: JSON {metric, value, quote}', 'TRANSCRIPT: "..."'],
    weakBullets: ['A different answer on every run', 'Rounds or skips key numbers', 'May invent guidance that was never given'],
    strongBullets: ['Same structure on every run', 'Every figure tied to a direct quote', 'Says “null” instead of guessing']
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 4 · PROMPT ENGINEERING',
    title: 'Anatomy of a production prompt',
    variant: 'prompt-parts',
    parts: [
      ['1 · Role', 'Who the model should act as. “Credit analyst covering PSU banks.”'],
      ['2 · Context', 'The data it must use — and only that. “Use only the Q2 FY27 transcript.”'],
      ['3 · Task', 'One clear, checkable job. “Extract NIM and slippage guidance.”'],
      ['4 · Constraints', 'What it must never do. “No forecasts. If missing, return null.”'],
      ['5 · Output format', 'A schema your code can parse. {"metric": "...", "value": "...", "quote": "..."}'],
      ['6 · Examples', 'One or two solved cases (few-shot). Input: ... Output: {...}']
    ]
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 4 · GENERATIVE AI',
    title: 'Where LLMs help the desk today',
    variant: 'three-cards',
    cards: [
      ['Read at scale', 'Summarise 200 con-call transcripts overnight; guidance, capex, margins.'],
      ['Event triage', 'Classify NSE announcements by type and materiality in seconds.'],
      ['Sentiment features', 'Turn news and filings into numeric scores your ML models can use.'],
      ['Code co-pilot', 'Write, explain and review Python for backtests and data pipelines.'],
      ['Regulation helper', 'Explain SEBI and exchange circulars; draft checklists for sign-off.'],
      ['Research drafts', 'Draft morning notes and post-trade reports from structured data.']
    ],
    note: 'Rule: LLMs read and write. Numbers, signals and orders come from tested code.'
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 5 · VECTOR DATABASES',
    title: 'Embeddings: search by meaning',
    variant: 'embeddings',
    bullets: [
      '01 An embedding model turns any text into a vector — a list of hundreds or thousands of numbers.',
      '02 Similar meaning lands close together, even with no shared words.',
      '03 A vector database stores millions of them and finds the nearest in milliseconds.'
    ],
    example: ['Query: “management expects margin pressure”', 'Finds: “input-cost inflation will weigh on EBITDA for two quarters”'],
    labels: ['Margin pressure', 'Order wins', 'Debt reduction', 'Your query']
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 5 · RETRIEVAL-AUGMENTED GENERATION',
    title: 'RAG: the LLM answers from your documents',
    variant: 'rag',
    indexing: [
      ['Documents', 'SEBI circulars, reports, concalls'],
      ['Chunk', 'Split into short passages'],
      ['Embed', 'Each passage becomes a vector'],
      ['Vector DB', 'Stored with source and date']
    ],
    answering: [
      ['Question', '“Which banks guided lower slippages?”'],
      ['Embed', 'Same model, same vector space'],
      ['Retrieve', 'Top-5 nearest passages'],
      ['LLM answer', 'Written from passages, with citations']
    ],
    banner: 'Why RAG: answers grounded in sources you trust, on private and current data — every claim traceable to a page.'
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 5 · MODEL CONTEXT PROTOCOL',
    title: 'MCP: one standard plug for every tool',
    variant: 'mcp',
    left: [
      ['Market data', 'Quotes, OHLC, option chain'],
      ['Backtest engine', 'Run a strategy, return metrics'],
      ['Broker API', 'Positions and P&L — read-only']
    ],
    right: [
      ['Risk database', 'Limits, exposure, margin'],
      ['Research store', 'RAG over filings and circulars'],
      ['News feed', 'Announcements and headlines']
    ],
    center: 'AI assistant or agent speaks MCP',
    banner: 'Build each tool once; any model or agent can use it. Orders stay behind human approval.'
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 6 · AGENTIC AI',
    title: 'What makes AI “agentic”',
    variant: 'agentic',
    flow: [
      ['1 PLAN', 'Break the goal into steps'],
      ['2 ACT', 'Call a tool via MCP'],
      ['3 OBSERVE', 'Read the result it got back'],
      ['4 REFLECT', 'Goal met? If not, loop again']
    ],
    goal: '“Find F&O stocks with unusual OI build-up; check results dates”',
    list: [
      ['Brain', 'An LLM that reasons and picks the next step'],
      ['Tools', 'Reached through MCP: data, backtests, documents'],
      ['Memory', 'Vector database plus a log of past steps'],
      ['Guardrails', 'Limits, permissions and human approval']
    ]
  },
  {
    theme: 'dark',
    eyebrow: 'ALGORITHM 5 · GENERATIVE AI',
    title: 'Announcement sentiment as a feature',
    variant: 'announcement-flow',
    flow: [
      ['1 Collect', 'NSE announcements and news, timestamped'],
      ['2 Score', 'LLM returns JSON: type, sentiment, materiality'],
      ['3 Validate', 'Schema check; humans audit a sample'],
      ['4 Aggregate', 'Per stock, per day, decay-weighted'],
      ['5 Feed', 'New features into the Algorithm 1 model']
    ],
    prompt: ['SYSTEM: Indian equity analyst. JSON only.', 'USER: Classify this NSE announcement:', '"announcement_text"', '{"type": "order_win", "sentiment": 0.7, "materiality": 4, "reason": "order ≈ 8% of revenue"}'],
    rules: ['Use announcement time, not processing time', 'Temperature 0; freeze the model version', 'Keep it only if it adds out-of-sample value', 'Log every prompt and output for audit']
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 6 · MULTI-AGENT SYSTEMS',
    title: 'A multi-agent research desk',
    variant: 'multi-agent',
    orchestrator: 'ORCHESTRATOR  Splits the task, gathers results, writes the trade proposal',
    agents: [
      ['Data', 'Pulls prices, OI and flows via MCP'],
      ['Analyst', 'Reads filings and concalls via RAG'],
      ['Quant', 'Runs backtests; reports Sharpe and drawdown'],
      ['Risk', 'Checks exposure, margin and loss limits'],
      ['Compliance', 'Checks the plan against SEBI and exchange rules']
    ],
    human: 'HUMAN  Portfolio manager reviews, edits and approves — or rejects',
    execution: 'EXECUTION Through the broker\'s approved algo channel, tagged with its Algo ID'
  }
];

function FooterLine() {
  return (
    <div className="mt-10 pt-6 text-[15px] font-medium uppercase tracking-[0.2em] text-[#1d334b] opacity-80">
      AI for the Trading Desk • ALPHAEDGE
    </div>
  );
}

function TwoColumnCompare({ slide }) {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm">
          <h3 className="text-[28px] font-semibold text-[#0f2438]">{slide.left.title}</h3>
          <div className="mt-4 rounded-[12px] bg-[#071d2f] p-4 text-[15px] leading-7 text-slate-100" style={{ whiteSpace: 'pre-wrap' }}>
            {slide.left.code.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <p className="mt-6 text-[17px] leading-8 text-[#0f2438]">{slide.left.body}</p>
        </div>

        <div className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm">
          <h3 className="text-[28px] font-semibold text-[#0f2438]">{slide.right.title}</h3>
          <div className="mt-4 rounded-[12px] bg-[#071d2f] p-4 text-[15px] leading-7 text-slate-100" style={{ whiteSpace: 'pre-wrap' }}>
            {slide.right.code.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <p className="mt-6 text-[17px] leading-8 text-[#0f2438]">{slide.right.body}</p>
        </div>
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-300 bg-[#e7e0d5] px-5 py-4 text-[18px] leading-8 text-[#0f2438]">
        {slide.banner}
      </div>
    </>
  );
}

function TableSlide({ slide }) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-slate-300 bg-[#f8f4ee]/40 shadow-sm">
      <div className="grid grid-cols-[1fr_1.2fr_1.1fr] bg-[#091f30] text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100">
        <div className="px-4 py-3">AI term</div>
        <div className="px-4 py-3">What it means</div>
        <div className="px-4 py-3">Your trading equivalent</div>
      </div>
      {slide.rows.map(([term, meaning, trading]) => (
        <div key={term} className="grid grid-cols-[1fr_1.2fr_1.1fr] border-t border-slate-300 bg-[#f4f1eb] text-[16px] text-[#0f2438]">
          <div className="px-4 py-4 font-medium">{term}</div>
          <div className="px-4 py-4">{meaning}</div>
          <div className="px-4 py-4">{trading}</div>
        </div>
      ))}
    </div>
  );
}

function PipelineSlide({ slide }) {
  return (
    <>
      <div className="mb-6 text-[15px] font-semibold uppercase tracking-[0.26em] text-[#c66e3a]">RESEARCH • build the model</div>
      <div className="grid gap-4 lg:grid-cols-5">
        {slide.research.map(([num, title, text]) => (
          <div key={num} className="rounded-[18px] border border-slate-300 bg-[#f6f1ea] p-4 shadow-sm">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c66e3a]">{num}</div>
            <h3 className="mt-3 text-[26px] font-semibold text-[#0f2438]">{title}</h3>
            <p className="mt-3 text-[16px] leading-7 text-[#0f2438]">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.26em] text-[#c66e3a]">PRODUCTION • earn the right to trade</div>
      <div className="grid gap-4 lg:grid-cols-5">
        {slide.production.map(([num, title, text]) => (
          <div key={num} className="rounded-[18px] border border-slate-300 bg-[#f6f1ea] p-4 shadow-sm">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c66e3a]">{num}</div>
            <h3 className="mt-3 text-[26px] font-semibold text-[#0f2438]">{title}</h3>
            <p className="mt-3 text-[16px] leading-7 text-[#0f2438]">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ArchitectureGrid({ slide }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {slide.cards.map(([title, text]) => (
        <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm">
          <h3 className="text-[30px] font-semibold text-[#0f2438]">{title}</h3>
          <p className="mt-4 text-[17px] leading-8 text-[#0f2438]">{text}</p>
        </div>
      ))}
    </div>
  );
}

function NetworkVisual({ slide }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="rounded-[18px] border border-slate-300 bg-[#f3efe8] p-4">
        <svg viewBox="0 0 700 300" className="h-[300px] w-full">
          <g>
            {['Returns', 'RSI', 'OI change', 'India VIX', 'FII flow'].map((label, index) => (
              <g key={label}>
                <text x="70" y={42 + index * 52} fill="#0f2438" fontSize="18" fontWeight="600">{label}</text>
                <circle cx="210" cy={35 + index * 52} r="10" fill={index % 2 === 0 ? '#1c6ad1' : '#1d3453'} />
              </g>
            ))}

            {Array.from({ length: 5 }).map((_, row) => (
              Array.from({ length: 6 }).map((__, col) => (
                <circle key={`${row}-${col}`} cx={280 + col * 52} cy={30 + row * 48} r="9" fill="#0f2438" fillOpacity="0.9" />
              ))
            ))}

            {Array.from({ length: 5 }).map((_, row) => (
              Array.from({ length: 6 }).map((__, col) => (
                <line key={`line-${row}-${col}`} x1={210} y1={35 + (row % 5) * 52} x2={280 + col * 52} y2={30 + row * 48} stroke="#a7b4be" strokeWidth="1" opacity="0.6" />
              ))
            ))}

            {[0,1,2,3,4,5].map((col) => (
              <line key={`line-2-${col}`} x1={280 + col * 52} y1={30} x2={456 + col * 2} y2={180} stroke="#a7b4be" strokeWidth="1" opacity="0.6" />
            ))}

            <circle cx={560} cy={140} r="18" fill="#ea7b39" />
            <text x="560" y="147" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">P</text>
            <text x="598" y="147" fill="#0f2438" fontSize="16" fontWeight="600">output</text>
          </g>
        </svg>
      </div>

      <div className="space-y-5 text-[17px] leading-8 text-[#0f2438]">
        {slide.leftText.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function LstmSlide({ slide }) {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <div className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#87a5d8]">Input • 60 days</div>
          <div className="mt-4 text-[17px] leading-8">{slide.input}</div>
        </div>
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <div className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#87a5d8]">Model</div>
          <div className="mt-4 text-[17px] leading-8">{slide.model}</div>
        </div>
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <div className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#87a5d8]">Output</div>
          <div className="mt-4 text-[17px] leading-8">{slide.output}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <h3 className="text-[32px] font-bold">Decision rule</h3>
          <div className="mt-6 space-y-5 text-[18px] leading-8">
            {slide.decision.map((line) => (
              <div key={line} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ea7b39]" />
                <span>{line}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-[15px] leading-7 text-slate-300">{slide.note}</div>
        </div>

        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <pre className="overflow-x-auto text-[13px] leading-7 text-slate-200">
            {slide.code.join('\n')}
          </pre>
        </div>
      </div>
    </>
  );
}

function LlmFacts({ slide }) {
  return (
    <>
      <div className="mb-8 text-[24px] italic text-[#0f2438] md:text-[38px]">
        {slide.subtitle}
      </div>
      <div className="grid gap-5 lg:grid-cols-5">
        {slide.cards.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[22px] font-semibold">{title}</div>
            <p className="mt-3 text-[15px] leading-7">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function PromptTable({ slide }) {
  return (
    <>
      <div className="overflow-hidden rounded-[16px] border border-slate-300 bg-[#f5f1eb] shadow-sm">
        <div className="grid grid-cols-[1fr_1.2fr_1.3fr] bg-[#0a1f30] text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100">
          <div className="px-4 py-3">Technique</div>
          <div className="px-4 py-3">What it does</div>
          <div className="px-4 py-3">Use it on the desk for</div>
        </div>
        {slide.rows.map(([name, what, use]) => (
          <div key={name} className="grid grid-cols-[1fr_1.2fr_1.3fr] border-t border-slate-300 bg-[#f5f1eb] text-[16px] text-[#0f2438]">
            <div className="px-4 py-4 font-medium">{name}</div>
            <div className="px-4 py-4">{what}</div>
            <div className="px-4 py-4">{use}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-[18px] font-semibold uppercase tracking-[0.25em] text-[#c66e3a]">PROMPTS ARE CODE</div>
      <div className="mt-5 grid gap-5 lg:grid-cols-4">
        {slide.notes.map((item) => (
          <div key={item} className="rounded-[18px] border border-slate-600 bg-[#091f30] p-5 text-[18px] leading-8 text-slate-100">{item}</div>
        ))}
      </div>
    </>
  );
}

function PromptCompare({ slide }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[18px] border border-slate-600 bg-[#091f30] p-5 text-slate-100">
        <h3 className="text-[28px] font-semibold">Weak prompt</h3>
        <div className="mt-4 rounded-[12px] bg-[#071d2f] p-4 text-[22px]">{slide.weak}</div>
        <ul className="mt-6 space-y-3 text-[17px] leading-8 text-slate-100">
          {slide.weakBullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-[18px] border border-slate-600 bg-[#091f30] p-5 text-slate-100">
        <h3 className="text-[28px] font-semibold">Engineered prompt</h3>
        <pre className="mt-4 rounded-[12px] bg-[#071d2f] p-4 text-[16px] leading-7 text-slate-100">
          {slide.strong.join('\n')}
        </pre>
        <ul className="mt-6 space-y-3 text-[17px] leading-8 text-slate-100">
          {slide.strongBullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PromptParts({ slide }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {slide.parts.map(([label, text]) => (
        <div key={label} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm text-[#0f2438]">
          <div className="text-[32px] font-semibold text-[#0f2438]">{label}</div>
          <p className="mt-4 text-[16px] leading-8">{text}</p>
        </div>
      ))}
    </div>
  );
}

function ThreeCards({ slide }) {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {slide.cards.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm text-[#0f2438]">
            <h3 className="text-[30px] font-semibold">{title}</h3>
            <p className="mt-4 text-[17px] leading-8">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-600 bg-[#091f30] px-5 py-4 text-[18px] leading-8 text-slate-100">
        <span className="font-semibold text-[#ea7b39]">Rule:</span> {slide.note}
      </div>
    </>
  );
}

function EmbeddingsSlide({ slide }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div className="mb-6 space-y-4 text-[18px] leading-8 text-[#0f2438]">
          {slide.bullets.map((line) => (
            <div key={line} className="flex gap-3">
              <span className="min-w-[2.2rem] text-right font-semibold text-[#ea7b39]">{line.split(' ')[0]}</span>
              <span>{line.replace(/^\d+\s+/, '')}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 text-[18px] leading-8 text-[#0f2438]">
          <div className="text-[14px] font-semibold uppercase tracking-[0.25em] text-[#ea7b39]">Example</div>
          <div className="mt-3 font-semibold">Query: “management expects margin pressure”</div>
          <div className="mt-2">Finds: “input-cost inflation will weigh on EBITDA for two quarters”</div>
        </div>
      </div>

      <div className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-5 shadow-sm">
        <svg viewBox="0 0 440 280" className="h-[260px] w-full">
          <g>
            {[120, 150, 170, 190, 210].map((x, i) => (
              <circle key={`orange-${i}`} cx={x} cy={110 + (i % 2) * 30} r="12" fill="#ea7b39" opacity="0.9" />
            ))}
            {[260, 290, 320, 350, 380].map((x, i) => (
              <circle key={`blue-${i}`} cx={x} cy={90 + i * 18} r="12" fill="#1d5fa5" opacity="0.9" />
            ))}
            <circle cx={220} cy={185} r="11" fill="#a9b4bf" />
            <circle cx={285} cy={185} r="11" fill="#a9b4bf" />
            <circle cx={255} cy={205} r="11" fill="#a9b4bf" />
            <circle cx={205} cy={215} r="11" fill="#a9b4bf" />
            <circle cx={335} cy={215} r="11" fill="#a9b4bf" />
            <circle cx={300} cy={145} r="16" fill="none" stroke="#0f2438" strokeWidth="3" />
          </g>
        </svg>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[16px] text-[#0f2438]">
          <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 rounded-full bg-[#ea7b39]" />Margin pressure</span>
          <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 rounded-full bg-[#1d5fa5]" />Order wins</span>
          <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 rounded-full bg-[#a9b4bf]" />Debt reduction</span>
          <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-[#0f2438]" />Your query</span>
        </div>
      </div>
    </div>
  );
}

function RagSlide({ slide }) {
  return (
    <>
      <div className="mb-6 text-[15px] font-semibold uppercase tracking-[0.26em] text-[#c66e3a]">INDEXING • once, then daily</div>
      <div className="grid gap-4 lg:grid-cols-4">
        {slide.indexing.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[22px] font-semibold">{title}</div>
            <p className="mt-3 text-[16px] leading-7">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.26em] text-[#c66e3a]">ANSWERING • every question</div>
      <div className="grid gap-4 lg:grid-cols-4">
        {slide.answering.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[22px] font-semibold">{title}</div>
            <p className="mt-3 text-[16px] leading-7">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[18px] border border-slate-300 bg-[#e8e0d7] px-5 py-4 text-[18px] leading-8 text-[#0f2438]">
        {slide.banner}
      </div>
    </>
  );
}

function McpSlide({ slide }) {
  return (
    <>
      <div className="mb-4 text-[18px] italic text-slate-100">An open standard that lets any AI app connect to your data and tools — think of it as USB-C for AI.</div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr_1fr] lg:items-center">
        <div className="space-y-4">
          {slide.left.map(([title, text]) => (
            <div key={title} className="rounded-[18px] border border-slate-600 bg-[#132d43] p-4 text-slate-100">
              <div className="text-[24px] font-semibold">{title}</div>
              <div className="mt-2 text-[16px] leading-7 text-slate-200">{text}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[18px] bg-[#ea7b39] p-5 text-center text-[#0a1f30] shadow-lg">
          <div className="text-[24px] font-semibold">AI assistant</div>
          <div className="text-[24px] font-semibold">or agent</div>
          <div className="mt-3 text-[18px] font-medium">speaks MCP</div>
        </div>

        <div className="space-y-4">
          {slide.right.map(([title, text]) => (
            <div key={title} className="rounded-[18px] border border-slate-600 bg-[#132d43] p-4 text-slate-100">
              <div className="text-[24px] font-semibold">{title}</div>
              <div className="mt-2 text-[16px] leading-7 text-slate-200">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-300 bg-[#e8e0d7] px-5 py-4 text-[20px] leading-8 text-[#0f2438]">
        {slide.banner}
      </div>
    </>
  );
}

function AgenticSlide({ slide }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 lg:grid-cols-2">
        {slide.flow.map(([tag, text]) => (
          <div key={tag} className="rounded-[18px] border border-slate-400 bg-[#f4f1eb] p-5 shadow-sm text-[#0f2438]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1d5fa5]">{tag}</div>
            <div className="mt-3 text-[18px] leading-8">{text}</div>
          </div>
        ))}
        <div className="rounded-[18px] bg-[#091f30] p-5 text-slate-100 lg:col-span-2">
          <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#ea7b39]">Goal</div>
          <div className="mt-4 text-[19px] leading-8">{slide.goal}</div>
        </div>
      </div>

      <div className="space-y-5 text-[#0f2438]">
        {slide.list.map(([title, text]) => (
          <div key={title} className="flex gap-3 items-start text-[18px] leading-8">
            <span className="mt-2 text-[#ea7b39]">✦</span>
            <div>
              <div className="font-semibold">{title}</div>
              <div>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnnouncementFlow({ slide }) {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-5">
        {slide.flow.map(([label, text]) => (
          <div key={label} className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-4 text-slate-100">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#87a5d8]">{label}</div>
            <div className="mt-3 text-[18px] leading-8">{text}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <pre className="overflow-x-auto text-[15px] leading-8">
            {slide.prompt.join('\n')}
          </pre>
        </div>
        <div className="rounded-[18px] border border-slate-600 bg-[#112b3d] p-5 text-slate-100">
          <div className="text-[30px] font-bold text-slate-100">Rules that keep it honest</div>
          <ul className="mt-4 space-y-4 text-[18px] leading-8">
            {slide.rules.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function MultiAgentSlide({ slide }) {
  return (
    <>
      <div className="rounded-[18px] border border-slate-600 bg-[#091f30] px-5 py-4 text-[18px] font-semibold text-slate-100">
        {slide.orchestrator}
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-5">
        {slide.agents.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f4f1eb] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[24px] font-semibold">{title}</div>
            <div className="mt-3 text-[16px] leading-7">{text}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-600 bg-[#ea7b39] px-5 py-4 text-[18px] font-semibold text-[#0f2438]">
        {slide.human}
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-400 bg-transparent px-5 py-4 text-[18px] leading-8 text-[#0f2438]">
        {slide.execution}
      </div>
    </>
  );
}

function SlideRenderer({ slide }) {
  if (slide.variant === 'two-column-compare') return <TwoColumnCompare slide={slide} />;
  if (slide.variant === 'table') return <TableSlide slide={slide} />;
  if (slide.variant === 'pipeline') return <PipelineSlide slide={slide} />;
  if (slide.variant === 'architecture-grid') return <ArchitectureGrid slide={slide} />;
  if (slide.variant === 'network-visual') return <NetworkVisual slide={slide} />;
  if (slide.variant === 'lstm') return <LstmSlide slide={slide} />;
  if (slide.variant === 'llm-facts') return <LlmFacts slide={slide} />;
  if (slide.variant === 'prompt-table') return <PromptTable slide={slide} />;
  if (slide.variant === 'prompt-compare') return <PromptCompare slide={slide} />;
  if (slide.variant === 'prompt-parts') return <PromptParts slide={slide} />;
  if (slide.variant === 'three-cards') return <ThreeCards slide={slide} />;
  if (slide.variant === 'embeddings') return <EmbeddingsSlide slide={slide} />;
  if (slide.variant === 'rag') return <RagSlide slide={slide} />;
  if (slide.variant === 'mcp') return <McpSlide slide={slide} />;
  if (slide.variant === 'agentic') return <AgenticSlide slide={slide} />;
  if (slide.variant === 'announcement-flow') return <AnnouncementFlow slide={slide} />;
  if (slide.variant === 'multi-agent') return <MultiAgentSlide slide={slide} />;
  return null;
}

export default function AIandTrading() {
  return (
    <Layout title="AI & Trading | AlphaEdge" description="AI and trading systems, reference-based deck on rule-based learning, ML, LLMs, embeddings, RAG, MCP, and agentic AI.">
      <div className="bg-[#f1eee7]">
        {deck.map((slide, index) => {
          const dark = slide.theme === 'dark';

          return (
            <section
              key={`${slide.title}-${index}`}
              className={`${dark ? 'bg-[#071d2f]' : 'bg-[#f3efe7]'} px-4 py-8 sm:px-6 lg:px-8`}
            >
              <div className="mx-auto max-w-[1500px]">
                <div className={`mb-6 text-[14px] font-semibold uppercase tracking-[0.28em] ${dark ? 'text-[#ea7b39]' : 'text-[#c66e3a]'}`}>
                  {slide.eyebrow}
                </div>

                <h1 className={`mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] ${dark ? 'text-white' : 'text-[#0f2438]'}`}>
                  {slide.title}
                </h1>

                <div className={dark ? 'text-slate-100' : 'text-[#0f2438]'}>
                  <SlideRenderer slide={slide} />
                </div>

                <FooterLine />
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}