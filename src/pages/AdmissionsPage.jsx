import Layout from '../layout/Layout';
import NumberCounter from '../components/NumberCounter';
import { T, Reveal, Section, SectionHeader, Banner } from '../components/ui';

/* Where application emails go, and where the brochure lives. */
const ADMISSIONS_EMAIL = 'hello@alphaedge.in';
const BROCHURE_PATH = '/alphaedge-1Year';

const applyHref = `mailto:${ADMISSIONS_EMAIL}?subject=${encodeURIComponent(
  'AlphaEdge course application',
)}&body=${encodeURIComponent(
  [
    'Hello AlphaEdge admissions team,',
    '',
    'I am interested in applying for an AlphaEdge programme.',
    '',
    'Full name:',
    'Email:',
    'Phone number:',
    'City:',
    'Qualification:',
    '',
    'Regards,',
    '[Your full name]',
  ].join('\n'),
)}`;

const profiles = [
  ['Career changers', 'Professionals transitioning into quantitative finance and AI.'],
  ['Engineers moving into finance', 'Software engineers and data engineers seeking financial expertise.'],
  ['Market practitioners', 'Traders, portfolio managers and risk professionals advancing their technical skills.'],
  ['Institutional cohorts', 'Teams from financial institutions and hedge funds.'],
];

const stats = [
  { target: 52, duration: 2000, label: 'Weeks' },
  { target: 13, duration: 1500, label: 'Modules' },
  { target: 1100, duration: 2000, suffix: '+', label: 'Hours' },
  { target: 17, duration: 1500, label: 'Week capstone' },
  { target: 400, duration: 2000, suffix: '+', label: 'Concepts' },
  { static: '1:6', label: 'Mentor ratio' },
];

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]';
const secondaryBtn =
  'inline-flex items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-6 py-3 text-sm font-semibold text-[var(--accent-strong)] transition-colors hover:bg-[var(--accent)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]';

export default function AdmissionsPage() {
  return (
    <Layout
      title="Admissions | AlphaEdge"
      description="Learn how to apply to AlphaEdge programmes and discover the ideal learner profiles for our quantitative finance and applied AI institute."
    >
      {/* ============================ HERO ============================ */}
      <Section>
        <Reveal as="p" className={T.eyebrow}>
          Admissions
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          className="mt-3 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
        >
          Admissions for disciplined learners and builders
        </Reveal>
        <Reveal as="p" delay={200} className={`${T.lead} !max-w-3xl sm:!text-xl sm:!leading-8`}>
          AlphaEdge welcomes individuals and teams ready to study quantitative finance, applied AI and systematic
          market decision-making with seriousness and structure.
        </Reveal>
        <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={applyHref} className={primaryBtn}>
            Apply now
          </a>
          <a href={BROCHURE_PATH} className={secondaryBtn}>
            Open brochure
          </a>
        </Reveal>
      </Section>

      {/* ============================ WHO SHOULD APPLY ============================ */}
      <Section alt>
        <SectionHeader eyebrow="Who should apply" title="Four kinds of learner we build the programme for" />
        <div className="grid gap-6 md:grid-cols-2">
          {profiles.map(([title, text], i) => (
            <Reveal key={title} delay={(i % 2) * 120} className={T.cardAlt}>
              <div className="mb-5 h-1 w-10 rounded-full bg-[var(--accent)]" />
              <h3 className={T.h3}>{title}</h3>
              <p className={T.body}>{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ PROGRAMME AT A GLANCE ============================ */}
      <Section>
        <SectionHeader
          eyebrow="Curriculum overview"
          title="The AI-900 programme at a glance"
          description="The brochure covers the programme structure, curriculum breakdown, assessment method and learning outcomes."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 6) * 80} className={`${T.card} !p-5`}>
              <p className="text-3xl font-black tracking-tight text-[var(--accent-strong)] sm:text-4xl">
                {stat.static ? (
                  stat.static
                ) : (
                  <NumberCounter target={stat.target} duration={stat.duration} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href={BROCHURE_PATH} className={secondaryBtn}>
            Open brochure
          </a>
        </Reveal>

        <Banner label="Next cohort">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Book a consultation</h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
            Review fit, discuss programme scope and understand the learning pathway that best matches your goals.
          </p>
          <a href={applyHref} className={`${primaryBtn} mt-6`}>
            Apply now
          </a>
        </Banner>
      </Section>
    </Layout>
  );
}