import { useMemo, useState } from 'react';
import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import {
  ChartCard,
  TermTimeline,
  AssessmentDonut,
  RuleVsLearnedChart,
  PipelineRail,
  WalkForwardChart,
  DataFlowGraphic,
  BacktestVsLiveChart,
  FamilyIcon,
  OverfitChart,
  RagFlowGraphic,
  AgentLoopGraphic,
  GovernanceFlowGraphic,
} from '../components/Ai900Charts';
import { ai900ProgrammeData, assessmentBreakdown } from '../data/ai900Data';

const d = ai900ProgrammeData;

const vocabularyWhy = {
  Overfitting: 'Historical pattern memorised instead of structural edge',
  Validation: 'Out-of-sample testing before real exposure',
  Drift: 'Regime change and signal deterioration',
  Training: 'Fit the strategy to past data only',
  Inference: 'Generate live trading signal from current inputs',
  Features: 'Inputs the model actually sees',
  Label: 'The target the model is trying to predict',
  Model: 'The learned rulebook that produces decisions',
};

const gainCards = [
  {
    title: 'Technical Mastery',
    description: 'Build any standard model from scratch and explain why it works. Implement backpropagation, attention mechanisms and retrieval systems at first principles — not by calling libraries.',
    icon: '⚙️',
    points: ['Implement algorithms from scratch', 'Understand gradients and optimization', 'Debug black-box systems'],
  },
  {
    title: 'Research Discipline',
    description: 'Tell a real result from a lucky one. Learn the validation practices designed for financial data — purged cross-validation, multiple testing correction, and hypothesis registration.',
    icon: '🔬',
    points: ['Rigorous statistical testing', 'Walk-forward validation', 'Robustness analysis'],
  },
  {
    title: 'Production Engineering',
    description: 'Move beyond notebooks. Serve models in production with monitoring, versioning, rollback capabilities and cost control — the work that separates research from deployed systems.',
    icon: '🚀',
    points: ['Model serving and versioning', 'Observability and monitoring', 'Incident response'],
  },
  {
    title: 'AI System Design',
    description: 'Design systems that reach trustworthy information safely. Build retrieval architectures that cite sources, agentic systems with memory and state, and tool infrastructure with proper authorization.',
    icon: '🧠',
    points: ['RAG and grounded generation', 'Agent orchestration', 'Tool safety and MCP'],
  },
  {
    title: 'Governance and Risk',
    description: 'Pass model risk review and regulatory scrutiny. Document systems for explainability, audit trails and compliance — the disciplines that make ML deployable in regulated financial environments.',
    icon: '⚖️',
    points: ['Model explainability', 'Regulatory compliance', 'Audit trails'],
  },
  {
    title: 'Professional Portfolio',
    description: 'Ship a portfolio that proves capability. Thirteen defended module systems plus a capstone project with code, evaluation results, and honest failure analysis — evidence for any employer.',
    icon: '📊',
    points: ['13 production systems', '17-week capstone', 'Published with evaluation'],
  },
];

const llmUseCases = [
  'Summarise 200 concall transcripts overnight',
  'Classify NSE announcements by type and materiality',
  'Turn news and filings into numeric sentiment scores',
  'Write, explain and review Python for backtests and data pipelines',
  'Draft research notes and post-trade reports from structured data',
  'Explain SEBI and exchange circulars for compliance review',
];

const promptAnatomy = [
  ['Role', 'Banking analyst covering PSU banks.'],
  ['Context', 'Use only the Q2 FY27 transcript and no outside source.'],
  ['Task', 'Extract NIM and slippage guidance with a direct quote for each point.'],
  ['Constraints', 'No forecasts. If missing, return null.'],
  ['Output format', '{"metric": "...", "value": "...", "quote": "..."}'],
  ['Examples', 'One or two solved cases so the answer stays consistent.'],
];


