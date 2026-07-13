import React from "react";

export default function Section065AIVocabulary() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Slide Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
            Demystifying the Engine
          </span>
          <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
            What Actually Happens When We Bring AI to Human Psychology?
          </h3>
          <p className="text-base text-[var(--color-slate-blue)] max-w-xl mx-auto">
            Before assessing capabilities, we must look under the hood. AI isn't a conscious mind—it is an advanced pattern-processing architecture.
          </p>
          <div className="h-0.5 w-16 bg-gray-300 mx-auto mt-2"></div>
        </div>

        {/* The 3 Core Pillars of AI Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
            <div className="text-xs font-bold text-[var(--color-magenta)] uppercase tracking-wider">
              01 / Natural Language
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Semantic Translation
            </h4>
            <p className="text-sm text-[var(--color-slate-blue)] leading-relaxed">
              AI processes human conversation not by "feeling" it, but by converting unstructured text, voice, and syntax into high-dimensional numerical vectors to map semantic meaning.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
            <div className="text-xs font-bold text-[var(--color-magenta)] uppercase tracking-wider">
              02 / Scalable Synthesis
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Pattern Identification
            </h4>
            <p className="text-sm text-[var(--color-slate-blue)] leading-relaxed">
              It reviews massive scale logs—thousands of intake forms, case notes, or behavior charts—instantly identifying macro behavioral regularities that would take a human weeks to spot.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
            <div className="text-xs font-bold text-[var(--color-magenta)] uppercase tracking-wider">
              03 / Systemic Output
            </div>
            <h4 className="text-xl font-bold text-[var(--color-headline)]">
              Dynamic Restructuring
            </h4>
            <p className="text-sm text-[var(--color-slate-blue)] leading-relaxed">
              Once a pattern is identified, the system dynamically re-organizes complex information into personalized summaries, customized workflows, or structured administrative documentation.
            </p>
          </div>

        </div>

        {/* Transition Note */}
        <div className="bg-slate-50 border border-slate-200 rounded p-4 text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium text-[var(--color-slate-blue)] tracking-wide">
            <strong>The Baseline:</strong> AI excels at moving, sorting, and analyzing data markers at scale. With this operational logic established, let's look at what the most common subset of AI—Large Language Models (LLMs)—can practically execute right now.
          </p>
          <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">↳ Coming up next: LLM Capabilities</div>
        </div>

      </div>
    </section>
  );
}