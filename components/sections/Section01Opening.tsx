import React from "react";

export default function Section01Opening() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-gray-200">
      {/* Background Graphic Layer at ~20% opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Slide Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-20">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 block">
          AI in Mental Health & Psychology
        </span>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-[var(--color-headline)]">
          AI in Mental Health <br />
          <span className="text-[var(--color-magenta)]">& Psychology</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--color-slate-blue)] max-w-2xl mx-auto pt-4 font-normal">
          What's actually possible, what isn't, and where the gap really is.
        </p>
      </div>
    </section>
  );
}