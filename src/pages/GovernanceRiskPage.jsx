import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import { ChartCard, useChart } from '../components/Ai900Charts';

/* ------------------------------------------------------------------ */
/* Shared bits (same tokens as ui.jsx, no new colours)                 */
/* ------------------------------------------------------------------ */

const C = { accent: 'var(--accent)', amber: '#f59e0b' };

/* A titled block inside a section (one per original slide). */
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

function BulletList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
          <Check />
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CardGrid({ cards, cols = 'md:grid-cols-2' }) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {cards.map(([title, text], i) => (
        <Reveal key={title} delay={(i % 3) * 100} className={T.card}>
          <div className="mb-5 h-1 w-10 rounded-full bg-[#ef4444]" />
          <h4 className={T.h3}>{title}</h4>
          <p className={T.body}>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* Numbered cards, because the content is a real sequence. */
function FlowRow({ label, steps, start = 1, cols = 'xl:grid-cols-5' }) {
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
          delay={(i % 3) * 60}
          className="grid grid-cols-1 gap-3 border-b border-[var(--border-soft)] px-4 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-4 sm:px-6"
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
/* Illustration                                                        */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const whyNow = [
  ['1 Apr 2026', 'SEBI’s framework for safer retail algo trading became fully applicable to all stock brokers.'],
  ['Algo ID', 'Every algo order carries an exchange-issued tag. Above 10 orders per second per exchange, the strategy must be registered.'],
  ['AI rules', 'SEBI has consulted on responsible AI/ML use and signalled human oversight and kill switches.'],
];
const sources =
  'Sources: SEBI circular, 30 Sep 2025 · NSE implementation standards, 5 May 2025 · SEBI AI/ML consultation, 20 Jun 2025';

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

const backtestLies = [
  ['Look-ahead bias', 'Using today’s close to trade today’s open, or results data before the announcement time.'],
  ['Survivorship bias', 'Testing only on today’s NIFTY 50 members ignores the stocks that were dropped along the way.'],
  ['Data snooping', 'Try 500 parameter sets and keep the best one: some will win by luck alone.'],
  ['Ignoring costs', 'STT, exchange charges, GST, stamp duty and slippage can erase a thin intraday edge.'],
];

const metrics = [
  ['Sharpe ratio', 'Return per unit of risk', '> 1, net'],
  ['Sortino ratio', 'Return ÷ downside risk', '> 1.5, net'],
  ['Max drawdown', 'Worst fall from a peak', 'Survivable'],
  ['Hit rate', 'Share of winning trades', 'Read with R:R'],
  ['Profit factor', 'Profits ÷ losses', '> 1.3'],
  ['Calmar ratio', 'Yearly return ÷ max drawdown', '> 1'],
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

const agents = [
  ['Data', 'Pulls prices, OI and flows via MCP'],
  ['Analyst', 'Reads filings and concalls via RAG'],
  ['Quant', 'Runs backtests; reports Sharpe and drawdown'],
  ['Risk', 'Checks exposure, margin and loss limits'],
  ['Compliance', 'Checks the plan against SEBI and exchange rules'],
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

const rules = [
  'Retail algo framework fully applicable to all brokers since 1 April 2026',
  'Every algo order carries an exchange-issued Algo ID',
  'Above 10 orders per second per exchange, the strategy must be registered',
  'API access only through broker-supervised, static-IP-whitelisted set-ups',
  'SEBI’s AI/ML principles: governance, disclosure, testing, fairness, data privacy',
];
const goodDesks = [
  'Kill switch, tested regularly',
  'Hard limits on position, loss and order rate',
  'Human approval for any AI-proposed order',
  'Model register: owner, version, data, last test',
  'Audit log of prompts, tool calls and outputs',
  'Drift monitoring with automatic re-risking',
];

const index = [
  ['why-now', 'Why now'],
  ['research', 'Research discipline'],
  ['agents', 'Tools and agents'],
  ['governance', 'Guardrails'],
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function GovernanceRiskPage() {
  return (
    <Layout
      title="Governance & Risk | AlphaEdge"
      description="Governance and risk guardrails for AI on the trading desk: the 2026 SEBI algo framework, backtest discipline, tool and agent design, and the controls good desks add."
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <Reveal as="p" className={T.eyebrow}>
          Governance and risk
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
        >
          Guardrails for AI on the trading desk
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          What changed for Indian algo trading in 2026, how to prove an edge before risking money, and the controls
          that keep tools and agents inside the rules.
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

      {/* ============================ WHY NOW ============================ */}
      <Section alt>
        <div id="why-now" className="scroll-mt-24">
          <SectionHeader eyebrow="Why now" title="The Indian algo desk changed in 2026" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {whyNow.map(([title, text], i) => (
            <Reveal key={title} delay={i * 120} className={T.cardAlt}>
              <p className="text-3xl font-black tracking-tight text-[var(--accent-strong)] sm:text-4xl">{title}</p>
              <p className={T.body}>{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className={`${T.muted} mt-6 leading-6`}>
          {sources}
        </Reveal>
      </Section>

      {/* ============================ RESEARCH DISCIPLINE ============================ */}
      <Section>
        <div id="research" className="scroll-mt-24">
          <SectionHeader eyebrow="Before any model" title="Prove the edge before you trade it" />
        </div>

        <Block first title="The trading ML pipeline, end to end">
          <div className="space-y-10">
            <FlowRow label="Research: build the model" steps={research} />
            <FlowRow label="Production: earn the right to trade" steps={production} start={6} />
          </div>
        </Block>

        <Block title="Four ways a great backtest lies to you">
          <CardGrid cards={backtestLies} />
        </Block>

        <Block title="Proving the edge: walk-forward testing">
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
            <DataTable heads={['Metric', 'Plain meaning', 'Rule of thumb']} rows={metrics} />
          </div>
        </Block>
      </Section>

      {/* ============================ TOOLS AND AGENTS ============================ */}
      <Section alt>
        <div id="agents" className="scroll-mt-24">
          <SectionHeader eyebrow="Modules 5 and 6 · MCP and agents" title="Connected tools, bounded agents" />
        </div>

        <Block
          first
          title="MCP: one standard plug for every tool"
          intro="An open standard that lets any AI app connect to your data and tools. Think of it as USB-C for AI."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              {mcpLeft.map(([title, text], i) => (
                <Reveal key={title} delay={i * 100} className={`${T.cardAlt} !p-5`}>
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
                <Reveal key={title} delay={i * 100} className={`${T.cardAlt} !p-5`}>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{title}</h4>
                  <p className={T.small}>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Banner>Build each tool once; any model or agent can use it. Orders stay behind human approval.</Banner>
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
                <Reveal key={title} delay={(i % 5) * 80} className={`${T.cardAlt} !p-5`}>
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

        <Block title="What makes AI “agentic”">
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
      </Section>

      {/* ============================ GOVERNANCE ============================ */}
      <Section>
        <div id="governance" className="scroll-mt-24">
          <SectionHeader eyebrow="Governance" title="Guardrails for AI on the trading desk" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className={T.card}>
            <h3 className={T.h3}>The rules, as of October 2026</h3>
            <ul className="mt-6 space-y-5">
              {rules.map((rule) => (
                <li
                  key={rule}
                  className="border-l-2 border-[var(--accent)] pl-4 text-base leading-7 text-[var(--text-secondary)]"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className={T.cardAlt}>
            <h3 className={T.h3}>What good desks add</h3>
            <div className="mt-6">
              <BulletList items={goodDesks} />
            </div>
          </Reveal>
        </div>
        <Banner label="Before any deployment">
          Regulations change. Check the latest SEBI and NSE circulars first.
        </Banner>
      </Section>
    </Layout>
  );
}