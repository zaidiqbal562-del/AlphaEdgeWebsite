import { useMemo, useState } from 'react';
import Layout from '../layout/Layout';
import { T, Reveal, Section, SectionHeader, Check, Banner } from '../components/ui';
import { aiAgentsFinanceProgrammeData } from '../data/aiAgentsFinanceData';

const d = aiAgentsFinanceProgrammeData;

export default function ProgrammeAiAgentsFinancePage() {
  const [query, setQuery] = useState('');

  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return d.terms
      .map((term) => ({
        ...term,
        modules: term.modules.filter((module) => {
          const haystack = `${module.title} ${module.weeks
            .map((week) => `${week.title} ${week.topics.join(' ')}`)
            .join(' ')}`.toLowerCase();
          return haystack.includes(q);
        }),
      }))
      .filter((term) => term.modules.length > 0 || q === '');
  }, [query]);

  const facts = [
    { label: 'Duration', value: d.duration },
    { label: 'Load', value: d.load },
    { label: 'Modules', value: d.modules },
    { label: 'Award', value: d.award },
  ];

  return (
    <Layout
      title="AI & Agents in Finance | AlphaEdge"
      description="Certificate programme on AI, forecasting, RAG systems, agent workflows and governance in finance."
    >
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal as="p" className={T.eyebrow}>
              {d.code}
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {d.title}
            </Reveal>
          </div>
          <Reveal
            delay={150}
            className="inline-flex w-fit rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]"
          >
            {d.duration}
          </Reveal>
        </div>

        <Reveal as="p" delay={200} className={`${T.lead} !max-w-4xl sm:!text-xl sm:!leading-8`}>
          {d.subtitle}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={300 + i * 100} className={`${T.card} !p-5`}>
              <p className={T.muted}>{fact.label}</p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{fact.value}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeader eyebrow="Course map" title="Four blocks, practical outcomes" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {d.moduleOverview.map((module, i) => (
            <Reveal key={module.name} delay={(i % 4) * 120} className={T.cardAlt}>
              <span className="inline-flex rounded-md bg-[var(--accent)]/15 px-2.5 py-1 text-sm font-bold text-[var(--accent-strong)]">
                {module.name}
              </span>
              <h3 className={`${T.h3} mt-4`}>{module.title}</h3>
              <p className={T.body}>{module.description}</p>
              <ul className="mt-5 space-y-3">
                {module.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                    <Check />
                    <span className="pt-0.5">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Learning methodology" title="How the programme is taught" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {d.methodology.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100} className={T.card}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className={T.cardAlt}>
            <p className={T.eyebrow}>Toolkit</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Skills and tools you will use
            </h2>
            <ul className="mt-6 space-y-4">
              {d.toolkit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className={T.cardAlt}>
            <p className={T.eyebrow}>Outcomes</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              What you will be able to do
            </h2>
            <ul className="mt-6 space-y-4">
              {d.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-secondary)]">
                  <Check />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Curriculum search"
          title="Explore the certificate curriculum"
          action={
            <label className="w-full sm:w-80">
              <span className="sr-only">Search curriculum</span>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search blocks, weeks or topics"
                className="w-full rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
              />
            </label>
          }
        />

        <div className="space-y-6">
          {filteredTerms.map((term) => (
            <Reveal key={term.number} className={T.card}>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Block {term.number}: {term.title}
              </h3>

              <div className="mt-6 space-y-4">
                {term.modules.map((module) => (
                  <details key={module.number} className={`group ${T.inner}`} open>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                      <span>
                        Module {module.number}: {module.title}
                      </span>
                      <span aria-hidden="true" className="text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-90">
                        ›
                      </span>
                    </summary>
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {module.weeks.map((week) => (
                        <div key={week.number} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                          <p className="text-sm font-semibold text-[var(--accent-strong)]">Week {week.number}</p>
                          <h4 className="mt-2 text-base font-semibold text-[var(--text-primary)]">{week.title}</h4>
                          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-secondary)]">
                            {week.topics.map((topic) => (
                              <li key={topic}>• {topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}

          {filteredTerms.length === 0 && (
            <Reveal className={T.card}>
              <p className="text-base text-[var(--text-secondary)]">
                No modules, weeks or topics match “{query}”. Try a shorter search.
              </p>
            </Reveal>
          )}
        </div>
      </Section>

      <Section alt>
        <Banner label="Capstone">
          Build a practical AI or agent workflow for a finance use case, document the business value, explain the design decisions and show how it would be governed in a real organisation.
        </Banner>
      </Section>
    </Layout>
  );
}
