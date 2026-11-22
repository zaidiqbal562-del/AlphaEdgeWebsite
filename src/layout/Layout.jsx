import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import MarketTicker from '../components/MarketTicker';
import Navbar from '../components/Navbar';

export default function Layout({ title, description, keywords, children }) {
  const location = useLocation();

  // ================= ROUTE CHANGE =================

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="keywords"
          content={
            keywords ||
            'alphaedge, quantitative finance, algorithmic trading, AI'
          }
        />

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="AlphaEdge" />

        <meta name="theme-color" content="#020817" />

        <link rel="canonical" href="https://alphaedge.in" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'AlphaEdge',
            description:
              'Premium research-led institute for quantitative finance, algorithmic trading and applied AI',
            url: 'https://alphaedge.in',
            sameAs: [
              'https://linkedin.com/company/alphaedge',
              'https://twitter.com/alphaedge',
            ],
            image: 'https://alphaedge.in/logocroppedbg.png',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IN',
            },
          })}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}

      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300">

        {/* ====================================================== */}
        {/* NAVIGATION */}
        {/* ====================================================== */}

        <Navbar />

        {/* ====================================================== */}
        {/* MAIN */}
        {/* ====================================================== */}
        <MarketTicker/>
        <main>{children}</main>

        {/* ====================================================== */}
        {/* FOOTER */}
        {/* ====================================================== */}

        <Footer />

      </div>
    </>
  );
}
