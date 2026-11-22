import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{
		label: 'Programmes',
		href: '/programmes',
		submenu: [
			{ label: 'All Programmes', href: '/programmes' },
			{ label: 'Master Programme in AI/ML for Trading & Investment', href: '/programmes/master-programme' },
			{ label: 'AI & Agents in Finance', href: '/programmes/ai-agents-finance' },
			{ label: 'Applied Options & Trading Strategies', href: '/programmes/applied-options' },
		],
	},
	{ label: 'Algorithms', href: '/algorithm' },
	{ label: 'AI & Trading', href: '/ai-and-trading' },
	// { label: 'Governance & Risk', href: '/governance-risk' },
	{ label: 'Admissions', href: '/admissions' },
	{ label: 'Media', href: '/media' },
	{ label: 'Library Resources', href: '/library-resources' },
];

export default function Navbar() {
	const location = useLocation();
	const [theme, setTheme] = useState(() => {
		if (typeof window === 'undefined') return 'dark';

		const saved = localStorage.getItem('alphaedge-theme');
		if (saved === 'light' || saved === 'dark') return saved;

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	});
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
	const [authUser, setAuthUser] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('alphaedge_auth') || '{}').user || null;
		} catch {
			return null;
		}
	});

	useEffect(() => {
		fetch('/api/auth', { credentials: 'include' })
			.then((response) => (response.ok ? response.json() : null))
			.then((result) => {
				if (result?.user) {
					setAuthUser(result.user);
				} else {
					setAuthUser(null);
					localStorage.removeItem('alphaedge_auth');
				}
			})
			.catch(() => {});
	}, [location.pathname]);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('alphaedge-theme', theme);
	}, [theme]);

	useEffect(() => {
		setMobileMenuOpen(false);
		setMobileProgrammesOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileMenuOpen]);

	const logout = async () => {
		await fetch('/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ action: 'logout' }),
		}).catch(() => {});
		localStorage.removeItem('alphaedge_auth');
		setAuthUser(null);
	};

	return (
		<header className="alphaedge-navbar sticky top-0 z-50 border-b border-[#d1d5db] bg-[#e5e7eb]/95 backdrop-blur-xl">
			<style>{`
        .alphaedge-navbar,
        .alphaedge-navbar a,
        .alphaedge-navbar button,
        .alphaedge-navbar span,
        .alphaedge-navbar svg {
          color: #111827 !important;
        }
      `}</style>
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
				<Link to="/" className="relative flex h-10 w-28 shrink-0 items-center overflow-visible" aria-label="AlphaEdge home page">
					<img
						src="/logocroppedbgpxl.png"
						alt="AlphaEdge"
						className="absolute left-0 h-[4.25rem] w-auto max-w-none origin-left scale-[1.7] object-contain transition-transform duration-200 ease-out hover:scale-[1.8] sm:h-[5.1rem]"
					/>
				</Link>

				<nav className="hidden items-center gap-3 xl:flex" aria-label="Primary navigation">
					{navigation.map((item) => {
						const isActive = location.pathname === item.href;

						if (item.submenu) {
							return (
								<div key={item.href} className="group relative">
									<Link
										to={item.href}
										className={`flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-medium text-[#111827] leading-none transition-all duration-200 ${isActive ? 'bg-[#d1fae5]' : 'hover:bg-[#f3f4f6]'}`}
									>
										<span>{item.label}</span>
										<span className="text-[9px] transition-transform duration-200 group-hover:rotate-180">↓</span>
									</Link>

									<div className="invisible absolute left-0 top-full z-50 w-44 translate-y-1 rounded-lg border border-[#d1d5db] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
										{item.submenu.map((subitem) => {
											const subActive = location.pathname === subitem.href;
											return (
												<Link
													key={subitem.href}
													to={subitem.href}
													className={`block px-4 py-2.5 text-xs font-medium text-[#111827] transition-colors ${subActive ? 'bg-[#d1fae5]' : 'hover:bg-[#f3f4f6]'}`}
												>
													{subitem.label}
												</Link>
											);
										})}
									</div>
								</div>
							);
						}

						return (
							<Link
								key={item.href}
								to={item.href}
								className={`rounded-lg px-2 py-2 text-xs font-medium text-[#111827] leading-none transition-all duration-200 ${isActive ? 'bg-[#d1fae5]' : 'hover:bg-[#f3f4f6]'}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-3">
					{authUser ? (
						<>
							{authUser.role === 'admin' && (
								<Link to="/admin" className="hidden rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-2 text-xs font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/15 sm:inline-flex">
									Admin
								</Link>
							)}
							<button type="button" onClick={logout} className="hidden max-w-32 truncate rounded-full border border-[#d1d5db] px-3 py-2 text-xs font-semibold text-[#111827] transition hover:border-[#111827] sm:block" title={`${authUser.name} · ${authUser.role} — Sign out`}>
								Sign out
							</button>
						</>
					) : (
						<Link to="/login" className="hidden rounded-full border border-[#d1d5db] px-3 py-2 text-xs font-semibold text-[#111827] transition hover:border-[#111827] sm:inline-flex">
							Login
						</Link>
					)}

					<button
						type="button"
						onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
						aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
						title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
						className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d1d5db] bg-white text-[#111827] transition-colors duration-200 hover:border-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827]"
					>
						<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`absolute h-[18px] w-[18px] transition-all duration-300 ease-out ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'}`}>
							<circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
							<path d="M12 2.5v2.1M12 19.4v2.1M21.5 12h-2.1M4.6 12H2.5M18.6 5.4l-1.5 1.5M7 17l-1.5 1.5M18.6 18.6l-1.5-1.5M7 7 5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
						</svg>
						<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`absolute h-[18px] w-[18px] transition-all duration-300 ease-out ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}>
							<path d="M21 12.8A9 9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					<Link to="/contact" className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] active:scale-95 sm:inline-flex" style={{ color: '#020817' }}>
						Apply
					</Link>

					<button
						type="button"
						onClick={() => setMobileMenuOpen((value) => !value)}
						className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d1d5db] text-[#111827] transition-all duration-200 hover:border-[#111827] xl:hidden"
						aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
						aria-expanded={mobileMenuOpen}
					>
						<div className="relative h-5 w-5">
							<span className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
							<span className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
							<span className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
						</div>
					</button>
				</div>
			</div>

			<div className={`overflow-hidden border-t border-[#d1d5db] transition-all duration-300 xl:hidden ${mobileMenuOpen ? 'max-h-[calc(100vh-65px)] opacity-100' : 'max-h-0 opacity-0'}`}>
				<div className="max-h-[calc(100vh-65px)] overflow-y-auto bg-white px-4 py-4 sm:px-6">
					<nav className="flex flex-col gap-1" aria-label="Mobile navigation">
						{navigation.map((item) => {
							const isActive = location.pathname === item.href;

							if (item.submenu) {
								return (
									<div key={item.href}>
										<div className="flex items-center">
											<Link to={item.href} className={`flex flex-1 items-center rounded-xl px-4 py-3.5 text-sm font-medium text-[#111827] transition-all duration-200 ${isActive ? 'bg-[#e5e7eb]' : 'hover:bg-[#f3f4f6]'}`}>
												{item.label}
											</Link>
											<button type="button" onClick={() => setMobileProgrammesOpen((value) => !value)} className={`ml-1 flex h-12 w-12 items-center justify-center rounded-xl text-sm text-[#111827] transition-all duration-200 ${isActive ? 'bg-[#e5e7eb]' : 'hover:bg-[#f3f4f6]'}`} aria-label="Toggle programmes submenu" aria-expanded={mobileProgrammesOpen}>
												<span className={`text-xs transition-transform duration-200 ${mobileProgrammesOpen ? 'rotate-90' : ''}`}>→</span>
											</button>
										</div>
										<div className={`overflow-hidden transition-all duration-300 ${mobileProgrammesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
											<div className="ml-4 border-l border-[#d1d5db] pl-2 pt-1">
												{item.submenu.map((subitem) => {
													const subActive = location.pathname === subitem.href;
													return (
														<Link key={subitem.href} to={subitem.href} className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-[#111827] transition-all ${subActive ? 'bg-[#e5e7eb]' : 'hover:bg-[#f3f4f6]'}`}>
															{subitem.label}
														</Link>
													);
												})}
											</div>
										</div>
									</div>
								);
							}

							return (
								<Link key={item.href} to={item.href} className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[#111827] transition-all duration-200 ${isActive ? 'bg-[#e5e7eb]' : 'hover:bg-[#f3f4f6]'}`}>
									<span>{item.label}</span>
									<span className={`text-xs transition-transform duration-200 ${isActive ? 'translate-x-0.5' : ''}`}>→</span>
								</Link>
							);
						})}
					</nav>

					{authUser ? (
						<>
							{authUser.role === 'admin' && (
								<Link to="/admin" className="mt-4 flex w-full items-center justify-center rounded-full border border-[#d1d5db] bg-[#f3f4f6] px-6 py-3.5 text-sm font-semibold text-[#111827]">
									Admin Dashboard
								</Link>
							)}
							<button type="button" onClick={logout} className="mt-3 flex w-full items-center justify-center rounded-full border border-[#d1d5db] px-6 py-3.5 text-sm font-semibold text-[#111827]">
								Sign out · {authUser.name}
							</button>
						</>
					) : (
						<Link to="/login" className="mt-4 flex w-full items-center justify-center rounded-full border border-[#d1d5db] px-6 py-3.5 text-sm font-semibold text-[#111827]">
							Login / Sign up
						</Link>
					)}

					<Link to="/contact" className="mt-4 flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-200 active:scale-95" style={{ color: '#020817' }}>
						Apply Now
					</Link>
				</div>
			</div>
		</header>
	);
}