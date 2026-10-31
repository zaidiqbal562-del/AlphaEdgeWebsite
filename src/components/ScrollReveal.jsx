import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const targets = [node, ...node.querySelectorAll('section, article, [data-reveal]')];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`ae-reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
}
