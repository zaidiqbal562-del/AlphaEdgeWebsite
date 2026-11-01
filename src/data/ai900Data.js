export const ai900ProgrammeData = {
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

export const assessmentBreakdown = [
  { label: 'Module Projects', value: '40%', description: 'Defended systems across 13 modules' },
  { label: 'Capstone', value: '30%', description: '17-week applied research project' },
  { label: 'Participation', value: '20%', description: 'Engagement and collaboration' },
  { label: 'Final Assessment', value: '10%', description: 'Comprehensive evaluation' },
];