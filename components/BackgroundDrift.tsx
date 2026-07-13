"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundDrift() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // 0 -> deep-purple, 0.5 -> violet, 1 -> deep-purple again
        const p = self.progress;
        const t = p < 0.5 ? p * 2 : (1 - p) * 2;
        if (ref.current) {
          ref.current.style.opacity = String(t);
        }
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 bg-deep-purple pointer-events-none"
    >
      <div
        ref={ref}
        className="absolute inset-0 bg-violet transition-opacity"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
