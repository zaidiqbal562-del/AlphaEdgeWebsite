import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programmes',
    href: '/programmes',
    submenu: [
      { label: 'All Programmes', href: '/programmes' },
      { label: 'AI-900', href: '/programmes/ai-900' },
    ],
  },
  { label: 'Algo Trading', href: '/algo-trading' },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Research', href: '/research' },
  { label: 'Careers', href: '/careers' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Layout({ title, description, keywords, children }) {
  const location = useLocation();

  // ================= THEME =================

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';

    const saved = localStorage.getItem('alphaedge-theme');

    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // ================= MOBILE MENU =================

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ================= MOBILE PROGRAMMES =================

  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);

  // ================= THEME EFFECT =================

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;

    localStorage.setItem('alphaedge-theme', theme);
  }, [theme]);

  // ================= ROUTE CHANGE =================

  useEffect(() => {
    window.scrollTo(0, 0);

    setMobileMenuOpen(false);
    setMobileProgrammesOpen(false);
  }, [location]);

  // ================= BODY SCROLL =================

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="keywords"
          content={
            keywords ||
            'alphaedge, quantitative finance, algorithmic trading, AI'
          }
        />

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="AlphaEdge" />

        <meta name="theme-color" content="#020817" />

        <link rel="canonical" href="https://alphaedge.in" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'AlphaEdge',
            description:
              'Premium research-led institute for quantitative finance, algorithmic trading and applied AI',
            url: 'https://alphaedge.in',
            sameAs: [
              'https://linkedin.com/company/alphaedge',
              'https://twitter.com/alphaedge',
            ],
            image: 'https://alphaedge.in/AlphaEdge.jpg',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IN',
            },
          })}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}

      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300">

        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--surface-strong)]/90 backdrop-blur-xl">

          {/* ================= HEADER CONTAINER ================= */}

          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              className="flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-105"
              aria-label="AlphaEdge home page"
            >
              <img
                src="/AlphaEdge.jpg"
                alt="AlphaEdge"
                className="h-10 w-auto object-contain"
              />

              <div className="hidden sm:block">
                <div className="text-sm font-bold tracking-[0.15em] text-[var(--text-primary)]">
                  ALPHAEDGE
                </div>

                <div className="text-[8px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Capital • AI • Research
                </div>
              </div>
            </Link>

            {/* ================================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================================== */}

            <nav className="hidden items-center gap-3 xl:flex">

              {navigation.slice(0, 8).map((item) => {
                const isActive = location.pathname === item.href;

                const hasSubmenu =
                  item.submenu && item.submenu.length > 0;

                {/* ================= PROGRAMMES ================= */}

                if (hasSubmenu) {
                  return (
                    <div
                      key={item.href}
                      className="group relative"
                    >
                      {/* PROGRAMMES LINK */}

                      <Link
                        to={item.href}
                        className={`flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-medium leading-none transition-all duration-200 ${
                          isActive
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                        }`}
                      >
                        <span>{item.label}</span>

                        <span className="text-[9px] transition-transform duration-200 group-hover:rotate-180">
                          ↓
                        </span>
                      </Link>

                      {/* ================= DROPDOWN ================= */}

                      <div className="invisible absolute left-0 top-full z-50 w-44 translate-y-1 rounded-lg border border-[var(--border-soft)] bg-[var(--surface-strong)] py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                        {item.submenu.map((subitem) => {
                          const subActive =
                            location.pathname === subitem.href;

                          return (
                            <Link
                              key={subitem.href}
                              to={subitem.href}
                              className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                                subActive
                                  ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
                              }`}
                            >
                              {subitem.label}
                            </Link>
                          );
                        })}

                      </div>
                    </div>
                  );
                }

                {/* ================= NORMAL LINK ================= */}

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-lg px-2 py-2 text-xs font-medium leading-none transition-all duration-200 ${
                      isActive
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

            </nav>

            {/* ================================================== */}
            {/* RIGHT SIDE */}
            {/* ================================================== */}

            <div className="flex items-center gap-2">

              {/* ================= THEME TOGGLE ================= */}

              <button
                type="button"
                onClick={() =>
                  setTheme((value) =>
                    value === 'dark' ? 'light' : 'dark'
                  )
                }
                className="group relative inline-flex h-9 w-16 shrink-0 items-center rounded-full p-1 transition-all duration-500 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                style={{
                  background:
                    theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(1, 4, 1, 0.8), rgb(249, 249, 250))'
                      : 'linear-gradient(135deg, rgba(249, 250, 250, 0.9), rgb(0, 0, 0))',
                }}
                aria-label="Toggle dark and light mode"
              >
                <div
                  className="absolute inset-y-1 flex w-7 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_4px_12px_rgba(45,212,191,0.3)] transition-all duration-500"
                  style={{
                    left:
                      theme === 'dark'
                        ? '2px'
                        : 'calc(100% - 30px)',
                  }}
                >

                  {/* MOON */}

                  <span
                    className={`flex items-center justify-center transition-all duration-500 ${
                      theme === 'dark'
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}
                  >
                    <img
                      src="/moon.png"
                      alt="Dark mode"
                      className="h-5 w-5 object-contain"
                    />
                  </span>

                  {/* SUN */}

                  <span
                    className={`absolute flex items-center justify-center transition-all duration-500 ${
                      theme === 'light'
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}
                  >
                    <img
                      src="/sun.png"
                      alt="Light mode"
                      className="h-5 w-5 object-contain"
                    />
                  </span>

                </div>
              </button>

              {/* ================= APPLY BUTTON ================= */}

              <Link
                to="/contact"
                className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] active:scale-95 sm:inline-flex"
              >
                Apply
              </Link>

              {/* ================= MOBILE HAMBURGER ================= */}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((value) => !value)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-soft)] text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] xl:hidden"
                aria-label={
                  mobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative h-5 w-5">

                  {/* TOP */}

                  <span
                    className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      mobileMenuOpen
                        ? 'translate-y-2 rotate-45'
                        : ''
                    }`}
                  />

                  {/* MIDDLE */}

                  <span
                    className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      mobileMenuOpen
                        ? 'opacity-0'
                        : 'opacity-100'
                    }`}
                  />

                  {/* BOTTOM */}

                  <span
                    className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      mobileMenuOpen
                        ? '-translate-y-2 -rotate-45'
                        : ''
                    }`}
                  />

                </div>
              </button>

            </div>
          </div>

          {/* ================================================== */}
          {/* MOBILE MENU */}
          {/* ================================================== */}

          <div
            className={`overflow-hidden border-t border-[var(--border-soft)] transition-all duration-300 xl:hidden ${
              mobileMenuOpen
                ? 'max-h-[calc(100vh-65px)] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="max-h-[calc(100vh-65px)] overflow-y-auto bg-[var(--surface-strong)] px-4 py-4 sm:px-6">

              <nav className="flex flex-col gap-1">

                {navigation.map((item) => {
                  const isActive =
                    location.pathname === item.href;

                  const hasSubmenu =
                    item.submenu && item.submenu.length > 0;

                  {/* ================= MOBILE PROGRAMMES ================= */}

                  if (hasSubmenu) {
                    return (
                      <div key={item.href}>

                        <div className="flex items-center">

                          {/* MAIN PROGRAMMES LINK */}

                          <Link
                            to={item.href}
                            className={`flex flex-1 items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                              isActive
                                ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                                : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
                            }`}
                          >
                            {item.label}
                          </Link>

                          {/* SUBMENU TOGGLE */}

                          <button
                            type="button"
                            onClick={() =>
                              setMobileProgrammesOpen(
                                (value) => !value
                              )
                            }
                            className={`ml-1 flex h-12 w-12 items-center justify-center rounded-xl text-sm transition-all duration-200 ${
                              isActive
                                ? 'text-[var(--accent)]'
                                : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
                            }`}
                            aria-label="Toggle programmes submenu"
                            aria-expanded={mobileProgrammesOpen}
                          >
                            <span
                              className={`text-xs transition-transform duration-200 ${
                                mobileProgrammesOpen
                                  ? 'rotate-90'
                                  : ''
                              }`}
                            >
                              →
                            </span>
                          </button>

                        </div>

                        {/* ================= MOBILE SUBMENU ================= */}

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileProgrammesOpen
                              ? 'max-h-40 opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="ml-4 border-l border-[var(--border-soft)] pl-2 pt-1">

                            {item.submenu.map((subitem) => {
                              const subActive =
                                location.pathname ===
                                subitem.href;

                              return (
                                <Link
                                  key={subitem.href}
                                  to={subitem.href}
                                  className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                                    subActive
                                      ? 'text-[var(--accent)]'
                                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
                                  }`}
                                >
                                  {subitem.label}
                                </Link>
                              );
                            })}

                          </div>
                        </div>

                      </div>
                    );
                  }

                  {/* ================= MOBILE NORMAL LINK ================= */}

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
                      }`}
                    >
                      <span>{item.label}</span>

                      <span
                        className={`text-xs transition-transform duration-200 ${
                          isActive
                            ? 'translate-x-0.5'
                            : ''
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}

              </nav>

              {/* ================= MOBILE APPLY ================= */}

              <Link
                to="/contact"
                className="mt-4 flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-200 active:scale-95"
              >
                Apply Now
              </Link>

            </div>
          </div>

        </header>

        {/* ====================================================== */}
        {/* MAIN */}
        {/* ====================================================== */}

        <main>{children}</main>

        {/* ====================================================== */}
        {/* FOOTER */}
        {/* ====================================================== */}

        <footer className="border-t border-[var(--border-soft)] bg-[var(--surface-strong)]">

          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">

            {/* ================= FOOTER BRAND ================= */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <img
                  src="/AlphaEdge.jpg"
                  alt="AlphaEdge"
                  className="h-10 w-auto object-contain"
                />

                <div>

                  <div className="text-sm font-bold uppercase tracking-[0.2em]">
                    AlphaEdge
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    Quantitative finance & AI institute
                  </div>

                </div>

              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                Premium research-led education for quantitative
                finance, algorithmic trading and applied AI systems.
              </p>

            </div>

            {/* ================= EXPLORE ================= */}

            <div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-primary)]">
                Explore
              </h3>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">

                <li>
                  <Link
                    to="/programmes"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Programmes
                  </Link>
                </li>

                <li>
                  <Link
                    to="/mentors"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Mentors
                  </Link>
                </li>

                <li>
                  <Link
                    to="/research"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Research
                  </Link>
                </li>

              </ul>

            </div>

            {/* ================= CONNECT ================= */}

            <div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-primary)]">
                Connect
              </h3>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">

                <li>
                  <Link
                    to="/contact"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Admissions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <a
                    href="mailto:hello@alphaedge.in"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    hello@alphaedge.in
                  </a>
                </li>

              </ul>

            </div>

          </div>

          {/* ================= COPYRIGHT ================= */}

          <div className="border-t border-[var(--border-soft)] px-4 py-5 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            AlphaEdge © 2026. Educational and research-oriented.
            Not investment advice.
          </div>

        </footer>

      </div>
    </>
  );
}