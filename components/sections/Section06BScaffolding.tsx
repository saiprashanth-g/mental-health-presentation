import React from "react";

export default function Section06BScaffolding() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Slide Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
            Foundational Applications
          </span>
          <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
            Everyday AI Use Cases for Practitioners
          </h3>
          <p className="text-sm text-[var(--color-slate-blue)] max-w-2xl">
            You do not need to be a programmer to start using AI effectively. These three pillars represent immediate, safe ways to optimize your daily workflow.
          </p>
          <div className="h-0.5 w-16 bg-[var(--color-magenta)]"></div>
        </div>

        {/* 3 Pillars of Beginner Utility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1: Objective Data Evaluation */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[var(--color-magenta)] font-bold text-sm">
              01
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Bias-Free Evaluations
            </h4>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              When processing large volumes of feedback or evaluation sheets, human readers can bring bias or fatigue. AI can scan text neutral-mindedly to summarize exactly what people are reporting.
            </p>
          </div>

          {/* Pillar 2: Intervention Scaffolding */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
              02
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Drafting Material
            </h4>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              AI works well as a brainstorming sidekick. You can ask it to generate standard worksheet ideas, mindfulness exercise outlines, or templates tailored to a specific topic you provide.
            </p>
          </div>

          {/* Pillar 3: Administrative Synthesis */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
              03
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Quick Summaries
            </h4>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              Turn long, cluttered workshop transcript notes or research materials into clean bulleted frameworks, structural outlines, or seminar lists effortlessly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}