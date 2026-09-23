import { useMemo, useState } from 'react';
import Layout from '../layout/Layout';

const ai900ProgrammeData = {
  code: 'AI-900',
  title: 'Master Programme in Applied Artificial Intelligence for Financial Systems',
  duration: '52 weeks · 4 terms',
  load: '20–22 hrs/week · 1,100 hours',
  modules: '13 · plus 17-week capstone',
  award: 'AlphaEdge Master Certificate',
  subtitle: 'Fifty-two weeks. Thirteen modules. Machine learning, deep learning, generative AI, retrieval, the Model Context Protocol, agentic systems, production engineering and governance — taught completely, in sequence, with nothing assumed and nothing skipped.',
  terms: [
    {
      number: 1,
      title: 'Foundations',
      modules: [
        {
          number: 1,
          title: 'Software and systems engineering',
          weeks: [
            { number: 1, title: 'The machine, the shell and the language', topics: ['Python fundamentals', 'Data structures', 'Memory and processes'] },
            { number: 2, title: 'Program design and correctness', topics: ['OOP design', 'Testing', 'Type hints'] },
            { number: 3, title: 'Version control and collaboration', topics: ['Git', 'Pull requests', 'CI/CD'] },
            { number: 4, title: 'Performance and concurrency', topics: ['Profiling', 'NumPy', 'Asyncio'] },
          ]
        },
        {
          number: 2,
          title: 'Mathematics for AI',
          weeks: [
            { number: 5, title: 'Linear algebra fundamentals', topics: ['Vectors and matrices', 'Eigendecomposition', 'Projections'] },
            { number: 6, title: 'Calculus and optimization', topics: ['Derivatives', 'Chain rule', 'Gradient descent'] },
            { number: 7, title: 'Probability and distributions', topics: ['Bayes theorem', 'Distributions', 'Sampling'] },
            { number: 8, title: 'Statistics and inference', topics: ['Hypothesis testing', 'Confidence intervals', 'Bayesian inference'] },
          ]
        },
        {
          number: 3,
          title: 'Data engineering',
          weeks: [
            { number: 9, title: 'Data pipelines and quality', topics: ['ETL processes', 'Data validation', 'Point-in-time consistency'] },
            { number: 10, title: 'Databases and SQL', topics: ['Relational design', 'Query optimization', 'Transactions'] },
            { number: 11, title: 'Big data technologies', topics: ['Distributed systems', 'Spark', 'Data warehousing'] },
            { number: 12, title: 'Time series and market data', topics: ['OHLCV processing', 'Tick data handling', 'Reconciliation'] },
          ]
        }
      ]
    },
    {
      number: 2,
      title: 'Machine Learning',
      modules: [
        {
          number: 4,
          title: 'Supervised Learning and Ensembles',
          weeks: [
            { number: 13, title: 'Regression and classification', topics: ['Linear models', 'Logistic regression', 'Tree methods'] },
            { number: 14, title: 'Regularization and validation', topics: ['L1/L2 penalty', 'Cross-validation', 'Hyperparameter tuning'] },
            { number: 15, title: 'Ensemble methods', topics: ['Random forests', 'Gradient boosting', 'Stacking'] },
            { number: 16, title: 'Model evaluation in finance', topics: ['Sharpe ratio', 'Drawdown analysis', 'Walk-forward testing'] },
          ]
        },
        {
          number: 5,
          title: 'Unsupervised Learning and Bayesian Methods',
          weeks: [
            { number: 17, title: 'Clustering and dimensionality', topics: ['K-means', 'PCA', 'UMAP'] },
            { number: 18, title: 'Probabilistic models', topics: ['Gaussian mixtures', 'EM algorithm', 'Factor analysis'] },
            { number: 19, title: 'Bayesian inference', topics: ['Prior and posterior', 'MCMC', 'Variational inference'] },
            { number: 20, title: 'Topic models and embeddings', topics: ['Latent Dirichlet allocation', 'Word2vec', 'Representation learning'] },
          ]
        },
        {
          number: 6,
          title: 'Time Series and Causal Inference',
          weeks: [
            { number: 21, title: 'Time series fundamentals', topics: ['Stationarity', 'ARIMA', 'Autocorrelation'] },
            { number: 22, title: 'Forecasting and anomaly detection', topics: ['Prophet', 'Exponential smoothing', 'Isolation forests'] },
            { number: 23, title: 'Causal inference methods', topics: ['Causal DAGs', 'Backdoor criterion', 'Instrumental variables'] },
            { number: 24, title: 'Research protocol and validation', topics: ['Hypothesis registration', 'Purged cross-validation', 'Multiple testing correction'] },
          ]
        }
      ]
    },
    {
      number: 3,
      title: 'Deep Learning and Generative AI',
      modules: [
        {
          number: 7,
          title: 'Neural Network Architectures',
          weeks: [
            { number: 25, title: 'Backpropagation from first principles', topics: ['Forward pass', 'Gradient computation', 'Numerical verification'] },
            { number: 26, title: 'Feedforward networks', topics: ['Activation functions', 'Batch normalization', 'Dropout'] },
            { number: 27, title: 'Convolutional networks', topics: ['Convolutions', 'Pooling', 'ResNets'] },
            { number: 28, title: 'Recurrent architectures', topics: ['LSTM', 'GRU', 'Bidirectional networks'] },
          ]
        },
        {
          number: 8,
          title: 'Transformers and Large Language Models',
          weeks: [
            { number: 29, title: 'Attention mechanisms', topics: ['Self-attention', 'Multi-head attention', 'Positional encoding'] },
            { number: 30, title: 'Transformer architecture', topics: ['Encoder-decoder', 'Causal attention', 'Efficient attention'] },
            { number: 31, title: 'Language models and pretraining', topics: ['Next-token prediction', 'Masked language modeling', 'BERT and GPT'] },
            { number: 32, title: 'Fine-tuning and adaptation', topics: ['Parameter-efficient tuning', 'LoRA', 'Prompt engineering'] },
          ]
        },
        {
          number: 9,
          title: 'Generative Models and Reinforcement Learning',
          weeks: [
            { number: 33, title: 'Generative models', topics: ['VAEs', 'GANs', 'Diffusion models'] },
            { number: 34, title: 'Multimodal learning', topics: ['Vision-language models', 'CLIP', 'Image generation'] },
            { number: 35, title: 'Reinforcement learning fundamentals', topics: ['MDPs', 'Value and policy methods', 'Q-learning'] },
            { number: 36, title: 'RL in financial contexts', topics: ['Portfolio optimization', 'Trading agents', 'Multi-agent systems'] },
          ]
        }
      ]
    },
    {
      number: 4,
      title: 'Applied AI Systems',
      modules: [
        {
          number: 10,
          title: 'Retrieval and RAG',
          weeks: [
            { number: 37, title: 'Embedding and vector spaces', topics: ['Semantic search', 'Similarity metrics', 'Approximate nearest neighbor'] },
            { number: 40, title: 'Retrieval-augmented generation', topics: ['Context retrieval', 'Reranking', 'Grounding and citation'] },
          ]
        },
        {
          number: 11,
          title: 'MCP and Tool Infrastructure',
          weeks: [
            { number: 41, title: 'Model Context Protocol', topics: ['Protocol design', 'Tool definitions', 'Capability negotiation'] },
            { number: 44, title: 'Tool safety and verification', topics: ['Sandboxing', 'Authorization', 'Confused deputy attacks'] },
          ]
        },
        {
          number: 12,
          title: 'Agentic AI',
          weeks: [
            { number: 45, title: 'Agent planning and orchestration', topics: ['State machines', 'Planning algorithms', 'Memory systems'] },
            { number: 48, title: 'Multi-agent systems', topics: ['Agent communication', 'Coordination', 'Conflict resolution'] },
          ]
        },
        {
          number: 13,
          title: 'Production and Governance',
          weeks: [
            { number: 49, title: 'Model serving and monitoring', topics: ['Model registries', 'A/B testing', 'Drift detection'] },
            { number: 52, title: 'Compliance and model risk', topics: ['Explainability', 'Audit trails', 'Regulatory governance'] },
          ]
        }
      ]
    }
  ]
};

