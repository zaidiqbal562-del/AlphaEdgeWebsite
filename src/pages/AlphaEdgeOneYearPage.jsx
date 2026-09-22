import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AlphaEdgeOneYearPage() {
  const [content, setContent] = useState({ style: '', body: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/alphaedge-1Year.html')
      .then((response) => response.text())
      .then((html) => {
        const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

        setContent({
          style: styleMatch ? styleMatch[1] : '',
          body: bodyMatch ? bodyMatch[1] : html,
        });
      })
      .catch((error) => {
        console.error('Failed to load brochure HTML:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDownloadPdf = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1526] text-white">
        Loading brochure...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AlphaEdge AI-900 Brochure</title>
        <meta
          name="description"
          content="AlphaEdge AI-900 brochure — a 52-week master programme in applied artificial intelligence for financial systems."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        ${content.style}

        @media print {
          .brochure-toolbar {
            display: none !important;
          }

          body {
            background: #FAF9F5 !important;
          }
        }
      `}</style>

      <div className="brochure-toolbar fixed right-4 top-4 z-50 flex gap-3 rounded-full border border-white/10 bg-slate-950/80 p-2 shadow-2xl backdrop-blur-md">
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="rounded-full bg-[var(--accent,#10b981)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:opacity-90"
        >
          Download PDF
        </button>
        <Link
          to="/admissions"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[var(--accent,#10b981)] hover:text-[var(--accent,#10b981)]"
        >
          Back
        </Link>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </>
  );
}
