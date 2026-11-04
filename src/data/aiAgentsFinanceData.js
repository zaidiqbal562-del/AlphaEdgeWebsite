export const aiAgentsFinanceProgrammeData = {
  code: 'AAF-200',
  title: 'Certificate in AI and Agents in Finance',
  duration: '20 weeks · 5 months',
  load: 'Weekly live sessions · hands-on practice',
  modules: '8 · plus capstone project',
  award: 'AlphaEdge Certificate of Completion',
  subtitle: 'Five months. Eight modules. Machine learning, forecasting, generative AI, retrieval and multi-agent workflows applied to real financial problems — finance first, with no prior coding background required.',
  moduleOverview: [
    {
      name: 'Module 1',
      title: 'Foundations of AI and data science in finance',
      description: 'How AI and data science support modern financial decisions, with first hands-on exposure to analytics and prompting.',
      points: ['Classical ML, generative AI and agentic AI compared', 'Market, macro, transaction and alternative data', 'Python basics, returns, volatility and drawdowns']
    },
    {
      name: 'Module 2',
      title: 'Generative and agentic AI for finance',
      description: 'How LLMs and agents are designed, grounded, evaluated and deployed responsibly in financial services.',
      points: ['Prompt engineering, structured output and hallucination risk', 'RAG over regulatory, policy and financial documents', 'ReAct, tools, memory and multi-agent orchestration']
    },
    {
      name: 'Module 3',
      title: 'Financial data analytics and visualisation',
      description: 'Explore, summarise and visualise financial data so insights can be communicated clearly.',
      points: ['Time series fundamentals and data cleaning', 'Rolling averages, momentum and volatility features', 'Dashboard design for financial audiences']
    },
    {
      name: 'Module 4',
      title: 'Machine learning for finance',
      description: 'Practical ML methods through finance use cases, and how generative AI augments, but never replaces, validated models.',
      points: ['Regression and classification for credit risk and default', 'Fraud detection and predictive signals', 'Evaluation, leakage, backtesting pitfalls and interpretability']
    },
    {
      name: 'Module 5',
      title: 'Time series and forecasting',
      description: 'When forecasting helps, when it misleads, and how to turn forecast outputs into clear management narratives.',
      points: ['Decomposition, ARIMA and volatility modelling', 'ML-based forecasting and its limits in markets', 'Generative AI for executive commentary and NLP on filings']
    },
    {
      name: 'Module 6',
      title: 'AI in trading and asset management',
      description: 'Systematic investing and trading workflows, and the role of LLMs in research without replacing quantitative validation.',
      points: ['Momentum and mean-reversion strategies', 'Backtesting, performance evaluation and portfolio construction', 'LLM-assisted research and AI-supported what-if analysis']
    },
    {
      name: 'Module 7',
      title: 'FinTech, AI product design and the builder stack',
      description: 'Connect data science with business and product thinking, and prototype AI-enabled financial products without a large engineering team.',
      points: ['AI in payments, lending, insurtech, wealthtech and neobanks', 'Unit economics, CAC, LTV and build-versus-buy decisions', 'No-code, agent and workflow tools for MVP prototyping']
    },
    {
      name: 'Module 8',
      title: 'Risk, ethics and regulation',
      description: 'Governance and responsible AI in finance, closing with an integrated capstone presentation.',
      points: ['Model risk, validation and explainability', 'Bias, fairness and regulatory considerations', 'Audit trails, accountability and human oversight for agents']
    },
  ],
  methodology: [
    {
      title: 'Finance-first learning',
      description: 'Every technique is introduced through a financial problem: risk scoring, fraud detection, forecasting, research and product design.'
    },
    {
      title: 'Live and hands-on',
      description: 'Weekly live interactive sessions combine concept teaching, guided practice and query resolution, so learners build as they learn.'
    },
    {
      title: 'Validation before trust',
      description: 'Predictions come from validated models. Generative AI supports communication, reasoning and reporting, not calculation.'
    },
    {
      title: 'Responsible by design',
      description: 'Human oversight, explainability and governance are woven through every module, not saved for the end.'
    },
  ],
  toolkit: [
    'Python for financial data analysis',
    'Prompt engineering and structured-output workflows',
    'Machine learning workflows for credit, fraud and forecasting',
    'RAG pipelines for regulatory and financial documents',
    'Agent and multi-agent workflow tools',
    'No-code and AI-native builders for MVP prototyping',
  ],
  outcomes: [
    'Map the AI landscape in finance and identify where data science, generative AI and agents add value',
    'Analyse financial datasets and communicate insights for business decisions',
    'Build predictive models, RAG pipelines and multi-agent workflows on financial use cases',
    'Apply forecasting techniques and turn outputs into clear management narratives',
    'Conceptualise and prototype AI-enabled financial products',
    'Assess model risk, fairness and regulatory exposure, and keep human oversight at the centre',
  ],
  audience: [
    { title: 'Banking, finance and insurance professionals', description: 'Analysts and associates applying ML, forecasting and generative AI to risk scoring, fraud detection and reporting.' },
    { title: 'Investment and trading professionals', description: 'Traders, portfolio managers and researchers using AI to speed up research, hypothesis generation and data analysis.' },
    { title: 'Senior finance leaders', description: 'Executives who lead AI-enabled teams and need to judge value, build-versus-buy and governance.' },
    { title: 'FinTech founders and product managers', description: 'Builders who want to design and prototype AI-enabled products without a large engineering team.' },
    { title: 'AI and technology professionals in BFSI', description: 'Engineers and data professionals applying ML, generative AI and agentic AI to financial problems.' },
  ],
  aiVocabulary: [
    { term: 'Model', meaning: 'A rulebook learned from data', financeEquivalent: 'A credit score, with weights learned from history' },
    { term: 'Features', meaning: 'The inputs the model sees', financeEquivalent: 'Income, utilisation, momentum, volatility' },
    { term: 'Label', meaning: 'What we want to predict', financeEquivalent: 'Loan default, fraud flag, next-quarter revenue' },
    { term: 'Training', meaning: 'Fitting the model to history', financeEquivalent: 'Building the scorecard on past customers' },
    { term: 'Validation', meaning: 'Testing on data it has never seen', financeEquivalent: 'Out-of-sample and backtest review' },
    { term: 'Overfitting', meaning: 'Memorising noise, not signal', financeEquivalent: 'The model that looks perfect on history and fails live' },
    { term: 'Hallucination', meaning: 'A fluent answer that is not grounded in fact', financeEquivalent: 'An invented figure in a generated report' },
    { term: 'Agent', meaning: 'An AI that plans, uses tools and acts toward a goal', financeEquivalent: 'A research assistant that pulls filings, news and prices' },
  ],
  mlPipeline: [
    { step: '01', title: 'Frame', details: 'Define the business question and decision' },
    { step: '02', title: 'Collect', details: 'Market, macro, transaction and alternative data' },
    { step: '03', title: 'Clean', details: 'Gaps, outliers and point-in-time consistency' },
    { step: '04', title: 'Features', details: 'Rolling averages, momentum and volatility' },
    { step: '05', title: 'Train', details: 'Fit on the past only' },
    { step: '06', title: 'Validate', details: 'Out-of-sample testing and leakage checks' },
    { step: '07', title: 'Interpret', details: 'Feature importance and explainability' },
    { step: '08', title: 'Communicate', details: 'Dashboards and management narratives' },
    { step: '09', title: 'Govern', details: 'Model risk review and human sign-off' },
    { step: '10', title: 'Monitor', details: 'Performance decay and retraining triggers' },
  ],
  dataLayers: [
    { title: 'Market data', description: 'Prices, returns, volumes and volatility: the base layer for analytics and forecasting.' },
    { title: 'Macroeconomic data', description: 'Rates, inflation, growth and currency indicators that shape regimes and forecasts.' },
    { title: 'Transaction data', description: 'Payments, lending and account activity used for credit scoring and fraud detection.' },
    { title: 'Company filings', description: 'Statements, earnings calls and disclosures: the raw material for NLP and retrieval.' },
    { title: 'News and text', description: 'Articles and commentary used for sentiment analysis and event monitoring.' },
    { title: 'Alternative data', description: 'Non-traditional signals that add context beyond standard financial datasets.' },
  ],
  featureEngineering: [
    { feature: 'Daily return', purpose: 'Scale-free price movement' },
    { feature: 'Rolling average', purpose: 'Smooths noise to reveal trend' },
    { feature: 'Momentum', purpose: 'Persistence of recent direction' },
    { feature: 'Rolling volatility', purpose: 'Risk regime and market stress' },
    { feature: 'Drawdown', purpose: 'Depth and duration of losses' },
    { feature: 'Utilisation and repayment history', purpose: 'Credit behaviour for risk scoring' },
    { feature: 'Transaction velocity', purpose: 'Unusual activity for fraud detection' },
  ],
  commonPitfalls: [
    { title: 'Data leakage', description: 'Letting information from the future or the label slip into training, which inflates results.' },
    { title: 'Overfitting', description: 'Tuning a model until it memorises history and fails on new data.' },
    { title: 'Weak backtesting', description: 'Ignoring costs, regimes or out-of-sample testing when judging a strategy.' },
    { title: 'Unchecked generative output', description: 'Trusting an LLM for numbers or conclusions without validated code and review.' },
  ],
  mlFamilies: [
    { type: 'Regression', purpose: 'Predicts numerical values', example: 'Revenue, loss given default or next-period volatility' },
    { type: 'Classification', purpose: 'Predicts categories', example: 'Default or no default, fraud or genuine' },
    { type: 'Time series models', purpose: 'Forecast values that evolve over time', example: 'Demand, rates or volatility' },
    { type: 'Language models', purpose: 'Read, summarise and generate text', example: 'Earnings calls, filings and research notes' },
  ],
  responsibilityBoundaries: [
    { title: 'Machine learning', description: 'Calculation and prediction: scores, forecasts and probabilities from validated models.' },
    { title: 'Large language models', description: 'Communication, reasoning support and reporting, always grounded in sourced material.' },
    { title: 'Humans', description: 'Judgement, approval and accountability for decisions that affect customers and capital.' },
  ],
  llmSummary: [
    { title: 'What it really is', description: 'An LLM predicts the next token, which makes it a strong reader, writer and assistant, not a source of verified numbers.' },
    { title: 'Where it helps', description: 'Summarise filings and calls, draft commentary, classify sentiment, support research and structure unstructured documents.' },
    { title: 'Important rule', description: 'LLMs read and write. Figures and decisions come from validated models, tested code and human review.' },
  ],
  retrievalStack: [
    { title: 'Embeddings', description: 'Text is turned into vectors so similar meaning sits close together, even without shared words.' },
    { title: 'Retrieval', description: 'The most relevant passages are fetched from regulatory, policy and financial documents.' },
    { title: 'RAG', description: 'Grounds the model’s answer in retrieved sources, with traceability back to the underlying documents.' },
    { title: 'Tool use', description: 'Agents call financial APIs and data tools instead of guessing, and report what they found.' },
  ],
  agenticAi: [
    { title: 'Plan', description: 'Break the goal into sub-steps before acting.' },
    { title: 'Act', description: 'Call tools, APIs and retrieval to gather data or run analysis.' },
    { title: 'Observe', description: 'Read the results and check whether the goal has been met.' },
    { title: 'Review', description: 'Loop again or hand over to a human when risk or uncertainty is high.' },
  ],
  agentRisks: [
    { title: 'Infinite loops', description: 'Agents that keep retrying without converging on an answer.' },
    { title: 'Compounding errors', description: 'A small early mistake that grows as later steps build on it.' },
    { title: 'Conflicting outputs', description: 'Multiple agents returning inconsistent results that need reconciliation.' },
  ],
  governanceRules: [
    'Keep a human in the loop for decisions that affect customers or capital',
    'Validate models independently before and after deployment',
    'Document model owner, version, data and last test in a model register',
    'Make outputs explainable to the people who rely on them',
    'Test for bias and fairness, and record the results',
    'Keep audit trails of prompts, tools, sources and agent actions',
    'Define clear accountability chains for every AI-assisted decision',
    'Treat AI-generated recommendations with the same review standards as human work',
  ],
  sampleProjects: [
    {
      title: 'Agentic Research Assistant',
      description: 'An assistant that decides whether to answer from annual reports, internal notes or live financial APIs.',
      concepts: ['Agentic RAG', 'Dynamic tool selection', 'Long-context reasoning', 'Memory management']
    },
    {
      title: 'Portfolio Research Agent',
      description: 'An agent that gathers news and financials, scores sentiment and produces an evidence-backed recommendation.',
      concepts: ['Financial APIs', 'ReAct', 'Agent planning', 'Structured output']
    },
    {
      title: 'Financial Sentiment Analyser',
      description: 'An application that classifies news, call transcripts or posts as positive, neutral or negative, with a short explanation.',
      concepts: ['Prompt engineering', 'Financial NLP', 'LLMs', 'Structured output']
    },
    {
      title: 'Automated Due Diligence Pipeline',
      description: 'A multi-agent system that reviews financials, legal documents and compliance risks, then compiles one report.',
      concepts: ['Multi-agent systems', 'Document intelligence', 'Workflow automation', 'Report generation']
    },
    {
      title: 'Market News Intelligence Agent',
      description: 'An agent that monitors news, ranks key events, analyses sentiment and prepares a daily briefing.',
      concepts: ['News APIs', 'Agentic workflows', 'Sentiment analysis', 'Structured output']
    },
  ],
  terms: [
    {
      number: 1,
      title: 'Foundations and Generative AI',
      modules: [
        {
          number: 1,
          title: 'Foundations of AI and data science in finance',
          weeks: [
            { number: 1, title: 'The AI landscape in finance', topics: ['Evolution of data-driven finance', 'Classical ML, generative AI and agentic AI', 'Types of financial data'] },
            { number: 2, title: 'Python, data and prompting', topics: ['Introduction to Python', 'Data pipelines and APIs', 'Returns, volatility and drawdowns'] },
          ]
        },
        {
          number: 2,
          title: 'Generative and agentic AI for finance',
          weeks: [
            { number: 3, title: 'How LLMs work', topics: ['Prompt engineering', 'Structured output', 'Hallucination and data leakage'] },
            { number: 4, title: 'Grounding with RAG and ReAct', topics: ['RAG architecture', 'ReAct framework', 'Auditable financial reasoning'] },
            { number: 5, title: 'Agents and orchestration', topics: ['Tools, memory and planning', 'Multi-agent workflows', 'Human-in-the-loop principles'] },
          ]
        }
      ]
    },
    {
      number: 2,
      title: 'Data and Machine Learning',
      modules: [
        {
          number: 3,
          title: 'Financial data analytics and visualisation',
          weeks: [
            { number: 6, title: 'Time series and data preparation', topics: ['Time series fundamentals', 'Data cleaning', 'Preprocessing'] },
            { number: 7, title: 'Features and dashboards', topics: ['Rolling, momentum and volatility features', 'Visual analytics', 'Dashboard design'] },
          ]
        },
        {
          number: 4,
          title: 'Machine learning for finance',
          weeks: [
            { number: 8, title: 'Supervised learning', topics: ['Regression and classification', 'Credit risk scoring', 'Loan default prediction'] },
            { number: 9, title: 'Fraud and predictive signals', topics: ['Fraud detection fundamentals', 'Predictive analytics for returns', 'ML and generative AI for underwriting'] },
            { number: 10, title: 'Evaluation and interpretability', topics: ['Model evaluation in finance', 'Overfitting, leakage and backtesting pitfalls', 'Feature importance and interpretability'] },
          ]
        }
      ]
    },
    {
      number: 3,
      title: 'Forecasting and Trading',
      modules: [
        {
          number: 5,
          title: 'Time series and forecasting',
          weeks: [
            { number: 11, title: 'Forecasting foundations', topics: ['Forecasting versus decision-making', 'Time series decomposition', 'ARIMA and related frameworks'] },
            { number: 12, title: 'Volatility, ML and narrative', topics: ['Volatility modelling and ML forecasting', 'Generative AI for management narratives', 'NLP on earnings calls and filings'] },
          ]
        },
        {
          number: 6,
          title: 'AI in trading and asset management',
          weeks: [
            { number: 13, title: 'Systematic trading', topics: ['Overview of systematic trading', 'Momentum strategies', 'Mean-reversion strategies'] },
            { number: 14, title: 'Backtesting and portfolios', topics: ['Backtesting basics', 'Performance evaluation', 'Portfolio construction and risk-return trade-offs'] },
            { number: 15, title: 'AI in asset management', topics: ['Role of AI in asset management', 'LLM-assisted research synthesis', 'Hypothesis generation and what-if analysis'] },
          ]
        }
      ]
    },
    {
      number: 4,
      title: 'Products, Governance and Capstone',
      modules: [
        {
          number: 7,
          title: 'FinTech, AI product design and the builder stack',
          weeks: [
            { number: 16, title: 'FinTech and business models', topics: ['AI in payments, lending, insurtech and wealthtech', 'FinTech ecosystem and competition', 'Unit economics, CAC and LTV'] },
            { number: 17, title: 'Designing and prototyping AI products', topics: ['Product thinking and AI-assisted specifications', 'No-code and agent builder tools', 'Cost, latency and build-versus-buy'] },
          ]
        },
        {
          number: 8,
          title: 'Risk, ethics and regulation',
          weeks: [
            { number: 18, title: 'Model risk and explainability', topics: ['Model risk and validation', 'Explainability and transparency', 'Bias, fairness and responsible AI'] },
            { number: 19, title: 'Regulation and agent governance', topics: ['Regulatory considerations', 'Governance challenges in agentic AI', 'Accountability, audit trails and human oversight'] },
            { number: 20, title: 'Capstone presentations', topics: ['Integrated project presentations', 'Evaluation and feedback', 'Next steps'] },
          ]
        }
      ]
    }
  ]
};
