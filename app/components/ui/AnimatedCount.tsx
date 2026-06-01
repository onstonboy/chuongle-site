'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCountProps {
  target: number;
  duration?: number;
  suffix?: string;
  formatNumber?: boolean;
}

export default function AnimatedCount({
  target,
  duration = 2000,
  suffix = '',
  formatNumber = true,
}: AnimatedCountProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const display = formatNumber ? count.toLocaleString() : String(count);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
