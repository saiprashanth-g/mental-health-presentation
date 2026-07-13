"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SECTIONS } from "@/lib/sections";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function ProgressNav() {
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-section"));
            setActive(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: number) => {
    const el = document.querySelector(`[data-section="${id}"]`);
    if (!el) return;
    gsap.to(window, {
      duration: 0.9,
      scrollTo: { y: el, offsetY: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <>
      {/* Desktop: fixed right-side dot nav */}
      <nav
        aria-label="Presentation sections"
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
      >
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={active === s.id}
            className="group relative flex items-center justify-end"
          >
            <span
              className="mr-3 whitespace-nowrap rounded-md bg-deep-purple/90 px-2 py-1 text-xs text-headline opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 pointer-events-none"
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? "w-2.5 h-2.5 bg-magenta"
                  : "w-1.5 h-1.5 bg-slate-blue/50 group-hover:bg-slate-blue"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile: top progress bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-1 bg-violet/40">
        <div
          className="h-full bg-magenta transition-all duration-300"
          style={{
            width: `${
              ((SECTIONS.findIndex((s) => s.id === active) + 1) /
                SECTIONS.length) *
              100
            }%`,
          }}
        />
      </div>
    </>
  );
}
