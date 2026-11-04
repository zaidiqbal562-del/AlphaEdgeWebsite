import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MarketTicker from './MarketTicker';
const NAVY = '#0e1a2b';
const INK = '#f3efe8';
const ORANGE = '#ee8238';
const MUTED = '#8b9bb0';
const SOFT = '#b9c4d4';

const display = "'Space Grotesk', 'Inter', system-ui, sans-serif";
const body = "'IBM Plex Sans', system-ui, sans-serif";

const columns = [
  {
    title: 'Programmes',
    links: [
      { label: 'All programmes', to: '/programmes' },
      { label: 'AI-900', to: '/programmes/ai-900' },
      { label: 'AI & Agents in Finance', to: '/programmes/ai-agents-finance' },
      { label: 'Curriculum', to: '/programmes/ai-900#curriculum' },
    ],
  },
  {
    title: 'Institute',
    links: [
      // { label: 'Mentors', to: '/mentors' },
      { label: 'Careers', to: '/careers' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee8238]';

const linkClass = `inline-block rounded-sm text-xs leading-5 text-[#b9c4d4] transition-colors hover:text-[#ee8238] sm:text-sm ${focusRing}`;

const headingClass =
  'text-xs font-medium underline decoration-[#ee8238] underline-offset-4 sm:text-sm';

/* ---------- Icons ---------- */
const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

/* ---------- Contact row ---------- */
function ContactRow({ icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
        style={{ color: ORANGE }}
      >
        {icon}
      </span>
      <div className="min-w-0 pt-1 text-xs leading-5 sm:text-sm" style={{ color: SOFT }}>
        {children}
      </div>
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      className="overflow-hidden border-t border-white/10"
      style={{ background: NAVY, color: INK, fontFamily: body }}
    >
      <Helmet>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap"
        />
      </Helmet>
      <MarketTicker />
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

        {/* Brand + navigation */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:mt-12 sm:pt-12 lg:grid-cols-[1fr_1.7fr] lg:gap-14">
          {/* Brand information */}
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="AlphaEdge home"
              className={`inline-block rounded-sm ${focusRing}`}
            >
              <img
                src="/logocroppedbg.png"
                alt="AlphaEdge, quant and financial engineering academy"
                className="h-20 w-auto max-w-full -translate-x-[15%] object-contain sm:h-[6.8rem]"
              />
            </Link>

            <p
              className="mt-4 max-w-md text-xs leading-5 sm:text-sm"
              style={{ color: MUTED }}
            >
              For education only; not investment advice. Trading in securities
              and derivatives carries risk of loss. Backtested results do not
              guarantee future performance.
            </p>
          </div>

          {/* Link columns + contact */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-[auto_auto_1fr] sm:gap-x-10 lg:gap-x-14">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="min-w-0">
                <h3 className={headingClass} style={{ color: INK }}>
                  {col.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
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

            {/* Contact us */}
            <div className="col-span-2 min-w-0 sm:col-span-1">
              <h3 className={headingClass} style={{ color: INK }}>
                Contact us
              </h3>

              <ul className="mt-4 space-y-4">
                <ContactRow icon={<PinIcon />}>
                  <address className="not-italic">
                    1F-CS-56, Ansal Plaza Mall, Sector-1,
                    <br />
                    Vaishali, Ghaziabad,
                    <br />
                    Uttar Pradesh – 201010
                  </address>
                </ContactRow>

                <ContactRow icon={<PhoneIcon />}>
                  <a
                    href="tel:+919205775137"
                    className={`rounded-sm transition-colors hover:text-[#ee8238] ${focusRing}`}
                  >
                    +91 92057 75137
                  </a>
                </ContactRow>

                <ContactRow icon={<MailIcon />}>
                  <a
                    href="mailto:info@stratneetiintl.in"
                    className={`break-all rounded-sm transition-colors hover:text-[#ee8238] ${focusRing}`}
                  >
                    info@stratneetiintl.in
                  </a>
                </ContactRow>
              </ul>
            </div>
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