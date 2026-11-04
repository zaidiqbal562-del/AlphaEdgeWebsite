import Layout from '../layout/Layout';

const videos = [
  { id: 'nFUrWOVkxQU', label: 'Video 01', category: 'Featured Media' },
  { id: 'ERbHQiMigv0', label: 'Video 02', category: 'Featured Media' },
];

function VideoGroup({ duplicate = false }) {
  return (
    <div
      className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6"
      aria-hidden={duplicate ? 'true' : undefined}
    >
      {videos.map((video, index) => (
        <article
          key={`${duplicate ? 'duplicate-' : ''}${video.id}`}
          className="group w-[min(85vw,32rem)] shrink-0 overflow-hidden rounded-[20px] border border-[var(--border-soft)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] sm:rounded-[28px]"
        >
          <div className="relative aspect-video overflow-hidden bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.label}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              tabIndex={duplicate ? -1 : undefined}
            />

            <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md sm:left-4 sm:top-4">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 p-4 sm:p-6">
            <div className="min-w-0">
              <div className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.22em] text-[var(--accent)] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.25em]">
                {video.category}
              </div>
              <h3 className="mt-3 text-lg font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:text-xl">
                {video.label}
              </h3>
            </div>

            <span
              className="text-xl text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function MediaPage() {
  return (
    <Layout
      title="Media | AlphaEdge"
      description="Explore insights, perspectives and featured videos from AlphaEdge."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.3em]">
            AlphaEdge Media
          </p>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-[var(--text-primary)] sm:mt-4 sm:text-4xl md:text-5xl sm:tracking-[-0.06em]">
            Ideas in motion.{' '}
            <span className="text-[var(--accent)]">Perspectives that matter.</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
            Explore conversations, insights and perspectives shaping the world of
            quantitative finance, financial engineering and modern markets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 sm:rounded-[28px] sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.24em]">
                Featured Collection
              </p>
              <p className="mt-1.5 text-xs leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                Explore our latest media
              </p>
            </div>

            <div className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] sm:px-3 sm:py-1 sm:text-[10px]">
              {String(videos.length).padStart(2, '0')} videos
            </div>
          </div>

          <div
            className="media-marquee mt-5 overflow-hidden sm:mt-6"
            aria-label="Featured videos"
          >
            <div className="media-marquee-track flex w-max">
              <VideoGroup />
              <VideoGroup duplicate />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}