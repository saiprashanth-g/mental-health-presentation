import React from "react";

export default function Section08Bridge() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)] block">
          A Moment for Reflection
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[var(--color-headline)] leading-tight max-w-4xl mx-auto">
          "How many of you have ever 'ChatGPTed' about a mental health issue or a personal crisis you faced?"
        </h2>
        <div className="h-0.5 w-16 bg-[var(--color-magenta)] mx-auto mt-4"></div>
      </div>
    </section>
  );
}