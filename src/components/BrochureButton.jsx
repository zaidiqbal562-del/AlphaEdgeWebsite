export default function BrochureButton() {
  return (
 <a 
  href="/alphaedge-1Year.html" 
  download="AlphaEdge-AI-900-Brochure.html" 
  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-75"
>
  <svg 
    xmlns="http://w3.org" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="h-4 w-4"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
    />
  </svg>
  <span>Download Brochure</span>
</a>
  );
}