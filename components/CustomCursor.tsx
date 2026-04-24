"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a');

      if (glowRef.current) {
        glowRef.current.style.transform = isInteractive
          ? `translate(${glowX - 16}px, ${glowY - 16}px) scale(2.5)`
          : `translate(${glowX - 16}px, ${glowY - 16}px) scale(1)`;
      }
    };

    // Use requestAnimationFrame for smooth 60fps cursor tracking
    const tick = () => {
      // Smooth interpolation (lerp)
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX - 16}px, ${glowY - 16}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-8 h-8 bg-accent/30 rounded-full pointer-events-none z-[9999] blur-md will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] will-change-transform"
      />
    </>
  );
}
