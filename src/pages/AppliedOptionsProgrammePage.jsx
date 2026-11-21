import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import { ChartCard } from '../components/Ai900Charts';

const days = [
	{
		title: 'Applied derivative tools and risk/reward',
		topics: [
			'Applied financial derivative tools in financial markets and their applications',
			'Risk/reward dynamics of derivatives and the language of futures and options',
			'Payoff structures in terms of profit/loss at and before expiry',
			'The realities of unlimited profit and loss in futures and options',
		],
	},
	{
		title: 'Volatility and derivative pricing',
		topics: [
			'Understanding volatility, its mathematics and derivative pricing models',
			'Applied methods for pricing futures and options',
			'Cost of carry, backwardation, contango, implied yield and futures chains',
			'Decision-making tools for option buying and option selling',
		],
	},
	{
		title: 'Arbitrage and option pricing factors',
		topics: [
			'Risk-free profit concepts through futures arbitrage and futures chains',
			'Factors impacting option prices before and at expiration',
			'Option sensitivities: Delta, Gamma, Vega, Theta and Rho',
			'Applying speed versus time in volatility for option pricing',
			'Option elasticity and its application to maximizing returns',
		],
	},
	{
		title: 'Higher Greeks and risk management',
		topics: [
			'Higher-order Greeks: Delta Bleed, Charm, Dvega and Dgamma',
			'Risk management tools using futures and options, VaR, IVR and IVP',
			'Delta-neutral and gamma-neutral option portfolio strategies',
			'Directional, semi-directional, synthetic and market-neutral option strategies',
			'Focused strategies for options expiry with controlled risk',
		],
	},
	{
		title: 'Technical tools and position management',
		topics: [
			'Using SMA, EMA, Bollinger Bands, CPR and statistical indicators with options',
			'Applying options for market direction prediction',
			'Position management integrated with risk management',
			'Money management, transaction costing and margin requirements',
		],
	},
	{
		title: 'Volatility, settlement and profitability',
		topics: [
			'Open interest and put-call ratio: understanding their limitations',
			'Volatility, volatility skew and strike-price roles in options trading',
			'Volatility-based strategies',
			'Physical settlement mechanisms for futures and options',
			'Transaction cost, CAS and their impact on profitability',
			'Doubt-clearing session',
		],
	},
];

const instructorCapabilities = [
	'Derivatives trading and research',
	'Portfolio management and arbitrage trading models',
	'Directional trading using technical, quantitative and algorithmic strategies',
	'Analytics algorithms and automated trading systems',
	'Automated market analytics and quantitative execution',
	'Technical and fundamental modelling',
	'Investment experience across global markets and asset classes',
];

const benefits = [
	'Understand futures and options payoff structures before and at expiry',
	'Apply Greeks and higher-order Greeks to risk decisions',
	'Use volatility, pricing concepts and futures chains in market analysis',
	'Build and assess directional, neutral and defined-risk strategies',
	'Integrate technical indicators with options position management',
];

function PayoffGraphic() {
	return (
		<svg
			viewBox="0 0 720 260"
			role="img"
			aria-label="Futures and options payoff profile"
			className="h-auto min-w-[620px] w-full"
		>
			<defs>
				<linearGradient id="payoffArea" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#22c55e" stopOpacity="0.32" />
					<stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
				</linearGradient>
			</defs>
			<g stroke="var(--border-soft)" strokeWidth="1">
				<line x1="50" y1="220" x2="680" y2="220" />
				<line x1="50" y1="35" x2="50" y2="220" />
				<line x1="50" y1="128" x2="680" y2="128" strokeDasharray="5 7" />
				<line x1="360" y1="35" x2="360" y2="220" strokeDasharray="5 7" />
			</g>
			<path
				d="M55 202 C150 195 220 180 290 150 C330 132 350 128 360 128 C390 128 420 126 455 118 C520 105 600 82 670 48 L670 220 L55 220 Z"
				fill="url(#payoffArea)"
			/>
			<path
				d="M55 202 C150 195 220 180 290 150 C330 132 350 128 360 128 C390 128 420 126 455 118 C520 105 600 82 670 48"
				fill="none"
				stroke="#22c55e"
				strokeWidth="5"
				strokeLinecap="round"
			/>
			<circle cx="360" cy="128" r="7" fill="var(--page-bg)" stroke="#22c55e" strokeWidth="4">
				<animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
			</circle>
			<g fill="var(--text-muted)" fontSize="12">
				<text x="52" y="242">Lower</text>
				<text x="346" y="242">Expiry</text>
				<text x="640" y="242">Higher</text>
				<text x="8" y="132">P/L</text>
			</g>
		</svg>
	);
}