const assessmentBreakdown = [
  { label: 'Module Projects', value: '40%', description: 'Defended systems across 13 modules' },
  { label: 'Capstone', value: '30%', description: '17-week applied research project' },
  { label: 'Participation', value: '20%', description: 'Engagement and collaboration' },
  { label: 'Final Assessment', value: '10%', description: 'Comprehensive evaluation' },
];

export default function ProgrammeAi900Page() {
  const [query, setQuery] = useState('');

  const filteredTerms = useMemo(() => {
    return ai900ProgrammeData.terms
      .map((term) => ({
        ...term,
        modules: term.modules.filter((module) => {
          const haystack = `${module.title} ${module.weeks.map((week) => `${week.title} ${week.topics.join(' ')}`).join(' ')}`.toLowerCase();
          return haystack.includes(query.toLowerCase());
        }),
      }))
      .filter((term) => term.modules.length > 0 || query.trim() === '');
  }, [query]);

  return (
    <Layout
      title="AI-900 | AlphaEdge"
      description="AI-900 is AlphaEdge's flagship 52-week applied AI and quantitative finance programme, covering market foundations, machine learning, deep learning, LLMs, RAG, agentic systems and governance."
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">{ai900ProgrammeData.code}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">{ai900ProgrammeData.title}</h1>
            </div>
            <div className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              {ai900ProgrammeData.duration}
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">{ai900ProgrammeData.subtitle}</p>

          <div className="mt-6 grid gap-3 sm:gap-4 sm:mt-8 grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.25em]">Duration</div>
              <div className="mt-1.5 text-base font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-lg">{ai900ProgrammeData.duration}</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.25em]">Load</div>
              <div className="mt-1.5 text-base font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-lg">{ai900ProgrammeData.load}</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.25em]">Modules</div>
              <div className="mt-1.5 text-base font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-lg">{ai900ProgrammeData.modules}</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.25em]">Award</div>
              <div className="mt-1.5 text-base font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-lg">{ai900ProgrammeData.award}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Curriculum search</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Explore the 52-week map</h2>
          </div>
          <label className="w-full sm:w-auto sm:max-w-md">
            <span className="sr-only">Search curriculum</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search modules, weeks or topics"
              className="w-full rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-2.5 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none ring-0 transition focus:border-[var(--accent)] sm:px-4 sm:py-3 sm:text-sm"
            />
          </label>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {filteredTerms.map((term) => (
            <div key={term.number} className="rounded-[20px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:p-6">
              <h3 className="text-lg sm:text-2xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:tracking-[-0.04em]">Term {term.number}: {term.title}</h3>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {term.modules.map((module) => (
                  <details key={module.number} className="group rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 sm:p-4" open>
                    <summary className="cursor-pointer list-none text-sm sm:text-lg font-semibold text-[var(--text-primary)]">
                      Module {module.number}: {module.title}
                    </summary>
                    <div className="mt-3 sm:mt-5 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                      {module.weeks.map((week) => (
                        <div key={week.number} className="rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-3 sm:p-4">
                          <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.24em]">Week {week.number}</div>
                          <h4 className="mt-2 text-xs font-semibold text-[var(--text-primary)] sm:mt-3 sm:text-base">{week.title}</h4>
                          <ul className="mt-2 space-y-1 text-xs leading-5 text-[var(--text-secondary)] sm:mt-3 sm:space-y-2 sm:text-sm sm:leading-6">
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
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Learning outcomes</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">What you will gain</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Technical Mastery',
              description: 'Build any standard model from scratch and explain why it works. Implement backpropagation, attention mechanisms and retrieval systems at first principles — not by calling libraries.',
              icon: '⚙️',
              points: ['Implement algorithms from scratch', 'Understand gradients and optimization', 'Debug black-box systems']
            },
            {
              title: 'Research Discipline',
              description: 'Tell a real result from a lucky one. Learn the validation practices designed for financial data — purged cross-validation, multiple testing correction, and hypothesis registration.',
              icon: '🔬',
              points: ['Rigorous statistical testing', 'Walk-forward validation', 'Robustness analysis']
            },
            {
              title: 'Production Engineering',
              description: 'Move beyond notebooks. Serve models in production with monitoring, versioning, rollback capabilities and cost control — the work that separates research from deployed systems.',
              icon: '🚀',
              points: ['Model serving and versioning', 'Observability and monitoring', 'Incident response']
            },
            {
              title: 'AI System Design',
              description: 'Design systems that reach trustworthy information safely. Build retrieval architectures that cite sources, agentic systems with memory and state, and tool infrastructure with proper authorization.',
              icon: '🧠',
              points: ['RAG and grounded generation', 'Agent orchestration', 'Tool safety and MCP']
            },
            {
              title: 'Governance and Risk',
              description: 'Pass model risk review and regulatory scrutiny. Document systems for explainability, audit trails and compliance — the disciplines that make ML deployable in regulated financial environments.',
              icon: '⚖️',
              points: ['Model explainability', 'Regulatory compliance', 'Audit trails']
            },
            {
              title: 'Professional Portfolio',
              description: 'Ship a portfolio that proves capability. Thirteen defended module systems plus a capstone project with code, evaluation results, and honest failure analysis — evidence for any employer.',
              icon: '📊',
              points: ['13 production systems', '17-week capstone', 'Published with evaluation']
            },
          ].map((value, index) => (
            <div key={index} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-8 hover:border-[var(--accent)]/40 transition-all duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold tracking-[-0.03em] text-[var(--text-primary)] mb-3">{value.title}</h3>
              <p className="text-base leading-7 text-[var(--text-secondary)] mb-5">{value.description}</p>
              <ul className="space-y-2">
                {value.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] font-bold flex-shrink-0 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-[var(--border-soft)] bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Career readiness</p>
            <h3 className="text-2xl font-bold tracking-[-0.05em] text-[var(--text-primary)] mb-6">Prepared for real roles</h3>
            <p className="text-base leading-8 text-[var(--text-secondary)] mb-8">
              Graduates are equipped to take on roles that require deep technical capability and judgment: quantitative researcher, ML engineer, AI/LLM engineer, data engineer, model risk analyst, surveillance specialist or AI product lead. The portfolio demonstrates capability across all of these pathways, and employers can see exactly what the candidate can build.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <span className="text-lg text-[var(--accent)]">→</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>What matters:</strong> Not job titles or credentials, but demonstrated capability. What can you build? What can you explain? What have you shipped?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Assessment</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)]">Progression and assessment model</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {assessmentBreakdown.map((entry) => (
            <div key={entry.label} className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center">
              <div className="text-3xl font-black tracking-[-0.05em] text-[var(--text-primary)]">{entry.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{entry.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
