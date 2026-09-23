import { useState } from 'react';

export default function BrochureButton() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloading(true);

    window.open('/alphaedge-1Year', '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setDownloading(false);
    }, 500);
  };

  return (
    <button
      onClick={handleDownloadBrochure}
      disabled={downloading}
      className="inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-75"
    >
      {downloading ? 'Opening...' : '📥 Open Brochure'}
    </button>
  );
}