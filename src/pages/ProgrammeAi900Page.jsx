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
  moduleOverview: [
    {
      name: 'Module 1',
      title: 'Data foundation',
      description: 'NSE data, cleaning, feature engineering, market structure and historical bias controls.',
      points: ['Bhavcopy, ticks, option chain and alternatives', 'Feature design for returns, risk and events', 'Backtest bias controls and data availability rules']
    },
    {
      name: 'Module 2',
      title: 'Machine learning',
      description: 'Predictive models for market regimes, relative value, volatility and directional structure.',
      points: ['Classifiers and regimes', 'Pairs and mean reversion logic', 'Walk-forward validation and robustness testing']
    },
    {
      name: 'Module 3',
      title: 'Deep learning',
      description: 'Sequence models and attention-based architectures for time-series signal discovery.',
      points: ['LSTM, CNN and Transformer time-series models', 'Temporal feature extraction and sequence learning', 'Forecasting, classification and model diagnosis']
    },
    {
      name: 'Module 4',
      title: 'GenAI and LLMs',
      description: 'Large language models for filings, research synthesis, event analysis and decision support.',
      points: ['Prompt engineering and structured reasoning', 'Filings and concall analysis at scale', 'Human-in-the-loop evaluation and risk review']
    },
    {
      name: 'Module 5',
      title: 'RAG, vector DB and MCP',
      description: 'Connected AI systems that reason over internal knowledge, external documents and controlled tools.',
      points: ['RAG pipelines and retrieval strategies', 'Vector databases and semantic search', 'MCP-enabled tool orchestration and context grounding']
    },
    {
      name: 'Module 6',
      title: 'Agents and governance',
      description: 'Autonomous workflows under SEBI-aware guardrails, with oversight, controls and deployment discipline.',
      points: ['Agent planning and tool use', 'Kill-switches, human oversight and governance', 'Explainability, model risk and controlled execution']
    },
  ],
  methodology: [
    {
      title: 'Market-first learning',
      description: 'Every concept is grounded in live market contexts: NSE data, option flow, event study logic, execution costs and regulatory constraints.'
    },
    {
      title: 'Research rigor',
      description: 'We teach validation before deployment: train/test splits, walk-forward testing, purged evaluation, multiple testing discipline and out-of-sample review.'
    },
    {
      title: 'Production discipline',
      description: 'Models are tested for drift, cost, risk and operational failure. Paper trading, controlled deployment, monitoring and retraining are built into the pipeline.'
    },
    {
      title: 'Governed AI',
      description: 'Human oversight, kill switches, audit trails and model risk thinking are part of the architecture from day one, not added at the end.'
    },
  ],
  toolkit: [
    'Python, SQL, pandas and NumPy',
    'Feature engineering for returns, volatility and order-flow signals',
    'scikit-learn, PyTorch, Hugging Face and LLM workflows',
    'Vector databases, retrieval pipelines and MCP-based tool orchestration',
    'Git, testing, packaging and production deployment workflows',
    'Monitoring, drift detection, risk controls and explainability reviews',
  ],
  outcomes: [
    'Design and test machine-learning and deep-learning strategies on real market data',
    'Use LLMs and retrieval systems to process filings, transcripts and research material at scale',
    'Build governed, explainable AI workflows for trading, research and risk use cases',
    'Deploy models with monitoring, execution controls and professional-grade operational discipline',
    'Translate trading intuition into measurable, documented, repeatable decision processes',
  ],
  aiVocabulary: [
    { term: 'Model', meaning: 'A rulebook learned from data', tradingEquivalent: 'Your strategy, with learned weights' },
    { term: 'Features', meaning: 'The inputs the model sees', tradingEquivalent: 'Indicators: RSI, OI change, VWAP gap, PCR' },
    { term: 'Label', meaning: 'What we want to predict', tradingEquivalent: 'Next-day direction, 5-day volatility' },
    { term: 'Training', meaning: 'Fitting the model to history', tradingEquivalent: 'Building the strategy on past data' },
    { term: 'Validation', meaning: 'Testing on data it has never seen', tradingEquivalent: 'Out-of-sample backtest, paper trading' },
    { term: 'Overfitting', meaning: 'Memorising noise, not signal', tradingEquivalent: 'The curve-fitted backtest that fails live' },
    { term: 'Inference', meaning: 'Running the model on new data', tradingEquivalent: 'Generating today’s live signal' },
    { term: 'Drift', meaning: 'Data no longer looks like history', tradingEquivalent: 'Regime change, e.g., a volatility shock' },
  ],
  mlPipeline: [
    { step: '01', title: 'Collect', details: 'Bhavcopy, ticks, option chain and news' },
    { step: '02', title: 'Clean', details: 'Splits, bonuses, holidays and gaps' },
    { step: '03', title: 'Features', details: 'Returns, RSI, OI, VIX and flows' },
    { step: '04', title: 'Label', details: 'What to predict, over what horizon' },
    { step: '05', title: 'Train', details: 'Fit on the past only' },
    { step: '06', title: 'Walk-forward', details: 'Retrain and test, window by window' },
    { step: '07', title: 'Costs', details: 'STT, brokerage, GST, stamp and slippage' },
    { step: '08', title: 'Paper trade', details: 'Live data, no money at risk' },
    { step: '09', title: 'Go live', details: 'Small size, hard limits, kill switch' },
    { step: '10', title: 'Monitor', details: 'Drift, decay and retraining triggers' },
  ],
  dataLayers: [
    { title: 'End-of-day prices', description: 'NSE bhavcopy: OHLC, volume and delivery percentages. The base layer for daily models.' },
    { title: 'Intraday and tick', description: '1-minute bars and tick-by-tick trades for intraday signals and execution.' },
    { title: 'Derivatives', description: 'Option chain, open interest, implied volatility, PCR and India VIX.' },
    { title: 'Results and events', description: 'Quarterly results, shareholding, corporate actions and NSE announcements.' },
    { title: 'Flows and macro', description: 'FII/DII activity, RBI policy, USD/INR, crude oil and GIFT Nifty.' },
    { title: 'Alternative text', description: 'News, concall transcripts, annual reports and SEBI circulars — fuel for LLMs.' },
  ],
  featureEngineering: [
    { feature: '1-day log return', purpose: 'Price momentum and scale-free directional movement' },
    { feature: '20-day volatility', purpose: 'Risk regime and market stress measurement' },
    { feature: 'RSI(14)', purpose: 'Overbought and oversold conditions' },
    { feature: 'Gap %', purpose: 'Overnight news reaction and price gap' },
    { feature: 'VWAP gap', purpose: 'Intraday buying pressure' },
    { feature: 'OI change %', purpose: 'New positions being built' },
    { feature: 'Put-call ratio', purpose: 'Options market positioning' },
    { feature: 'IV percentile', purpose: 'Whether options are cheap or rich relative to the last year' },
    { feature: '5-day FII flow', purpose: 'Institutional buying and selling direction' },
  ],
  backtestingMistakes: [
    { title: 'Look-ahead bias', description: 'Using data that was not available at the time the trade decision was made.' },
    { title: 'Survivorship bias', description: 'Testing only the names that survived and ignoring the stocks or regimes that disappeared.' },
    { title: 'Data snooping', description: 'Testing many parameter sets and selecting the best result, which creates a false edge by chance.' },
    { title: 'Ignoring costs', description: 'Leaving out STT, brokerage, GST, stamp duty and slippage, which can destroy real performance.' },
  ],
  mlFamilies: [
    { type: 'Regression', purpose: 'Predicts numerical values', example: 'Next-day return or 5-day volatility' },
    { type: 'Classification', purpose: 'Predicts categories', example: 'Market up or down' },
    { type: 'Clustering', purpose: 'Groups similar data points', example: 'Market regimes or similar stocks' },
    { type: 'Reinforcement Learning', purpose: 'Learns from actions and rewards', example: 'Order execution, hedging and sizing' },
  ],
  mlModels: [
    { model: 'Logistic Regression', description: 'Weighted combination of signals for up/down prediction' },
    { model: 'Random Forest', description: 'Combined decision trees for label prediction over complex feature interactions' },
    { model: 'XGBoost / LightGBM', description: 'Gradient-boosted trees that learn from previous errors and handle structured financial data well' },
    { model: 'K-Means', description: 'Finds similar market days or stress regimes by clustering patterns' },
    { model: 'Hidden Markov Model', description: 'Infers hidden market states and can switch strategy logic as conditions change' },
    { model: 'PCA', description: 'Compresses many inputs into a smaller set of underlying risk and sector factors' },
  ],
  ruleBasedVsMl: [
    {
      title: 'Rule-based algorithm',
      snippet: 'IF RSI(14) < 30 AND close > SMA(200) THEN BUY 1 lot STOP 1.5 × ATR',
      description: 'Clear and simple, but the parameters stay fixed while the market changes.'
    },
    {
      title: 'Learned algorithm',
      snippet: 'X = [RSI, ATR, OI_chg, PCR, VIX, FII_flow, … +40 more] p_up = model.predict(X) IF p_up > 0.60 → BUY, size ∝ edge',
      description: 'The model learns which signals matter, how much, and in what combination — from years of NSE history.'
    }
  ],
  llmSummary: [
    { title: 'What it really is', description: 'An LLM predicts the next token after reading a vast share of text, which makes it a superb reader, writer and coder — not a price oracle.' },
    { title: 'Where it helps the desk', description: 'Summarise concalls, triage announcements, classify event materiality, draft research notes and review Python code for backtests and data pipelines.' },
    { title: 'Important rule', description: 'LLMs read and write. Numbers, signals and orders come from tested code, governance and human review.' },
  ],
  promptTechniques: [
    { title: 'Zero-shot', use: 'Quick summaries and clear-cut classification tasks.' },
    { title: 'Few-shot', use: 'Consistent labels and structured extraction with a few solved examples.' },
    { title: 'Step-by-step reasoning', use: 'Multi-step analysis and scenario logic.' },
    { title: 'Structured output', use: 'JSON schemas that can feed databases, workflow tools or downstream models.' },
    { title: 'Prompt chaining', use: 'Split a task into extraction, verification and synthesis prompts.' },
    { title: 'Self-check', use: 'A second prompt audits the first to catch invented numbers early.' },
    { title: 'Context and recency control', use: 'Limit the model to the relevant transcript, filing or market window to reduce hallucination.' },
    { title: 'Tool-augmented prompting', use: 'Have the model call APIs or data tools only after a simple verification step.' },
  ],
  retrievalStack: [
    { title: 'Embeddings', description: 'An embedding model turns text into vectors; similar meaning lands close together even without shared words.' },
    { title: 'Vector database', description: 'Stores millions of embeddings and retrieves the nearest matches in milliseconds.' },
    { title: 'Hybrid retrieval', description: 'Combines semantic search with keyword, metadata and recency filters so the best evidence is found first.' },
    { title: 'RAG', description: 'Grounds answers in private documents and current sources, with citations and traceability to the underlying files.' },
    { title: 'MCP', description: 'A standard connection layer that lets AI apps access data, tools and workflows through one interface.' },
  ],
  agenticAi: [
    { title: 'Plan', description: 'Break the goal into sub-steps before acting.' },
    { title: 'Act', description: 'Call tools and APIs through MCP to retrieve data or run analyses.' },
    { title: 'Observe', description: 'Read the returned results and assess whether the goal was reached.' },
    { title: 'Reflect', description: 'Loop again if more work is needed or risk thresholds are not satisfied.' },
  ],
  governanceRules: [
    'Every algo order carries an exchange-issued Algo ID',
    'Above 10 orders per second per exchange, the strategy must be registered',
    'Use broker-supervised, static-IP, whitelisted setups for API access',
    'Maintain a model register with owner, version, data and last test',
    'Use human approval for AI-proposed orders and execution',
    'Deploy kill switches, hard limits and drift monitoring as default controls',
    'Version prompts, tools and retrieval corpora so every answer can be traced and reviewed',
    'Never let an AI-generated alert or recommendation bypass the same risk and compliance workflow as a human analyst',
  ],
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

