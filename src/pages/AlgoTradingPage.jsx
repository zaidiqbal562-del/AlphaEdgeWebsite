import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

function NumberedList({ items }) {
  return (
    <div className="space-y-5">
      {items.map(([number, text], index) => (
        <div key={index} className="flex items-start gap-4 text-[15px] leading-8 text-slate-100 sm:text-[17px] sm:leading-9">
          <span className="mt-[2px] inline-flex min-w-[2.2rem] items-center justify-center text-base font-semibold text-[#f59e0b] sm:text-lg">{number}</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function AlgorithmCallout({ title, children, className = '' }) {
  return (
    <div className={`rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] ${className}`}>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function TrendChart() {
  return (
    <svg viewBox="0 0 520 220" className="h-[200px] w-full" role="img" aria-label="Pairs trading chart">
      <line x1="0" y1="160" x2="520" y2="160" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" strokeDasharray="4 6" />
      <line x1="0" y1="60" x2="520" y2="60" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d="M 40 120 L 130 80 L 210 150 L 300 72 L 390 130 L 470 90" fill="none" stroke="#f5f3ee" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="40" cy="120" r="6" fill="#8dbdff" />
      <circle cx="210" cy="150" r="6" fill="#8dbdff" />
      <circle cx="470" cy="90" r="6" fill="#f59e0b" />
      <circle cx="300" cy="72" r="6" fill="#f59e0b" />
      <path d="M 130 80 L 210 150 L 300 72" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M 300 72 L 390 130 L 470 90" fill="none" stroke="#8dbdff" strokeWidth="2" strokeOpacity="0.5" />
      <text x="185" y="35" fill="#f59e0b" fontSize="12" fontWeight="700">Long</text>
      <text x="330" y="35" fill="#8dbdff" fontSize="12" fontWeight="700">Short</text>
    </svg>
  );
}

function WalkForwardChart() {
  return (
    <div className="w-full max-w-[520px]">
      <div className="mb-4 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-[11px]">
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-[4px] bg-[#3b82f6]" /> Train</div>
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-[4px] bg-[#f59e0b]" /> Test</div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((fold) => (
          <div key={fold} className="flex items-center gap-4">
            <span className="w-12 text-sm text-slate-300">Fold {fold}</span>
            <div className="relative h-8 flex-1 overflow-hidden rounded-[8px] bg-slate-700/70">
              <div className="absolute left-0 top-0 h-full w-[58%] rounded-[8px] bg-[#3b82f6]" />
              <div className="absolute right-0 top-0 h-full w-[42%] rounded-[8px] bg-[#f59e0b]" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm italic leading-7 text-slate-300">The model never sees the test months while it learns. Then the window rolls forward — exactly as it would live.</div>
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
    ['Calmar ratio', 'Yearly return ÷ max DD', '> 1'],
  ];

  return (
    <div className="overflow-hidden rounded-[18px] border border-slate-500/50 bg-[#f6f1ea]/5 backdrop-blur-sm">
      <div className="grid grid-cols-[1.1fr_1.2fr_0.8fr] border-b border-slate-400/40 bg-[#0f253b]/80 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200">
        <div className="px-4 py-3">Metric</div>
        <div className="px-4 py-3">Plain meaning</div>
        <div className="px-4 py-3">Rule of thumb</div>
      </div>
      {rows.map(([metric, meaning, rule]) => (
        <div key={metric} className="grid grid-cols-[1.1fr_1.2fr_0.8fr] border-b border-slate-400/20 last:border-b-0 text-sm text-slate-200">
          <div className="px-4 py-3">{metric}</div>
          <div className="px-4 py-3 text-slate-300">{meaning}</div>
          <div className="px-4 py-3 text-slate-200">{rule}</div>
        </div>
      ))}
    </div>
  );
}

function AlgorithmTemplate({ label, title, children, accent = 'bg-[#f59e0b]' }) {
  return (
    <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
          <span>Algorithm {label}</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
          <span className="text-slate-200">{title}</span>
        </div>
        <div className="mb-6 text-[clamp(2.5rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">{children}</div>
      </div>
    </section>
  );
}

export default function AlgoTradingPage() {
  return (
    <Layout
      title="Algorithms | AlphaEdge"
      description="Learn systematic algorithm design, validation, deep learning, generative AI and agentic trading workflows at AlphaEdge."
    >
      <div className="bg-[#f2efe9]">
        <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 1</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-slate-200">Classification</span>
            </div>
            <h1 className="mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">NIFTY next-day direction classifier</h1>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-slate-100">
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">01</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Data — 10 years of NIFTY 50 daily bars, India VIX, FII/DII flows, GIFT Nifty gap.</p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">02</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Label — 1 if tomorrow&apos;s close beats today&apos;s by more than costs, else 0.</p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">03</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Features — 1/5/20-day returns, RSI, ATR, VIX change, PCR, 5-day FII flow.</p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">04</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Train — LightGBM, walk-forward: train on 3 years, test the next 3 months, roll.</p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">05</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Signal — long above 58% probability, short below 42%, otherwise flat.</p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">06</span>
                  <p className="max-w-[36rem] text-[17px] leading-8 text-slate-100">Risk — size by volatility, daily loss limit, exit by the close.</p>
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-600/70 bg-slate-800/60 p-5 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
                <pre className="overflow-x-auto text-[12px] leading-7 text-slate-200 sm:text-[14px] lg:text-[15px]">
{`for w in walk_forward(train="3y", test="3m"):
    m = LGBMClassifier(max_depth=4)
    m.fit(X[w.train], y[w.train])
    p = m.predict_proba(X[w.test])[:, 1]
    sig = where(p > 0.58, 1,
               where(p < 0.42, -1, 0))
    pnl += backtest(sig, costs=NSE_COSTS)
    report(pnl) # Sharpe, max DD, hit rate`}
                </pre>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Illustrative parameters. Tune them inside walk-forward windows — never on the full history.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#f3efe7] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 2</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-[#152338]">Unsupervised learning</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4.2vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-[#0b1b2a]">Market regime detection</h2>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_0.7fr_1.05fr]">
              <div className="rounded-[22px] border border-slate-400 bg-[#f8f4ee] p-6 shadow-sm">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1c3c5d]">Inputs • daily</div>
                <ul className="space-y-3 text-[17px] leading-8 text-[#0b1b2a]">
                  <li>• 20-day return</li>
                  <li>• 20-day volatility</li>
                  <li>• India VIX level</li>
                  <li>• Breadth: % of stocks above 50-DMA</li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-[300px] rounded-[18px] bg-[#021d2d] p-7 text-center text-white shadow-[0_20px_45px_rgba(2,20,30,0.25)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">Model</div>
                  <div className="mt-4 text-[28px] font-semibold leading-[1.1] text-white">Hidden Markov model or K-Means</div>
                  <div className="mt-5 text-base leading-7 text-slate-300">3 states, retrained monthly</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ['Calm trend', 'Momentum and breakouts, full size'],
                  ['Range-bound', 'Mean reversion, option selling'],
                  ['Stress', 'Cut size, hedge, or stay flat'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[20px] border border-slate-400 bg-[#f8f4ee] p-5 text-[#0b1b2a] shadow-sm">
                    <div className="text-2xl font-semibold">{title}</div>
                    <div className="mt-2 text-lg leading-7 text-slate-700">{copy}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[18px] border border-slate-400 bg-[#e7e0d7] px-5 py-4 text-[20px] leading-8 text-[#0b1b2a]">
              Most strategies work in one regime and bleed in another. <span className="font-bold">The regime model decides which strategy may trade today.</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 3</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-slate-200">Statistical arbitrage</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">Pairs trading with cointegration</h2>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-5">
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">01</span>
                  <span>Pick — two same-sector F&O stocks, e.g., two large private banks.</span>
                </div>
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">02</span>
                  <span>Test — cointegration on 1 year of data (Engle-Granger, p &lt; 0.05).</span>
                </div>
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">03</span>
                  <span>Hedge — regress A on B to get β; spread = A − β × B.</span>
                </div>
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">04</span>
                  <span>Score — z = (spread − 60-day mean) ÷ 60-day std.</span>
                </div>
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">05</span>
                  <span>Trade — z above +2: short A, long B. Below −2: the reverse. Exit at 0.</span>
                </div>
                <div className="flex gap-4 text-[17px] leading-8 text-slate-100">
                  <span className="mt-[6px] text-lg font-semibold text-[#f59e0b]">06</span>
                  <span>Protect — stop beyond ±3.5 or after 20 days; re-test the pair monthly.</span>
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-600/70 bg-slate-800/60 p-5 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
                <TrendChart />
                <div className="mt-5 text-[15px] leading-7 text-slate-200">
                  <span className="text-[#f59e0b] font-semibold">Orange dot:</span> z crosses +2, short the spread • <span className="text-[#8dbdff] font-semibold">Blue dot:</span> z crosses −2, long the spread • <span className="text-slate-100 font-semibold">Grey dot:</span> back to 0, exit
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#f3efe7] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Module 2</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-[#152338]">Validation</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4.2vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-[#0b1b2a]">Proving the edge: walk-forward testing</h2>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="pt-2">
                <WalkForwardChart />
              </div>

              <div>
                <MetricTable />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 4</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-slate-200">Deep learning</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">LSTM volatility forecaster for options</h2>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8fb3ff]">Input • 60 days</div>
                <div className="mt-4 text-[18px] leading-8 text-slate-100">NIFTY returns, realised vol, India VIX, ATM IV, PCR</div>
              </div>

              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8fb3ff]">Model</div>
                <div className="mt-4 text-[18px] leading-8 text-slate-100">LSTM, 2 layers × 64 units, dropout 0.2</div>
              </div>

              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8fb3ff]">Output</div>
                <div className="mt-4 text-[18px] leading-8 text-slate-100">Forecast of next-5-day realised volatility</div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <h3 className="text-[28px] font-bold text-white">Decision rule</h3>
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-100">
                  <div className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" /><span>IV well above forecast → options look rich → defined-risk selling, e.g., iron condor</span></div>
                  <div className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" /><span>IV well below forecast → options look cheap → long straddle or strangle</span></div>
                </div>
                <div className="mt-5 text-[15px] leading-7 text-slate-300">Filters: skip RBI policy, Budget and results days; cap loss per trade.</div>
              </div>

              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <pre className="overflow-x-auto text-[12px] leading-7 text-slate-200 sm:text-[14px]">
{`model = Sequential([
    LSTM(64, return_sequences=True),
    Dropout(0.2),
    LSTM(64),
    Dense(1)
])

model.fit(X_60d, y_vol5d, epochs=50)
edge = atm_iv - model.predict(X_today)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 5</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-slate-200">Generative AI</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">Announcement sentiment as a feature</h2>

            <div className="grid gap-5 lg:grid-cols-5">
              {[
                ['1 Collect', 'NSE announcements and news, timestamped'],
                ['2 Score', 'LLM returns JSON: type, sentiment, materiality'],
                ['3 Validate', 'Schema check; humans audit a sample'],
                ['4 Aggregate', 'Per stock, per day, decay-weighted'],
                ['5 Feed', 'New features into the Algorithm 1 model'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8fb3ff]">{title}</div>
                  <div className="mt-4 text-[17px] leading-8 text-slate-100">{text}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5 text-[15px] leading-7 text-slate-100">
                <pre className="overflow-x-auto text-[13px] leading-7 sm:text-[15px]">
{`SYSTEM: Indian equity analyst. JSON only.
USER: Classify this NSE announcement:
<"announcement_text">
  {"type": "order_win",
   "sentiment": 0.7,
   "materiality": 4,
   "reason": "order ~ 8% of revenue"}`}
                </pre>
              </div>

              <div className="rounded-[22px] border border-slate-600/80 bg-slate-800/60 p-5">
                <h3 className="text-[26px] font-bold text-white">Rules that keep it honest</h3>
                <ul className="mt-5 space-y-4 text-[17px] leading-8 text-slate-100">
                  <li>• Use announcement time, not processing time</li>
                  <li>• Temperature 0; freeze the model version</li>
                  <li>• Keep it only if it adds out-of-sample value</li>
                  <li>• Log every prompt and output for audit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] bg-[#020f1d] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-[16px]">
              <span>Algorithm 6</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-slate-200">Agentic AI</span>
            </div>
            <h2 className="mb-8 text-[clamp(2.8rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white">Pre-market brief agent, every trading day</h2>

            <div className="space-y-0 overflow-hidden rounded-[20px] border border-slate-600/80 bg-slate-800/60">
              {[
                ['07:30', 'Collect', 'GIFT Nifty, global indices, crude and USD/INR via MCP data servers'],
                ['07:45', 'Read', 'Overnight NSE announcements and watchlist news, sentiment-scored'],
                ['08:00', 'Analyse', 'Previous day&apos;s FII/DII flows, OI build-up, India VIX and today&apos;s regime'],
                ['08:15', 'Draft', 'Ranked events, key levels, risks and suggested strategy switches'],
                ['08:45', 'Human review', 'Desk head edits and approves the brief'],
                ['09:00', 'Pre-open', 'Team trades the plan; the agent has logged every source it used'],
              ].map(([time, task, detail], index) => (
                <div key={`${time}-${task}`} className="grid gap-4 border-b border-slate-600/80 px-5 py-5 sm:grid-cols-[110px_1.2fr_3fr] sm:items-center sm:px-7">
                  <div className="text-[18px] font-bold text-[#f59e0b]">{time}</div>
                  <div className="text-[20px] font-semibold text-white">{task}</div>
                  <div className="text-[18px] leading-8 text-slate-200">{detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[18px] border border-slate-600/80 bg-[#0a1a2a] px-5 py-4 text-[20px] leading-8 text-slate-100">
              The agent prepares; humans decide. <span className="font-bold text-[#f59e0b]">Read-only tools</span> — it never places orders.
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-[1600px] bg-[#f3efe7] px-4 py-10 text-[20px] text-[#0c1e2d] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px] pt-6 text-[15px] font-medium uppercase tracking-[0.25em] text-[#11273d] sm:text-[17px]">
            AI for the Trading Desk • ALPHAEDGE
          </div>
        </footer>
      </div>
    </Layout>
  );
}
