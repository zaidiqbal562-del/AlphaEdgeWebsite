import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#0A1526] via-[#0F1F33] to-[#0A1526]">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <div className="relative">
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10b981]/20 to-[#3b82f6]/20 p-4 backdrop-blur-md border border-[#10b981]/30">
            <img
              src="/AlphaEdge.jpg"
              alt="AlphaEdge Logo"
              className="h-full w-full object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute h-16 w-16 rounded-full border-4 border-transparent border-t-[#10b981] border-r-[#10b981] animate-spin" />
          
          {/* Middle rotating ring */}
          <div
            className="absolute h-12 w-12 rounded-full border-3 border-transparent border-b-[#3b82f6] border-l-[#3b82f6] animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '2s' }}
          />
          
          {/* Inner dot */}
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#10b981] to-[#3b82f6]" />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white tracking-[0.15em]">ALPHAEDGE</h2>
          <p className="mt-2 text-sm text-[#8FA0B8] font-light tracking-[0.1em]">Initializing...</p>
        </div>
      </div>

      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-[#10b981]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 h-48 w-48 rounded-full bg-[#3b82f6]/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
