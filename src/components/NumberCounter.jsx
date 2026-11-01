import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

export default function NumberCounter({ target, duration = 2000, suffix = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4, rootMargin: '0px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Respect "reduce motion": show the final number straight away.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTime;
    let frame;

    const animate = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}