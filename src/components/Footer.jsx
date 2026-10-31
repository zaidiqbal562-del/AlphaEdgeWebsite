import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface-strong)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-5 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div className="min-w-0">
            <div className="mb-2.5 flex items-center gap-2 sm:mb-3 sm:gap-3">
              <img
                src="/logocropped.jpeg"
                alt="AlphaEdge"
                className="h-7 w-auto object-contain sm:h-10"
              />

              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]">
                  AlphaEdge
                </div>

                <div className="text-[7px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.3em]">
                  Quantitative finance & AI institute
                </div>
              </div>
            </div>

            <p className="max-w-md text-[11px] leading-5 text-[var(--text-secondary)] sm:text-sm sm:leading-7">
              Premium research-led education for quantitative finance,
              algorithmic trading and applied AI systems.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)] sm:mb-3 sm:text-sm sm:tracking-[0.25em]">
              Explore
            </h3>

            <ul className="space-y-1.5 text-[11px] text-[var(--text-secondary)] sm:space-y-3 sm:text-sm">
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
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)] sm:mb-3 sm:text-sm sm:tracking-[0.25em]">
              Connect
            </h3>

            <ul className="space-y-1.5 text-[11px] text-[var(--text-secondary)] sm:space-y-3 sm:text-sm">
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
                  className="break-all transition-colors hover:text-[var(--accent)]"
                >
                  hello@alphaedge.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-soft)] px-4 py-3 text-center text-[8px] uppercase tracking-[0.16em] text-[var(--text-muted)] sm:px-4 sm:py-5 sm:text-xs sm:tracking-[0.2em]">
        AlphaEdge © 2026. Educational and research-oriented.
        Not investment advice.
      </div>
    </footer>
  );
}
