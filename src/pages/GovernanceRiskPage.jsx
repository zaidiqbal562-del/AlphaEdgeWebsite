import Layout from '../layout/Layout';

const slides = [
  {
    theme: 'dark',
    eyebrow: 'WHY NOW',
    title: 'The Indian algo desk changed in 2026',
    variant: 'threeCards',
    cards: [
      {
        title: '1 Apr 2026',
        text: 'SEBI\'s framework for safer retail algo trading became fully applicable to all stock brokers.'
      },
      {
        title: 'Algo ID',
        text: 'Every algo order carries an exchange-issued tag. Above 10 orders per second per exchange, the strategy must be registered.'
      },
      {
        title: 'AI rules',
        text: 'SEBI has consulted on responsible AI/ML use and signalled human oversight and kill switches.'
      }
    ],
    footer: 'Sources: SEBI circular, 30 Sep 2025 • NSE implementation standards, 5 May 2025 • SEBI AI/ML consultation, 20 Jun 2025',
    accent: 'text-[#ea7b39]'
  },
  {
    theme: 'light',
    eyebrow: 'THE MENTAL MODEL',
    title: 'The trading ML pipeline, end to end',
    variant: 'pipeline',
    head: [
      ['RESEARCH • build the model', '01', 'Collect', 'Bhavcopy, ticks, option chain, news'],
      ['RESEARCH • build the model', '02', 'Clean', 'Splits, bonuses, holidays, gaps'],
      ['RESEARCH • build the model', '03', 'Features', 'Returns, RSI, OI, VIX, flows'],
      ['RESEARCH • build the model', '04', 'Label', 'What to predict, over what horizon'],
      ['RESEARCH • build the model', '05', 'Train', 'Fit on the past only']
    ],
    production: [
      ['PRODUCTION • earn the right to trade', '06', 'Walk-forward', 'Retrain and test, window by window'],
      ['PRODUCTION • earn the right to trade', '07', 'Costs', 'STT, brokerage, GST, stamp, slippage'],
      ['PRODUCTION • earn the right to trade', '08', 'Paper trade', 'Live data, no money at risk'],
      ['PRODUCTION • earn the right to trade', '09', 'Go live', 'Small size, hard limits, kill switch'],
      ['PRODUCTION • earn the right to trade', '10', 'Monitor', 'Drift, decay, retrain triggers']
    ]
  },
  {
    theme: 'dark',
    eyebrow: 'BEFORE ANY MODEL',
    title: 'Four ways a great backtest lies to you',
    variant: 'fourCards',
    cards: [
      {
        title: 'Look-ahead bias',
        text: 'Using today\'s close to trade today\'s open, or results data before the announcement time.'
      },
      {
        title: 'Survivorship bias',
        text: 'Testing only on today\'s NIFTY 50 members ignores the stocks that were dropped along the way.'
      },
      {
        title: 'Data snooping',
        text: 'Try 500 parameter sets and keep the best one — some will win by luck alone.'
      },
      {
        title: 'Ignoring costs',
        text: 'STT, exchange charges, GST, stamp duty and slippage can erase a thin intraday edge.'
      }
    ]
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 2 • VALIDATION',
    title: 'Proving the edge: walk-forward testing',
    variant: 'walkForward',
    train: ['Fold 1', 'Fold 2', 'Fold 3', 'Fold 4', 'Fold 5'],
    table: [
      ['Sharpe ratio', 'Return per unit of risk', '> 1, net'],
      ['Sortino ratio', 'Return ÷ downside risk', '> 1.5, net'],
      ['Max drawdown', 'Worst fall from a peak', 'Survivable'],
      ['Hit rate', 'Share of winning trades', 'Read with R:R'],
      ['Profit factor', 'Profits ÷ losses', '> 1.3'],
      ['Calmar ratio', 'Yearly return ÷ max DD', '> 1']
    ],
    note: 'The model never sees the test months while it learns. Then the window rolls forward — exactly as it would live.'
  },
  {
    theme: 'dark',
    eyebrow: 'MODULE 5 • MODEL CONTEXT PROTOCOL',
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
    note: 'Build each tool once; any model or agent can use it. Orders stay behind human approval.'
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 6 • MULTI-AGENT SYSTEMS',
    title: 'A multi-agent research desk',
    variant: 'multiAgent',
    orchestrator: 'ORCHESTRATOR Splits the task, gathers results, writes the trade proposal',
    agents: [
      ['Data', 'Pulls prices, OI and flows via MCP'],
      ['Analyst', 'Reads filings and concalls via RAG'],
      ['Quant', 'Runs backtests; reports Sharpe and drawdown'],
      ['Risk', 'Checks exposure, margin and loss limits'],
      ['Compliance', 'Checks the plan against SEBI and exchange rules']
    ],
    human: 'HUMAN Portfolio manager reviews, edits and approves — or rejects',
    execution: 'EXECUTION Through the broker\'s approved algo channel, tagged with its Algo ID'
  },
  {
    theme: 'light',
    eyebrow: 'MODULE 6 • AGENTIC AI',
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
    theme: 'light',
    eyebrow: 'Governance',
    title: 'Guardrails for AI on the trading desk',
    variant: 'governance',
    rules: [
      'Retail algo framework fully applicable to all brokers since 1 April 2026',
      'Every algo order carries an exchange-issued Algo ID',
      'Above 10 orders per second per exchange, the strategy must be registered',
      'API access only through broker-supervised, static-IP-whitelisted set-ups',
      'SEBI’s AI/ML principles: governance, disclosure, testing, fairness, data privacy'
    ],
    add: [
      'Kill switch, tested regularly',
      'Hard limits on position, loss and order rate',
      'Human approval for any AI-proposed order',
      'Model register: owner, version, data, last test',
      'Audit log of prompts, tool calls and outputs',
      'Drift monitoring with automatic re-risking'
    ],
    note: 'Regulations change — check the latest SEBI and NSE circulars before any deployment.'
  }
];

