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
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setCount(target);
  }, [target]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      setCount(0);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const rect = element.getBoundingClientRect();
    const isInitiallyVisible =
      rect.top < window.innerHeight && rect.bottom > 0;

    if (isInitiallyVisible) {
      setCount(target);
      hasAnimated.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnimation();
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
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
