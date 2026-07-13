"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const POSES = {
  idle: "/mascot/1_happy.png",
  alert: "/mascot/4.png",
  pushing: "/mascot/2.png",
  dashing: "/mascot/3.png",
  zooming: "/mascot/5.png",
};

type PoseKey = keyof typeof POSES;

// Section ids use 65 for section 6.5 to keep numeric keys
const SECTION_POSE: Record<number, PoseKey> = {
  1: "idle",
  2: "idle",
  3: "idle",
  4: "idle",
  5: "alert",
  6: "alert",
  65: "idle",
  7: "pushing",
  8: "pushing",
  9: "alert",
  10: "idle",
  // 11 intentionally omitted — mascot hidden during the risk section
  12: "dashing",
  13: "zooming",
  14: "idle",
  15: "idle",
  16: "idle",
};

export default function Mascot() {
  const ref = useRef<HTMLImageElement>(null);
  const [pose, setPose] = useState<PoseKey | null>("idle");

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
    const triggers = sections.map((el) => {
      const num = Number(el.dataset.section);
      return ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setPose(SECTION_POSE[num] ?? null),
        onEnterBack: () => setPose(SECTION_POSE[num] ?? null),
      });
    });
    return () => triggers.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: pose ? 1 : 0,
        duration: 0.35,
        ease: "back.out(1.7)",
      }
    );
  }, [pose]);

  useEffect(() => {
    if (pose === "zooming" && ref.current) {
      gsap.fromTo(
        ref.current,
        { x: "-20vw", opacity: 0 },
        {
          x: "60vw",
          opacity: 1,
          duration: 1.2,
          ease: "power2.in",
          onComplete: () => {
            if (ref.current) gsap.to(ref.current, { opacity: 0, duration: 0.3 });
          },
        }
      );
    }
  }, [pose]);

  if (!pose) return null;

  return (
    <img
      ref={ref}
      src={POSES[pose]}
      alt=""
      className="fixed bottom-6 left-6 w-24 md:w-32 pointer-events-none z-40 select-none drop-shadow-lg"
    />
  );
}
