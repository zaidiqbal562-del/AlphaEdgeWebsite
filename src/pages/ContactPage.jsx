import Layout from '../layout/Layout';

export default function ContactPage() {
  return (
    <Layout
      title="Contact | AlphaEdge"
      description="Contact AlphaEdge for admissions, programme enquiries and institutional learning partnerships."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">Contact</p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">Talk to the AlphaEdge team.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            Whether you are exploring a programme, looking for a research partnership or evaluating a training pathway for your team, we would be glad to connect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-5 grid-cols-1 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl sm:tracking-[-0.05em]">Get in touch</h2>
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-5 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--text-secondary)]">
              <p>Email: <a href="mailto:hello@alphaedge.in" className="text-[var(--accent)]">hr@alphaedge.in</a></p>
              <p>Phone: <a href="tel:+919999999999" className="text-[var(--accent)]">+91 99999 99999</a></p>
              <p>Location: Mumbai, India</p>
               <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=zaidiqbal901@gmail.com&su=${encodeURIComponent(
            'AlphaEdge Course Application'
        )}&body=${encodeURIComponent(
            `Hello AlphaEdge HR Team,

        I am interested in applying for an AlphaEdge programme.

        Please find my details below:

        Full Name:
        Email:
        Phone Number:
        City:
        Qualification:

        Regards,
        [Your Full Name]`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] sm:mt-8 sm:px-6 sm:py-3 sm:text-sm"
        >
        Mail
        </a>
            </div>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl sm:tracking-[-0.05em]">Request a callback</h2>
            <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <input type="text" placeholder="Full name" className="w-full rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]" />
              <input type="email" placeholder="Email address" className="w-full rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]" />
              <input type="phone" placeholder="Enter phone number" className="w-full rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]" />
              <textarea rows="5" placeholder="Tell us about your interest" className="w-full rounded-lg sm:rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-none" />
              <button type="submit" className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] sm:px-6 sm:py-3 sm:text-sm">
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
