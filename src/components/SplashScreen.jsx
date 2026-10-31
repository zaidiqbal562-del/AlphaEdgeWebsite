import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(180deg,_#06111d_0%,_#0b1727_100%)]">
      {/* Logo + circular loader (wrapper = 83vmin, logo circle = 75vmin) */}
      <div className="relative flex h-[83vmin] w-[83vmin] items-center justify-center">
        {/* Static track ring */}
        <div className="absolute inset-0 rounded-full border border-[rgba(148,163,184,0.16)]" />

        {/* Outer spinning loader ring */}
        <div className="absolute inset-[0.5vmin] rounded-full border-[4px] border-transparent border-t-[#2dd4bf] border-r-[#7dd3fc] animate-spin" />

        {/* Inner spinning loader ring (reverse) */}
        <div className="absolute inset-[2vmin] rounded-full border-[3px] border-transparent border-b-[#2dd4bf] border-l-[#7dd3fc] animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />

        {/* Circular logo: 75% of screen */}
        <div className="relative flex h-[75vmin] w-[75vmin] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-950/80 shadow-[0_0_60px_rgba(45,212,191,0.35)]">
          <img
            src="/logocropped.jpeg"
            alt="AlphaEdge"
            className="h-full w-full object-contain p-[7vmin]"
          />
        </div>
      </div>

      {/* Text pinned to the bottom so it never overlaps the logo */}
      <div className="absolute bottom-[2vmin] left-0 right-0 text-center">
        <p className="text-[clamp(9px,1.6vmin,13px)] font-medium uppercase tracking-[0.42em] text-[#94a3b8]">
          Loading market intelligence
        </p>
        <h2 className="mt-1 text-[clamp(16px,3vmin,28px)] font-semibold tracking-[0.18em] text-white">
          ALPHAEDGE
        </h2>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#10b981]/10 blur-3xl" />
        <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      </div>
    </div>
  );
}