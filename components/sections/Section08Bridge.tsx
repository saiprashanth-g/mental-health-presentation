import React from "react";
import AnimationStagger from "@/components/AnimationStagger";

export default function Section08Bridge() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      
      {/* 1. Add the GSAP Wrapper (setting default selector) */}
      <AnimationStagger selector=".reflection-text" delay={0.3} stagger={0.2}>
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          
          {/* 2. Apply the matching CSS class to each line you want to animate */}
          <span className="reflection-text text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)] block">
            A Moment for Reflection
          </span>
          <h2 className="reflection-text text-4xl md:text-6xl font-black tracking-tight text-[var(--color-headline)] leading-tight max-w-4xl mx-auto">
            "How many of you have ever 'ChatGPTed' about a mental health issue or a personal crisis you faced?"
          </h2>
          <div className="reflection-text h-0.5 w-16 bg-[var(--color-magenta)] mx-auto mt-4"></div>
          
        </div>
      </AnimationStagger>
    </section>
  );
}