function MarketSignalChart() {
  return (
    <svg viewBox="0 0 420 180" className="h-36 w-full rounded-[22px] bg-[var(--surface-strong)] p-2" role="img" aria-label="Market signal chart">
      <defs>
        <linearGradient id="signalGlow" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
        </linearGradient>
      </defs>
      <g stroke="rgba(148,163,184,0.2)" strokeWidth="1">
        {[20, 60, 100, 140, 180].map((y) => <line key={y} x1="0" y1={y} x2="420" y2={y} />)}
        {[30, 90, 150, 210, 270, 330, 390].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="180" />)}
      </g>
      <path d="M0 138 C60 120, 82 126, 120 90 S180 30, 220 56 S280 120, 330 76 S390 34, 420 40 L420 180 L0 180 Z" fill="url(#signalGlow)" opacity="0.9" />
      <path d="M0 138 C60 120, 82 126, 120 90 S180 30, 220 56 S280 120, 330 76 S390 34, 420 40" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      {[0, 90, 180, 270, 360].map((x, index) => (
        <circle key={x} cx={x + 30} cy={[138, 120, 90, 76, 40][index]} r="4" fill="var(--text-primary)" />
      ))}
    </svg>
  );
}

function DataFlowGraphic() {
  return (
    <svg viewBox="0 0 520 220" className="h-52 w-full rounded-[22px] bg-[var(--surface-strong)] p-2" role="img" aria-label="Trading data pipeline">
      <defs>
        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="rgba(148,163,184,0.9)" />
        </marker>
      </defs>
      <g fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="2" markerEnd="url(#arrowHead)">
        <path d="M70 110 H150" />
        <path d="M170 110 H250" />
        <path d="M270 110 H350" />
        <path d="M370 110 H450" />
      </g>
      <g>
        {[
          ['Bhavcopy', 'Tick with', 'News', 'Signals', 'Execution'],
          ['OHLCV', 'Options', 'Filings', 'Model', 'Orders'],
        ].map((group, idx) => (
          <g key={group[0]}>
            <rect x={idx * 150 + 10} y={72} width={90} height={76} rx={14} fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.45)" />
            <text x={idx * 150 + 55} y={90} textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">{group[0]}</text>
            <text x={idx * 150 + 55} y={109} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{group[1]}</text>
            <text x={idx * 150 + 55} y={126} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{group[2]}</text>
            <text x={idx * 150 + 55} y={143} textAnchor="middle" fill="var(--accent)" fontSize="10">{group[3]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function EmbeddingFlowGraphic() {
  return (
    <svg viewBox="0 0 560 220" className="h-52 w-full rounded-[22px] bg-[var(--surface-strong)] p-3" role="img" aria-label="Vector search and RAG illustration">
      <g>
        <rect x="25" y="80" width="120" height="60" rx="16" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
        <text x="85" y="106" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Documents</text>
        <text x="85" y="122" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Reports + calls</text>

        <rect x="200" y="38" width="160" height="58" rx="16" fill="rgba(22,163,74,0.12)" stroke="rgba(16,185,129,0.9)" />
        <text x="280" y="64" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Chunk + Embed</text>
        <text x="280" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Meaning into vectors</text>

        <rect x="200" y="120" width="160" height="58" rx="16" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.9)" />
        <text x="280" y="146" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">Vector DB</text>
        <text x="280" y="162" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Nearest match retrieval</text>

        <rect x="410" y="82" width="120" height="60" rx="16" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
        <text x="470" y="108" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">LLM answer</text>
        <text x="470" y="124" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">with citations</text>
      </g>
      <g fill="none" stroke="rgba(148,163,184,0.8)" strokeWidth="2" markerEnd="url(#arrowHead)">
        <path d="M145 110 H200" />
        <path d="M360 67 H410" />
        <path d="M360 150 H410" />
      </g>
    </svg>
  );
}

function AgentLoopGraphic() {
  return (
    <svg viewBox="0 0 520 220" className="h-52 w-full rounded-[22px] bg-[var(--surface-strong)] p-3" role="img" aria-label="Agent loop diagram">
      <defs>
        <marker id="agentArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="rgba(148,163,184,0.9)" />
        </marker>
      </defs>
      <g fill="none" stroke="rgba(148,163,184,0.75)" strokeWidth="2" markerEnd="url(#agentArrow)">
        <path d="M120 60 C200 30, 180 30, 265 58" />
        <path d="M120 146 C200 175, 180 175, 265 150" />
        <path d="M368 74 L435 110 L368 146" />
      </g>
      <g>
        <rect x="22" y="40" width="100" height="52" rx="12" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
        <text x="72" y="65" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">PLAN</text>
        <text x="72" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Break goals</text>

        <rect x="270" y="24" width="105" height="60" rx="12" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.9)" />
        <text x="322" y="50" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">ACT</text>
        <text x="322" y="67" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Tool via MCP</text>

        <rect x="270" y="120" width="105" height="58" rx="12" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.9)" />
        <text x="322" y="146" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">OBSERVE</text>
        <text x="322" y="162" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Read result</text>

        <rect x="430" y="92" width="70" height="40" rx="12" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
        <text x="465" y="115" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">REFLECT</text>
      </g>
    </svg>
  );
}

function GovernanceGraphic() {
  return (
    <svg viewBox="0 0 520 180" className="h-40 w-full rounded-[22px] bg-[var(--surface-strong)] p-3" role="img" aria-label="Governance and controls diagram">
      <g>
        <circle cx="90" cy="88" r="42" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.9)" strokeWidth="2" />
        <path d="M90 57 L111 69 L111 95 C111 112 102 124 90 130 C78 124 69 112 69 95 L69 69 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <text x="90" y="95" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">AI</text>

        <g fill="none" stroke="rgba(148,163,184,0.8)" strokeWidth="2" markerEnd="url(#arrowHead)">
          <path d="M132 88 H210" />
          <path d="M252 88 H330" />
          <path d="M372 88 H450" />
        </g>

        {[
          ['Kill switch', 'Hard limits'],
          ['Human approval', 'Audit log'],
          ['Drift monitor', 'Model register'],
        ].map(([a, b], idx) => (
          <g key={a}>
            <rect x={200 + idx * 160} y={48} width={120} height={80} rx={16} fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
            <text x={260 + idx * 160} y={70} textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">{a}</text>
            <text x={260 + idx * 160} y={90} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{b}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function ModelFamiliesGraphic() {
  return (
    <svg viewBox="0 0 620 220" className="h-52 w-full rounded-[22px] bg-[var(--surface-strong)] p-3" role="img" aria-label="Machine learning models overview">
      <g>
        {[
          ['Regression', 40, 70],
          ['Classification', 180, 70],
          ['Clustering', 330, 70],
          ['Reinforcement', 480, 70],
        ].map(([label, x, y]) => (
          <g key={label}>
            <rect x={x} y={y} width={110} height={80} rx={14} fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.5)" />
            <text x={x + 55} y={y + 35} textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">{label}</text>
            <text x={x + 55} y={y + 58} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">returns</text>
          </g>
        ))}
      </g>
      <g>
        <circle cx="120" cy="170" r="20" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.9)" />
        <circle cx="310" cy="170" r="20" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.9)" />
        <circle cx="500" cy="170" r="20" fill="rgba(251,146,60,0.12)" stroke="rgba(251,146,60,0.9)" />
        <text x="120" y="176" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">LR</text>
        <text x="310" y="176" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">RF</text>
        <text x="500" y="176" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">RL</text>
      </g>
    </svg>
  );
}

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
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Course map</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Six modules, one capstone</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ai900ProgrammeData.moduleOverview.map((module) => (
            <div key={module.name} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 sm:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{module.name}</div>
              <h3 className="mt-3 text-xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">{module.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{module.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                {module.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 text-[var(--accent)]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-5 sm:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Capstone</p>
          <p className="mt-3 text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            Build, backtest and paper-trade an ML + LLM signal on real NSE data, then defend the result with evidence, risk controls and production-aware decision making.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Learning methodology</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">How the programme is taught</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ai900ProgrammeData.methodology.map((item, index) => (
            <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-bold text-[var(--accent)]">0{index + 1}</div>
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-strong)] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Toolkit</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">The tools we use in practice</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
              {ai900ProgrammeData.toolkit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--accent)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-[var(--border-soft)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-strong)] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Outcomes</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">What you leave able to do</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
              {ai900ProgrammeData.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--accent)]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">AI for trading</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">AI vocabulary translated into trading</h2>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)]">
          <div className="grid grid-cols-1 border-b border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:grid-cols-4 sm:px-6 sm:text-xs">
            <div>AI term</div>
            <div>Meaning</div>
            <div className="hidden sm:block">Trading equivalent</div>
            <div className="hidden sm:block">Why it matters</div>
          </div>
          {ai900ProgrammeData.aiVocabulary.map((item) => (
            <div key={item.term} className="grid grid-cols-1 border-b border-[var(--border-soft)] px-4 py-4 last:border-b-0 sm:grid-cols-4 sm:px-6">
              <div className="pb-2 text-sm font-semibold text-[var(--text-primary)] sm:pb-0">{item.term}</div>
              <div className="pb-2 text-sm text-[var(--text-secondary)] sm:pb-0">{item.meaning}</div>
              <div className="pb-2 text-sm text-[var(--text-secondary)] sm:pb-0">{item.tradingEquivalent}</div>
              <div className="text-sm text-[var(--text-secondary)]">
                {item.term === 'Overfitting' && 'Historical pattern memorised instead of structural edge'}
                {item.term === 'Validation' && 'Out-of-sample testing before real exposure'}
                {item.term === 'Drift' && 'Regime change and signal deterioration'}
                {item.term === 'Training' && 'Fit the strategy to past data only'}
                {item.term === 'Inference' && 'Generate live trading signal from current inputs'}
                {item.term === 'Features' && 'Inputs the model actually sees'}
                {item.term === 'Label' && 'The target the model is trying to predict'}
                {item.term === 'Model' && 'The learned rulebook that produces decisions'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Rule-based vs ML</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Traditional algorithms versus learned models</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {ai900ProgrammeData.ruleBasedVsMl.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 rounded-xl bg-[var(--surface-strong)] p-4 font-mono text-xs leading-6 text-[var(--text-primary)] sm:text-sm">{item.snippet}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">ML workflow</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">From research to production</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {ai900ProgrammeData.mlPipeline.map((item) => (
            <div key={item.step} className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{item.step}</div>
              <h3 className="mt-3 text-base font-bold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Data foundation</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Six layers of Indian market data</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ai900ProgrammeData.dataLayers.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-5 text-sm leading-7 text-[var(--text-secondary)]">
          Rule #1: every record is stamped with when it was actually available to you — not just the date it describes.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Feature engineering</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">The inputs the model actually sees</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ai900ProgrammeData.featureEngineering.map((item) => (
            <div key={item.feature} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-base font-bold tracking-[-0.02em] text-[var(--text-primary)]">{item.feature}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Backtesting risk</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Four ways a great backtest can lie</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {ai900ProgrammeData.backtestingMistakes.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Machine learning</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Four families of ML and core models</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {ai900ProgrammeData.mlFamilies.map((item) => (
            <div key={item.type} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.type}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">What it does:</span> {item.purpose}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Trading example:</span> {item.example}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ai900ProgrammeData.mlModels.map((item) => (
            <div key={item.model} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-base font-bold tracking-[-0.02em] text-[var(--text-primary)]">{item.model}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 text-sm leading-7 text-[var(--text-secondary)]">
          Start simple: if a logistic regression model does not provide a useful predictive edge on Indian market data, a more complex deep-learning model may simply memorise noise instead of capturing signal.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">LLMs and research workflows</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Generative AI for the trading desk</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {ai900ProgrammeData.llmSummary.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">Where LLMs help the desk today</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Summarise 200 concall transcripts overnight',
              'Classify NSE announcements by type and materiality',
              'Turn news and filings into numeric sentiment scores',
              'Write, explain and review Python for backtests and data pipelines',
              'Draft research notes and post-trade reports from structured data',
              'Explain SEBI and exchange circulars for compliance review',
            ].map((useCase) => (
              <div key={useCase} className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4 text-sm leading-6 text-[var(--text-secondary)]">
                {useCase}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">Anatomy of a production prompt</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {[
              ['Role', 'Banking analyst covering PSU banks.'],
              ['Context', 'Use only the Q2 FY27 transcript and no outside source.'],
              ['Task', 'Extract NIM and slippage guidance with a direct quote for each point.'],
              ['Constraints', 'No forecasts. If missing, return null.'],
              ['Output format', '{"metric": "...", "value": "...", "quote": "..."}'],
              ['Examples', 'One or two solved cases so the answer stays consistent.'],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{label}</div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">Six techniques for financial work</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ai900ProgrammeData.promptTechniques.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4">
                <div className="text-base font-bold text-[var(--text-primary)]">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Retrieval and connected AI</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Vector search, RAG and MCP</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {ai900ProgrammeData.retrievalStack.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">RAG in practice</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            Questions such as “Which banks guided lower slippages?” are embedded into the same vector space as the internal corpus, the nearest passages are retrieved, and the model answers from trusted sources with traceability back to the document and date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Agentic AI</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Planning, acting and reflecting</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ai900ProgrammeData.agenticAi.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{item.title}</div>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)]">Multi-agent research desk</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            An orchestrator splits the task, data tools pull prices and flows, the analyst reads filings and concalls via RAG, the quant runs backtests and the risk and compliance layers verify exposure, margin and regulatory fit before any order moves forward.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Governance</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-3 sm:text-3xl">Guardrails for AI on the trading desk</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ai900ProgrammeData.governanceRules.map((item) => (
            <div key={item} className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-sm leading-6 text-[var(--text-secondary)]">
              {item}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
