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
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-28 w-28 rounded-full border border-[rgba(148,163,184,0.18)]" />
          <div className="absolute h-24 w-24 rounded-full border-[3px] border-transparent border-t-[#10b981] border-r-[#60a5fa] animate-spin" />
          <div className="absolute h-16 w-16 rounded-full border-[3px] border-transparent border-b-[#10b981] border-l-[#60a5fa] animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            <div className="h-3 w-3 rounded-full bg-[#10b981]" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#94a3b8]">Loading market intelligence</p>
          <h2 className="mt-2 text-lg font-semibold tracking-[0.18em] text-white">ALPHAEDGE</h2>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#10b981]/8 blur-3xl" />
        <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-[#3b82f6]/8 blur-3xl" />
      </div>
    </div>
  );
}
