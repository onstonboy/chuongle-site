'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CursorTrail.module.css';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const trailPointsRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailCanvas = trailRef.current;
    if (!cursor || !trailCanvas) return;

    const ctx = trailCanvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      trailCanvas.width = window.innerWidth;
      trailCanvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let lastMouseMoveTime = 0;
    const throttleDelay = 16;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMoveTime < throttleDelay) return;
      lastMouseMoveTime = now;

      mouseX = e.clientX;
      mouseY = e.clientY;

      trailPointsRef.current.push({
        x: mouseX,
        y: mouseY,
        timestamp: now,
      });

      if (trailPointsRef.current.length > 5) {
        trailPointsRef.current.shift();
      }

      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;

      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.2;
      cursorY += dy * 0.2;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

      const now = Date.now();
      const primaryColor = '#00FFFF';

      if (trailPointsRef.current.length > 1) {
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < trailPointsRef.current.length; i++) {
          const point = trailPointsRef.current[i];
          const age = now - point.timestamp;
          const maxAge = 300;
          const opacity = Math.max(0, 1 - age / maxAge);

          if (opacity > 0) {
            if (i === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      const lastPoint = trailPointsRef.current[trailPointsRef.current.length - 1];
      if (lastPoint) {
        const age = now - lastPoint.timestamp;
        const maxAge = 300;
        const opacity = Math.max(0, 1 - age / maxAge);
        const size = 2 * opacity;

        if (opacity > 0 && size > 0.5) {
          ctx.beginPath();
          ctx.arc(lastPoint.x, lastPoint.y, size, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor + Math.floor(opacity * 150).toString(16).padStart(2, '0');
          ctx.fill();
        }
      }

      trailPointsRef.current = trailPointsRef.current.filter(
        (point) => now - point.timestamp < 300
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`}
      />
      <canvas ref={trailRef} className={styles.trail} />
    </>
  );
}

