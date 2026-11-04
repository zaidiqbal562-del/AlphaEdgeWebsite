import Layout from '../layout/Layout';

const videos = [
  { id: 'nFUrWOVkxQU', label: 'Video 01' },
  { id: 'ERbHQiMigv0', label: 'Video 02' },
];

function VideoGroup({ duplicate = false }) {
  return (
    <div
      className="flex shrink-0 gap-5 pr-5"
      aria-hidden={duplicate ? 'true' : undefined}
    >
      {videos.map((video) => (
        <article
          key={`${duplicate ? 'duplicate-' : ''}${video.id}`}
          className="w-[min(82vw,25rem)] shrink-0 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]"
        >
          <div className="aspect-video bg-black">
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
          </div>
          <p className="px-4 py-3 text-sm font-medium text-[var(--text-secondary)]">
            {video.label}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function MediaPage() {
  return (
    <Layout
      title="Media | AlphaEdge"
      description="Watch videos from the AlphaEdge media collection."
    >
      <section className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[var(--accent-strong)]">Media</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[var(--text-primary)] sm:text-5xl">
            Ideas in motion.
          </h1>
        </div>

        <div className="media-marquee mt-10 overflow-hidden" aria-label="Featured videos">
          <div className="media-marquee-track flex w-max">
            <VideoGroup />
            <VideoGroup duplicate />
          </div>
        </div>
      </section>
    </Layout>
  );
}