export default function ProgrammeAi900Page() {
  const [query, setQuery] = useState('');

  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return d.terms
      .map((term) => ({
        ...term,
        modules: term.modules.filter((module) => {
          const haystack = `${module.title} ${module.weeks
            .map((week) => `${week.title} ${week.topics.join(' ')}`)
            .join(' ')}`.toLowerCase();
          return haystack.includes(q);
        }),
      }))
      .filter((term) => term.modules.length > 0 || q === '');
  }, [query]);

  const facts = [
    { label: 'Duration', value: d.duration },
    { label: 'Load', value: d.load },
    { label: 'Modules', value: d.modules },
    { label: 'Award', value: d.award },
  ];

  return (
    <Layout
      title="AI-900 | AlphaEdge"
      description="AI-900 is AlphaEdge's flagship 52-week applied AI and quantitative finance programme, covering market foundations, machine learning, deep learning, LLMs, RAG, agentic systems and governance."
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal as="p" className={T.eyebrow}>
              {d.code}
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {d.title}
            </Reveal>
          </div>
          <Reveal
            delay={150}
            className="inline-flex w-fit rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]"
          >
            {d.duration}
          </Reveal>
        </div>

        <Reveal as="p" delay={200} className={`${T.lead} !max-w-4xl sm:!text-xl sm:!leading-8`}>
          {d.subtitle}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={300 + i * 100} className={`${T.card} !p-5`}>
              <p className={T.muted}>{fact.label}</p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{fact.value}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          className="mt-6"
          title="Four terms across 52 weeks"
          caption="Each bar is sized by the number of weeks the term covers."
        >
          <TermTimeline terms={d.terms} />
        </ChartCard>
      </Section>

      {/* ============================ COURSE MAP ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Course map" title="Six modules, one capstone" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {d.moduleOverview.map((module, i) => (
            <Reveal key={module.name} delay={(i % 3) * 120} className={T.cardAlt}>
              <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
                {module.name}
              </span>
              <h3 className={`${T.h3} mt-4`}>{module.title}</h3>
              <p className={T.body}>{module.description}</p>
              <ul className="mt-5 space-y-3">
                {module.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                    <Check />
                    <span className="pt-0.5">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Banner label="Capstone">
          Build, backtest and paper-trade an ML + LLM signal on real NSE data, then defend the result with
          evidence, risk controls and production-aware decision making.
        </Banner>
      </Section>

      {/* ============================ METHODOLOGY ============================ */}
      <Section>
        <SectionHeader eyebrow="Learning methodology" title="How the programme is taught" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {d.methodology.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100} className={T.card}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ TOOLKIT + OUTCOMES ============================ */}
      <Section alt>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className={T.cardAlt}>
            <p className={T.eyebrow}>Toolkit</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              The tools we use in practice
            </h2>
            <ul className="mt-6 space-y-4">
              {d.toolkit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className={T.cardAlt}>
            <p className={T.eyebrow}>Outcomes</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              What you leave able to do
            </h2>
            <ul className="mt-6 space-y-4">
              {d.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ============================ CURRICULUM ============================ */}
      <Section>
        <SectionHeader
          eyebrow="Curriculum search"
          title="Explore the 52-week map"
          action={
            <label className="w-full sm:w-80">
              <span className="sr-only">Search curriculum</span>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search modules, weeks or topics"
                className="w-full rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
              />
            </label>
          }
        />

        <div className="space-y-6">
          {filteredTerms.map((term) => (
            <Reveal key={term.number} className={T.card}>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Term {term.number}: {term.title}
              </h3>

              <div className="mt-6 space-y-4">
                {term.modules.map((module) => (
                  <details key={module.number} className={`group ${T.inner}`} open>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                      <span>
                        Module {module.number}: {module.title}
                      </span>
                      <span aria-hidden="true" className="text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-90">
                        ›
                      </span>
                    </summary>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {module.weeks.map((week) => (
                        <div key={week.number} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                          <p className="text-sm font-semibold text-[var(--accent-strong)]">Week {week.number}</p>
                          <h4 className="mt-2 text-base font-semibold text-[var(--text-primary)]">{week.title}</h4>
                          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-secondary)]">
                            {week.topics.map((topic) => (
                              <li key={topic}>• {topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}

          {filteredTerms.length === 0 && (
            <Reveal className={T.card}>
              <p className="text-base text-[var(--text-secondary)]">
                No modules, weeks or topics match “{query}”. Try a shorter search.
              </p>
            </Reveal>
          )}
        </div>
      </Section>

      {/* ============================ WHAT YOU WILL GAIN ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Learning outcomes" title="What you will gain" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gainCards.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 120} className={T.cardAlt}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/12 text-3xl">
                {value.icon}
              </div>
              <h3 className={T.h3}>{value.title}</h3>
              <p className={T.body}>{value.description}</p>
              <ul className="mt-5 space-y-3">
                {value.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <Check />
                    <span className="pt-0.5">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Banner label="Career readiness">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Prepared for real roles</h3>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--text-secondary)]">
            Graduates are equipped to take on roles that require deep technical capability and judgment:
            quantitative researcher, ML engineer, AI/LLM engineer, data engineer, model risk analyst,
            surveillance specialist or AI product lead. The portfolio demonstrates capability across all of
            these pathways, and employers can see exactly what the candidate can build.
          </p>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">What matters:</strong> Not job titles or
            credentials, but demonstrated capability. What can you build? What can you explain? What have you
            shipped?
          </p>
        </Banner>
      </Section>

      {/* ============================ ASSESSMENT ============================ */}
      <Section>
        <SectionHeader eyebrow="Assessment" title="Progression and assessment model" />
        <Reveal className={T.card}>
          <AssessmentDonut items={assessmentBreakdown} />
        </Reveal>
      </Section>

      {/* ============================ AI VOCABULARY ============================ */}
      <Section alt>
        <SectionHeader eyebrow="AI for trading" title="AI vocabulary translated into trading" />

        <div className={`${T.cardAlt} overflow-hidden !p-0`}>
          <div className="hidden grid-cols-4 gap-4 border-b border-[var(--border-soft)] bg-[var(--surface)] px-6 py-4 text-sm font-semibold text-[var(--text-muted)] sm:grid">
            <div>AI term</div>
            <div>Meaning</div>
            <div>Trading equivalent</div>
            <div>Why it matters</div>
          </div>
          {d.aiVocabulary.map((item, i) => (
            <Reveal
              key={item.term}
              delay={(i % 4) * 60}
              className="grid gap-3 border-b border-[var(--border-soft)] px-4 py-5 last:border-b-0 sm:grid-cols-4 sm:gap-4 sm:px-6"
            >
              <div className="text-base font-semibold text-[var(--accent-strong)]">{item.term}</div>
              <div className="text-sm leading-6 text-[var(--text-secondary)]">
                <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">Meaning</span>
                {item.meaning}
              </div>
              <div className="text-sm leading-6 text-[var(--text-secondary)]">
                <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">Trading equivalent</span>
                {item.tradingEquivalent}
              </div>
              <div className="text-sm leading-6 text-[var(--text-secondary)]">
                <span className="block text-xs font-semibold text-[var(--text-muted)] sm:hidden">Why it matters</span>
                {vocabularyWhy[item.term]}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ RULE-BASED VS ML ============================ */}
      <Section>
        <SectionHeader eyebrow="Rule-based vs ML" title="Traditional algorithms versus learned models" />

        <div className="grid gap-6 lg:grid-cols-2">
          {d.ruleBasedVsMl.map((item, i) => (
            <Reveal key={item.title} delay={i * 150} className={T.card}>
              <h3 className={T.h3}>{item.title}</h3>
              <p className={`mt-4 ${T.inner} font-mono text-sm leading-7 text-[var(--text-primary)]`}>
                {item.snippet}
              </p>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          className="mt-6"
          title="One fixed line versus a fitted boundary"
          caption="Illustration, not real data. Circled points are the ones a single fixed threshold gets wrong."
          legend={[
            { label: 'Signal goes up', color: 'var(--accent)' },
            { label: 'Signal goes down', color: '#3b82f6' },
            { label: 'Decision boundary', color: '#f59e0b' },
          ]}
        >
          <RuleVsLearnedChart />
        </ChartCard>
      </Section>

      {/* ============================ ML WORKFLOW ============================ */}
      <Section alt>
        <SectionHeader eyebrow="ML workflow" title="From research to production" />

        <PipelineRail steps={d.mlPipeline} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {d.mlPipeline.map((item, i) => (
            <Reveal key={item.step} delay={(i % 5) * 80} className={`${T.cardAlt} !p-5`}>
              <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.details}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          alt
          className="mt-6"
          title="Walk-forward testing, window by window"
          caption="Illustration: fit on the past only, test on the next unseen window, then roll forward and repeat."
          legend={[
            { label: 'Train (past only)', color: 'var(--accent)' },
            { label: 'Test (unseen)', color: '#f59e0b' },
          ]}
        >
          <WalkForwardChart />
        </ChartCard>
      </Section>

      {/* ============================ DATA FOUNDATION ============================ */}
      <Section>
        <SectionHeader eyebrow="Data foundation" title="Six layers of Indian market data" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {d.dataLayers.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120} className={T.card}>
              <h3 className={T.h3}>{item.title}</h3>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          className="mt-6"
          title="Every layer ends up in one point-in-time store"
          caption="Illustration of how the six layers flow into model-ready features."
        >
          <DataFlowGraphic layers={d.dataLayers} />
        </ChartCard>

        <Banner>
          Rule #1: every record is stamped with when it was actually available to you — not just the date it
          describes.
        </Banner>
      </Section>

      {/* ============================ FEATURE ENGINEERING ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Feature engineering" title="The inputs the model actually sees" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {d.featureEngineering.map((item, i) => (
            <Reveal key={item.feature} delay={(i % 3) * 120} className={T.cardAlt}>
              <h3 className={T.h3}>{item.feature}</h3>
              <p className={T.body}>{item.purpose}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ BACKTESTING ============================ */}
      <Section>
        <SectionHeader eyebrow="Backtesting risk" title="Four ways a great backtest can lie" />

        <div className="grid gap-6 lg:grid-cols-2">
          {d.backtestingMistakes.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 150} className={T.card}>
              <h3 className={T.h3}>{item.title}</h3>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          className="mt-6"
          title="The gap between a backtest and live trading"
          caption="Illustration, not real results: costs and biases shrink the edge, and live trading shows what is left."
          legend={[
            { label: 'Backtest without costs', color: 'var(--accent)' },
            { label: 'Backtest after costs', color: '#3b82f6' },
            { label: 'Live', color: '#ef4444' },
          ]}
        >
          <BacktestVsLiveChart />
        </ChartCard>
      </Section>

      {/* ============================ MACHINE LEARNING ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Machine learning" title="Four families of ML and core models" />

        <div className="grid gap-6 lg:grid-cols-2">
          {d.mlFamilies.map((item, i) => (
            <Reveal key={item.type} delay={(i % 2) * 150} className={`${T.cardAlt} flex flex-col gap-5 sm:flex-row sm:items-center`}>
              <div className="flex shrink-0 justify-center sm:w-40">
                <FamilyIcon type={item.type} />
              </div>
              <div>
                <h3 className={T.h3}>{item.type}</h3>
                <p className={T.small}>
                  <span className="font-semibold text-[var(--text-primary)]">What it does:</span> {item.purpose}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Trading example:</span> {item.example}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {d.mlModels.map((item, i) => (
            <Reveal key={item.model} delay={(i % 3) * 120} className={T.cardAlt}>
              <h3 className={T.h3}>{item.model}</h3>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Banner>
          Start simple: if a logistic regression model does not provide a useful predictive edge on Indian
          market data, a more complex deep-learning model may simply memorise noise instead of capturing
          signal.
        </Banner>

        <ChartCard
          alt
          className="mt-6"
          title="Why more complex is not always better"
          caption="Illustration: training error keeps falling with complexity, but validation error turns back up once the model starts memorising noise."
          legend={[
            { label: 'Training error', color: 'var(--accent)' },
            { label: 'Validation / live error', color: '#f59e0b' },
          ]}
        >
          <OverfitChart />
        </ChartCard>
      </Section>

      {/* ============================ LLMs ============================ */}
      <Section>
        <SectionHeader eyebrow="LLMs and research workflows" title="Generative AI for the trading desk" />

        <div className="grid gap-6 lg:grid-cols-3">
          {d.llmSummary.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className={T.card}>
              <h3 className={T.h3}>{item.title}</h3>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={`${T.card} mt-6`}>
          <h3 className={T.h3}>Where LLMs help the desk today</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {llmUseCases.map((useCase) => (
              <div key={useCase} className={`${T.inner} flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]`}>
                <Check />
                <span className="pt-0.5">{useCase}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={`${T.card} mt-6`}>
          <h3 className={T.h3}>Anatomy of a production prompt</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {promptAnatomy.map(([label, detail]) => (
              <div key={label} className={T.inner}>
                <p className="text-sm font-semibold text-[var(--accent-strong)]">{label}</p>
                <p className="mt-2 break-words text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={`${T.card} mt-6`}>
          <h3 className={T.h3}>Six techniques for financial work</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {d.promptTechniques.map((item) => (
              <div key={item.title} className={T.inner}>
                <p className="text-base font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.use}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============================ RETRIEVAL ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Retrieval and connected AI" title="Vector search, RAG and MCP" />

        <div className="grid gap-6 lg:grid-cols-2">
          {d.retrievalStack.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 150}
              className={`${T.cardAlt} ${i === d.retrievalStack.length - 1 && d.retrievalStack.length % 2 === 1 ? 'lg:col-span-2' : ''}`}
            >
              <h3 className={T.h3}>{item.title}</h3>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          alt
          className="mt-6"
          title="How a question gets a cited answer"
          caption="Illustration of the RAG flow described above."
        >
          <RagFlowGraphic />
        </ChartCard>

        <Reveal className={`${T.cardAlt} mt-6`}>
          <h3 className={T.h3}>RAG in practice</h3>
          <p className={T.body}>
            Questions such as “Which banks guided lower slippages?” are embedded into the same vector space as
            the internal corpus, the nearest passages are retrieved, and the model answers from trusted
            sources with traceability back to the document and date.
          </p>
        </Reveal>
      </Section>

      {/* ============================ AGENTIC AI ============================ */}
      <Section>
        <SectionHeader eyebrow="Agentic AI" title="Planning, acting and reflecting" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {d.agenticAi.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100} className={T.card}>
              <p className="text-sm font-semibold text-[var(--accent-strong)]">{item.title}</p>
              <p className={T.body}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <ChartCard
          className="mt-6"
          title="The agent loop"
          caption="Illustration: the agent repeats the cycle until the goal is reached or the risk limits stop it."
        >
          <AgentLoopGraphic items={d.agenticAi} />
        </ChartCard>

        <Reveal className={`${T.card} mt-6`}>
          <h3 className={T.h3}>Multi-agent research desk</h3>
          <p className={T.body}>
            An orchestrator splits the task, data tools pull prices and flows, the analyst reads filings and
            concalls via RAG, the quant runs backtests and the risk and compliance layers verify exposure,
            margin and regulatory fit before any order moves forward.
          </p>
        </Reveal>
      </Section>

      {/* ============================ GOVERNANCE ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Governance" title="Guardrails for AI on the trading desk" />

        <ChartCard
          alt
          title="Nothing reaches the exchange without passing the controls"
          caption="Illustration of the guardrails listed below."
        >
          <GovernanceFlowGraphic />
        </ChartCard>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {d.governanceRules.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 100} className={`${T.cardAlt} flex items-start gap-3 !p-5`}>
              <Check />
              <p className="pt-0.5 text-sm leading-6 text-[var(--text-secondary)]">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </Layout>
  );
}