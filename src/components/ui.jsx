import useInView from '../hooks/useInView';

/* Shared design tokens + small building blocks.
   Same look as HomePage so every page feels like one site. */

export const T = {
  card: 'rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-8',
  cardAlt: 'rounded-2xl border border-[var(--border-soft)] bg-[var(--page-bg)] p-6 sm:p-8',
  inner: 'rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4 sm:p-5',
  eyebrow: 'text-sm font-semibold text-[var(--accent-strong)]',
  h2: 'mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl',
  lead: 'mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg',
  h3: 'text-xl font-semibold text-[var(--text-primary)]',
  body: 'mt-3 text-base leading-7 text-[var(--text-secondary)]',
  small: 'mt-2 text-sm leading-6 text-[var(--text-secondary)]',
  muted: 'text-sm text-[var(--text-muted)]',
};

/* Fades + lifts an element in every time it scrolls into view. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', once = false }) {
  const [ref, inView] = useInView({ once });

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Section({ alt = false, children }) {
  return (
    <section
      className={
        alt
          ? 'border-y border-[var(--border-soft)] bg-[var(--surface-strong)] py-16 sm:py-24'
          : 'py-16 sm:py-24'
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className={T.eyebrow}>{eyebrow}</p>
        <h2 className={T.h2}>{title}</h2>
        {description && <p className={T.lead}>{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function Check() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-sm font-bold text-[var(--accent-strong)]"
    >
      ✓
    </span>
  );
}

export function Banner({ label, children, className = '' }) {
  return (
    <Reveal
      className={`mt-8 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-6 sm:p-8 ${className}`}
    >
      {label && <p className="text-sm font-semibold text-[var(--accent-strong)]">{label}</p>}
      <div
        className={`${label ? 'mt-2 ' : ''}text-base leading-7 text-[var(--text-primary)] sm:text-lg sm:leading-8`}
      >
        {children}
      </div>
    </Reveal>
  );
}