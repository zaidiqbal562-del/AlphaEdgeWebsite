
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NAVY = '#0e1a2b';
const INK = '#f3efe8';
const ORANGE = '#ee8238';
const MUTED = '#8b9bb0';
const SOFT = '#b9c4d4';

const display = "'Space Grotesk', 'Inter', system-ui, sans-serif";
const body = "'IBM Plex Sans', system-ui, sans-serif";
const mono = "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace";

const columns = [
  {
    title: 'Programmes',
    links: [
      { label: 'All programmes', to: '/programmes' },
      { label: 'AI-900', to: '/programmes/ai-900' },
      { label: 'Curriculum', to: '/programmes/ai-900#curriculum' },
    ],
  },
  {
    title: 'Institute',
    links: [
      { label: 'Mentors', to: '/mentors' },
      { label: 'Careers', to: '/careers' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
];

const linkClass =
  'inline-block rounded-sm text-xs leading-5 text-[#b9c4d4] transition-colors hover:text-[#ee8238] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee8238] sm:text-sm';

export default function Footer() {
  return (
    <footer
      className="overflow-hidden border-t border-white/10"
      style={{ background: NAVY, color: INK, fontFamily: body }}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap"
        />
      </Helmet>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Brand statement */}
        <div
          className="h-[3px] w-14 rounded-full"
          style={{ background: ORANGE }}
          aria-hidden="true"
        />

        <h2
          className="mt-4 max-w-4xl text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.12] tracking-tight"
          style={{ fontFamily: display, color: INK }}
        >
          Not a black box that prints money.
        </h2>

        <p
          className="mt-3 max-w-3xl text-base font-medium leading-snug sm:text-xl lg:text-2xl"
          style={{ fontFamily: display, color: ORANGE }}
        >
          A disciplined, explainable edge — built by your own team.
        </p>

        {/* Brand identity and navigation */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          {/* Brand information */}
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="AlphaEdge home"
              className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee8238]"
            >
              <img
                src="/logocropped.jpeg"
                alt="AlphaEdge, quant and financial engineering academy"
                className="h-9 w-auto max-w-full object-contain sm:h-11"
              />
            </Link>

            {/* Contact information */}
            <div
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm"
              style={{ fontFamily: mono, color: SOFT }}
            >
              <a
                href="https://alphaedge.in"
                className="transition-colors hover:text-[#ee8238]"
              >
                alphaedge.in
              </a>

              <span aria-hidden="true" style={{ color: MUTED }}>
                ·
              </span>

              <a
                href="mailto:hello@alphaedge.in"
                className="break-all transition-colors hover:text-[#ee8238]"
              >
                hello@alphaedge.in
              </a>
            </div>

            {/* Disclaimer */}
            <p
              className="mt-3 max-w-xl text-xs leading-5 sm:text-sm"
              style={{ color: MUTED }}
            >
              For education only; not investment advice. Trading in securities
              and derivatives carries risk of loss. Backtested results do not
              guarantee future performance.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-10">
            {columns.map((col) => (
              <nav
                key={col.title}
                aria-label={col.title}
                className="min-w-0"
              >
                <h3
                  className="text-xs font-medium sm:text-sm"
                  style={{ color: INK }}
                >
                  {col.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div
          className="mx-auto max-w-7xl px-4 py-3 text-[11px] sm:px-6 sm:py-4 sm:text-xs lg:px-8"
          style={{ color: MUTED }}
        >
          © 2026 AlphaEdge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