export default function AppliedOptionsProgrammePage() {
	return (
		<Layout
			title="Applied Options & Trading Strategies with Derivative Analytics | AlphaEdge"
			description="A 25-hour applied options and derivatives programme covering pricing, Greeks, volatility, arbitrage, risk management and trading strategies."
		>
			<Section>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<Reveal as="p" className={T.eyebrow}>
							Applied programme · Derivative analytics
						</Reveal>
						<Reveal
							as="h1"
							delay={100}
							className="mt-3 max-w-5xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
						>
							Applied Options &amp; Trading Strategies with Derivative Analytics
						</Reveal>
					</div>
					<Reveal
						delay={150}
						className="inline-flex w-fit rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]"
					>
						25 Hours
					</Reveal>
				</div>

				<Reveal
					as="p"
					delay={200}
					className={`${T.lead} !max-w-4xl sm:!text-xl sm:!leading-8`}
				>
					Data and analytics can help maximize wealth; ignorance and emotions can
					undermine it. Learn applied derivatives concepts through structured,
					market-focused training.
				</Reveal>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{[
						['Duration', '25 Hours'],
						['Format', '12 Training Days'],
						['Core focus', 'Futures & Options'],
						['Support', '1 year + lifetime community'],
					].map((fact, i) => (
						<Reveal key={fact[0]} delay={300 + i * 100} className={`${T.card} !p-5`}>
							<p className={T.muted}>{fact[0]}</p>
							<p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
								{fact[1]}
							</p>
						</Reveal>
					))}
				</div>
			</Section>

			<Section alt>
				<SectionHeader
					eyebrow="Course map"
					title="Six learning blocks across 12 days"
				/>
				<div className="grid gap-6 md:grid-cols-2">
					{days.map((day, i) => (
						<Reveal key={day.title} delay={(i % 2) * 120} className={`${T.cardAlt} transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_18px_44px_rgba(34,197,94,0.08)]`}>
							<span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
								Block {i + 1} · Days {(i * 2) + 1}–{(i + 1) * 2}
							</span>
							<h3 className={`${T.h3} mt-4`}>{day.title}</h3>
							<ul className="mt-5 space-y-3">
								{day.topics.map((topic) => (
									<li
										key={topic}
										className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
									>
										<Check />
										<span className="pt-0.5">{topic}</span>
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</Section>

			<Section>
				<div className="grid gap-6 lg:grid-cols-2">
					<Reveal className={`${T.cardAlt} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50`}>
						<div className="mb-5 flex items-center gap-4">
							<div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-2xl font-black text-[var(--accent-strong)]">
								AR
							</div>
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">Experience</p>
								<p className="mt-1 text-2xl font-black text-[var(--text-primary)]">20+ years</p>
							</div>
						</div>
						<p className={T.eyebrow}>Training faculty</p>
						<h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
							Dr. Anup Raj
						</h2>
						<p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
							PhD in Financial Derivatives with more than 20 years of experience in
							financial markets.
						</p>
						<ul className="mt-6 space-y-3">
							{instructorCapabilities.map((item) => (
								<li
									key={item}
									className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
								>
									<Check />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal delay={150} className={T.cardAlt}>
						<p className={T.eyebrow}>Academic experience</p>
						<h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
							Experienced finance educator
						</h2>
						<p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
							Ex-Professor and Area Chair of Finance at IILM, and visiting professor
							at institutions including Amity, FIIB, IBS, ICFP, Galgotias University,
							DIAS and NSE.
						</p>
						<p className="mt-5 text-sm font-semibold text-[var(--accent-strong)]">
							Mentoring &amp; advisory support is included in the programme
							delivery.
						</p>
					</Reveal>
				</div>
			</Section>

			<Section alt>
				<SectionHeader
					eyebrow="Learning outcomes"
					title="What participants will gain"
				/>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, i) => (
						<Reveal key={benefit} delay={(i % 3) * 100} className={`${T.card} !p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_14px_34px_rgba(34,197,94,0.07)]`}>
							<div className="flex items-start gap-3">
								<Check />
								<p className="text-sm leading-6 text-[var(--text-secondary)]">
									{benefit}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Long-term benefits"
					title="Support beyond the 25-hour programme"
				/>
				<div className="grid gap-6 md:grid-cols-2">
					<Reveal className={T.cardAlt}>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
							Year 1
						</p>
						<h3 className={`${T.h3} mt-3`}>One year of programme support</h3>
						<p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
							Doubt-clearing sessions and discussion through online support.
						</p>
					</Reveal>
					<Reveal delay={100} className={T.cardAlt}>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
							Lifetime
						</p>
						<h3 className={`${T.h3} mt-3`}>Trading community access</h3>
						<p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
							Lifetime access to the AlphaEdge social media trading community to
							discuss trading ideas and programme topics.
						</p>
					</Reveal>
				</div>
				<Reveal delay={150} className="mt-8">
					<Banner label="Enquire">
						Interested in Applied Options &amp; Trading Strategies with Derivative
						Analytics? Submit an application and select this programme in the
						programme of interest field.
					</Banner>
				</Reveal>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Training timeline"
					title="Your 12-day journey"
				/>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
					{Array.from({ length: 12 }, (_, index) => {
						const day = index + 1;
						const block = Math.floor(index / 2) + 1;
						return (
							<Reveal
								key={day}
								delay={index * 70}
								className="group rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_12px_32px_rgba(34,197,94,0.08)]"
							>
								<div className="flex items-end justify-between">
									<span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
										Day
									</span>
									<span className="text-xl font-black text-[var(--accent-strong)]">
										{day}
									</span>
								</div>
								<div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--border-soft)]">
									<div
										className="h-full rounded-full bg-[var(--accent)] transition-all duration-700 group-hover:w-full"
										style={{ width: `${55 + block * 7}%` }}
									/>
								</div>
							</Reveal>
						);
					})}
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Futures and options payoff profile"
					title="Visualizing risk and reward"
				/>
				<div className="relative overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
					<PayoffGraphic />
					<div className="absolute inset-0 -z-10 overflow-hidden rounded-xl opacity-10">
						<svg
							viewBox="0 0 720 260"
							role="img"
							aria-label="Futures and options payoff profile"
							className="h-auto min-w-[620px] w-full"
						>
							<defs>
								<linearGradient id="payoffArea" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stopColor="#22c55e" stopOpacity="0.32" />
									<stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
								</linearGradient>
							</defs>
							<g stroke="var(--border-soft)" strokeWidth="1">
								<line x1="50" y1="220" x2="680" y2="220" />
								<line x1="50" y1="35" x2="50" y2="220" />
								<line x1="50" y1="128" x2="680" y2="128" strokeDasharray="5 7" />
								<line x1="360" y1="35" x2="360" y2="220" strokeDasharray="5 7" />
							</g>
							<path
								d="M55 202 C150 195 220 180 290 150 C330 132 350 128 360 128 C390 128 420 126 455 118 C520 105 600 82 670 48 L670 220 L55 220 Z"
								fill="url(#payoffArea)"
							/>
							<path
								d="M55 202 C150 195 220 180 290 150 C330 132 350 128 360 128 C390 128 420 126 455 118 C520 105 600 82 670 48"
								fill="none"
								stroke="#22c55e"
								strokeWidth="5"
								strokeLinecap="round"
							/>
							<circle
								cx="360"
								cy="128"
								r="7"
								fill="var(--page-bg)"
								stroke="#22c55e"
								strokeWidth="4"
							>
								<animate
									attributeName="r"
									values="6;9;6"
									dur="2s"
									repeatCount="indefinite"
								/>
							</circle>
							<g fill="var(--text-muted)" fontSize="12">
								<text x="52" y="242">Lower</text>
								<text x="346" y="242">Expiry</text>
								<text x="640" y="242">Higher</text>
								<text x="8" y="132">P/L</text>
							</g>
						</svg>
					</div>
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Options pricing sensitivities"
					title="The Greeks"
				/>
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
					{[
						['Δ', 'Delta'],
						['Γ', 'Gamma'],
						['ν', 'Vega'],
						['Θ', 'Theta'],
						['ρ', 'Rho'],
					].map(([symbol, name], i) => (
						<Reveal
							key={name}
							delay={i * 90}
							className="group relative overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
						>
							<div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />
							<span className="text-3xl font-black text-[var(--accent-strong)]">
								{symbol}
							</span>
							<p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
								{name}
							</p>
						</Reveal>
					))}
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Enquire now"
					title="Join the programme"
				/>
				<div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
					<p className="text-base leading-7 text-[var(--text-secondary)]">
						Ready to deepen your understanding of applied options and trading
						strategies? Enrol now to secure your spot in this comprehensive
						programme.
					</p>
					<div className="mt-6 flex flex-col gap-4 sm:flex-row">
						<a
							href="https://alphaedge.in/contact"
							target="_blank"
							rel="noreferrer"
							className="block rounded-full bg-[var(--accent)] px-4 py-2 text-center text-sm font-semibold text-[var(--accent-strong)] shadow-md transition-all duration-300 hover:bg-[var(--accent-strong)] hover:text-white"
						>
							Apply now
						</a>
						<a
							href="https://alphaedge.in/contact"
							target="_blank"
							rel="noreferrer"
							className="block rounded-full border border-[var(--accent)] px-4 py-2 text-center text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--accent-strong)]"
						>
							Contact us
						</a>
					</div>
				</div>
			</Section>
		</Layout>
	);
}
