
import Layout from '../layout/Layout';
import AdmissionsApplicationForm from '../components/AdmissionsApplicationForm';

export default function ContactPage() {
  return (
    <Layout
      title="Contact | AlphaEdge"
      description="Contact AlphaEdge for admissions, programme enquiries and institutional learning partnerships."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">
            Contact
          </p>

          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">
            Talk to the AlphaEdge team.
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            Whether you are exploring a programme, looking for a research
            partnership or evaluating a training pathway for your team,
            we would be glad to connect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">

          {/* Contact Information Card */}
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:rounded-[28px] sm:p-8 lg:p-9">

            {/* Decorative accent */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] text-[var(--accent)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Get in touch
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">
                    Contact details
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Have a question about our programmes or admissions?
                Reach out to our team and we will be happy to assist.
              </p>

              <div className="mt-8 space-y-4">

                {/* Email */}
                <a
                  href="mailto:info@stratneetiintl.in"
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] p-4 transition-all duration-200 hover:border-[var(--accent)] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Email us
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                      info@stratneetiintl.in
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      Send us your programme enquiries
                    </p>
                  </div>

                  <span className="text-lg text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919205775137"
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] p-4 transition-all duration-200 hover:border-[var(--accent)] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Call us
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                      +91 99993 67573
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      Connect with our admissions team
                    </p>
                  </div>

                  <span className="text-lg text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Visit us
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[var(--text-primary)] sm:text-base">
                      AlphaEdge
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                      1F-CS-56, Ansal Plaza Mall,<br />
                      Sector-1, Vaishali,<br />
                      Ghaziabad, Uttar Pradesh – 201010
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-7 border-t border-[var(--border-soft)] pt-5">
                <p className="text-xs leading-6 text-[var(--text-muted)]">
                  We look forward to hearing from you and helping you take
                  the next step in your learning journey.
                </p>
              </div>
            </div>
          </div>

          {/* Admissions Form */}
          <AdmissionsApplicationForm compact />

        </div>
      </section>
    </Layout>
  );
}