function FooterLine() {
  return (
    <div className="mt-10 pt-6 text-[15px] font-medium uppercase tracking-[0.22em] text-[#1d334b] opacity-80">
      AI for the Trading Desk • ALPHAEDGE
    </div>
  );
}

function ThreeCardSlide({ slide }) {
  return (
    <div className="rounded-[20px] border border-[#0f2438]/10 bg-[#091f30] p-4 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-3">
        {slide.cards.map((card) => (
          <div key={card.title} className="rounded-[18px] border border-slate-600 bg-[#122d41] p-5 text-slate-100">
            <h3 className="text-[clamp(2rem,2.7vw,4rem)] font-black leading-none tracking-[-0.06em] text-[#ea7b39]">{card.title}</h3>
            <p className="mt-4 text-[17px] leading-8 text-slate-100">{card.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 text-[16px] leading-8 text-slate-200">{slide.footer}</div>
    </div>
  );
}

function PipelineSlide({ slide }) {
  return (
    <>
      <div className="mb-6 text-[15px] font-semibold uppercase tracking-[0.2em] text-[#c66e3a]">RESEARCH • build the model</div>
      <div className="grid gap-4 lg:grid-cols-5">
        {slide.head.map(([label, num, title, text]) => (
          <div key={num} className="rounded-[18px] border border-slate-300 bg-[#f5f0ea] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c66e3a]">{num}</div>
            <h3 className="mt-3 text-[26px] font-semibold">{title}</h3>
            <p className="mt-3 text-[16px] leading-7">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.2em] text-[#c66e3a]">PRODUCTION • earn the right to trade</div>
      <div className="grid gap-4 lg:grid-cols-5">
        {slide.production.map(([label, num, title, text]) => (
          <div key={num} className="rounded-[18px] border border-slate-300 bg-[#f5f0ea] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c66e3a]">{num}</div>
            <h3 className="mt-3 text-[26px] font-semibold">{title}</h3>
            <p className="mt-3 text-[16px] leading-7">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function FourCardSlide({ slide }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {slide.cards.map((card) => (
        <div key={card.title} className="rounded-[20px] border border-slate-700 bg-[#091f30] p-5 text-slate-100 shadow-sm">
          <h3 className="text-[32px] font-semibold text-[#f5f0ea]">{card.title}</h3>
          <p className="mt-4 text-[18px] leading-8 text-slate-100">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

function WalkForwardSlide({ slide }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <div className="mb-6 flex items-center gap-3 text-[18px] font-medium text-[#0f2438]">
          <span className="inline-block h-4 w-4 rounded-[4px] bg-[#1e5fa5]" /> Train
          <span className="ml-4 inline-block h-4 w-4 rounded-[4px] bg-[#ea7b39]" /> Test
        </div>
        <div className="space-y-4">
          {slide.train.map((fold, idx) => (
            <div key={fold} className="flex items-center gap-4 text-[18px] text-[#0f2438]">
              <span className="w-12">{fold}</span>
              <div className="relative h-10 flex-1 rounded-sm bg-[#dfe3e7]">
                <div className="absolute inset-y-0 left-0 rounded-sm bg-[#1e5fa5]" style={{ width: `${80 - idx * 5}%`, opacity: 0.95 }} />
                <div className="absolute inset-y-0 right-0 rounded-sm bg-[#ea7b39]" style={{ width: `${28 - idx * 3}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-[16px] leading-8 text-[#0f2438]">
          {slide.note}
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-slate-300 bg-[#f5f0ea] shadow-sm">
        <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#091f30] text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-100">
          <div className="px-4 py-3">Metric</div>
          <div className="px-4 py-3">Plain meaning</div>
          <div className="px-4 py-3">Rule of thumb</div>
        </div>
        {slide.table.map(([metric, meaning, rule]) => (
          <div key={metric} className="grid grid-cols-[1fr_1fr_1fr] border-t border-slate-300 text-[15px] text-[#0f2438]">
            <div className="px-4 py-3 font-medium">{metric}</div>
            <div className="px-4 py-3">{meaning}</div>
            <div className="px-4 py-3">{rule}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function McpSlide({ slide }) {
  return (
    <>
      <div className="mb-5 text-[18px] italic text-slate-100">An open standard that lets any AI app connect to your data and tools — think of it as USB-C for AI.</div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr_1fr] lg:items-center">
        <div className="space-y-4">
          {slide.left.map(([title, text]) => (
            <div key={title} className="rounded-[18px] border border-slate-600 bg-[#122d41] p-4 text-slate-100">
              <div className="text-[24px] font-semibold">{title}</div>
              <div className="mt-2 text-[16px] leading-7 text-slate-200">{text}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[18px] bg-[#ea7b39] p-5 text-center text-[#091f30] shadow-[0_20px_40px_rgba(234,123,57,0.25)]">
          <div className="text-[18px] font-medium">⊙</div>
          <div className="mt-3 text-[30px] font-bold leading-none">AI assistant</div>
          <div className="mt-2 text-[30px] font-bold leading-none">or agent</div>
          <div className="mt-3 text-[18px] font-semibold">speaks MCP</div>
        </div>

        <div className="space-y-4">
          {slide.right.map(([title, text]) => (
            <div key={title} className="rounded-[18px] border border-slate-600 bg-[#122d41] p-4 text-slate-100">
              <div className="text-[24px] font-semibold">{title}</div>
              <div className="mt-2 text-[16px] leading-7 text-slate-200">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-[18px] leading-8 text-slate-100">{slide.note}</div>
    </>
  );
}

function MultiAgentSlide({ slide }) {
  return (
    <>
      <div className="rounded-[18px] border border-slate-600 bg-[#091f30] px-5 py-4 text-[18px] font-semibold text-slate-100">
        {slide.orchestrator}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        {slide.agents.map(([title, text]) => (
          <div key={title} className="rounded-[18px] border border-slate-300 bg-[#f5f0ea] p-4 shadow-sm text-[#0f2438]">
            <div className="text-[24px] font-semibold">{title}</div>
            <div className="mt-3 text-[16px] leading-7">{text}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-600 bg-[#ea7b39] px-5 py-4 text-[18px] font-semibold text-[#091f30]">
        {slide.human}
      </div>
      <div className="mt-8 rounded-[18px] border border-slate-400 bg-transparent px-5 py-4 text-[18px] leading-8 text-[#0f2438]">
        {slide.execution}
      </div>
    </>
  );
}

function AgenticSlide({ slide }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-4 lg:grid-cols-2">
        {slide.flow.map(([label, text]) => (
          <div key={label} className="rounded-[18px] border border-slate-400 bg-[#f5f0ea] p-4 text-[#0f2438] shadow-sm">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1d5fa5]">{label}</div>
            <div className="mt-3 text-[18px] leading-8">{text}</div>
          </div>
        ))}
        <div className="rounded-[18px] bg-[#091f30] p-5 text-slate-100 lg:col-span-2">
          <div className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#ea7b39]">Goal</div>
          <div className="mt-4 text-[20px] leading-8">{slide.goal}</div>
        </div>
      </div>
      <div className="space-y-5 text-[#0f2438]">
        {slide.list.map(([title, text]) => (
          <div key={title} className="flex items-start gap-3 text-[18px] leading-8">
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

function GovernanceSlide({ slide }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-[18px] border border-slate-300 bg-[#f5f0ea] p-6 shadow-sm">
        <h2 className="text-[28px] font-semibold text-[#0f2438]">The rules, as of October 2026</h2>
        <div className="mt-7 space-y-6">
          {slide.rules.map((rule) => (
            <div key={rule} className="flex gap-4">
              <div className="mt-1 h-9 w-[3px] bg-[#c66e3a]" />
              <p className="text-[17px] leading-8 text-[#0f2438]">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[18px] border border-slate-700 bg-[#091f30] p-6 shadow-sm">
        <h2 className="text-[28px] font-semibold text-white">What good desks add</h2>
        <ul className="mt-7 space-y-5 text-[17px] leading-8 text-slate-100">
          {slide.add.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 text-[#ea7b39]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RenderSlide({ slide }) {
  if (slide.variant === 'threeCards') return <ThreeCardSlide slide={slide} />;
  if (slide.variant === 'pipeline') return <PipelineSlide slide={slide} />;
  if (slide.variant === 'fourCards') return <FourCardSlide slide={slide} />;
  if (slide.variant === 'walkForward') return <WalkForwardSlide slide={slide} />;
  if (slide.variant === 'mcp') return <McpSlide slide={slide} />;
  if (slide.variant === 'multiAgent') return <MultiAgentSlide slide={slide} />;
  if (slide.variant === 'agentic') return <AgenticSlide slide={slide} />;
  if (slide.variant === 'governance') return <GovernanceSlide slide={slide} />;
  return null;
}

export default function GovernanceRiskPage() {
  return (
    <Layout title="Governance & Risk | AlphaEdge" description="Governance and risk guardrails for AI on the trading desk.">
      <div className="bg-[#f0eee7]">
        {slides.map((slide, index) => {
          const dark = slide.theme === 'dark';
          const isDarkSlide = dark;

          return (
            <section
              key={`${slide.title}-${index}`}
              className={`${isDarkSlide ? 'bg-[#071d2f]' : 'bg-[#f0eee7]'} px-4 py-8 sm:px-6 lg:px-8`}
            >
              <div className="mx-auto max-w-[1500px]">
                <div className={`mb-6 text-[14px] font-semibold uppercase tracking-[0.28em] ${dark ? 'text-[#ea7b39]' : 'text-[#c66e3a]'}`}>
                  {slide.eyebrow}
                </div>

                <h1 className={`mb-8 text-[clamp(2.8rem,4vw,6rem)] font-black leading-[0.95] tracking-[-0.06em] ${dark ? 'text-white' : 'text-[#0f2438]'}`}>
                  {slide.title}
                </h1>

                <div className={dark ? 'text-slate-100' : 'text-[#0f2438]'}>
                  <RenderSlide slide={slide} />
                </div>

                {slide.note && (
                  <div className={`mt-10 text-[clamp(1.4rem,2vw,2.4rem)] font-medium italic tracking-[-0.04em] ${dark ? 'text-slate-100' : 'text-[#0f2438]'}`}>
                    {slide.note}
                  </div>
                )}

                <FooterLine />
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
