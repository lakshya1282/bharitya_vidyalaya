"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      // Force height recalculation after Next.js completes the DOM update
      const timeoutId = setTimeout(() => {
        lenis.resize();
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true, syncTouch: true }}>
      <ScrollRestoration />
      {children}
    </ReactLenis>
  );
}

