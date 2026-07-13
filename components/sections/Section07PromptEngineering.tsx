import React from "react";

export default function Section07PromptEngineering() {
  const blueprintSteps = [
    { num: "1", title: "Task Context", desc: "Who the AI is pretending to be." },
    { num: "2", title: "Tone Context", desc: "The attitude or mood of the voice." },
    { num: "3", title: "Background Data", desc: "Documents or instructions it should read first." },
    { num: "4", title: "Rules & Limits", desc: "What the AI is strictly NOT allowed to do." },
    { num: "5", title: "Examples", desc: "Show it a sample of a perfect answer." },
    { num: "6", title: "History", desc: "Past conversation details to remember." },
    { num: "7", title: "The Request", desc: "The actual question you want answered right now." },
    { num: "8", title: "Thinking Step", desc: "Telling the AI to pause and figure it out step-by-step." },
    { num: "9", title: "Format Type", desc: "How to layout the response (e.g., bullet points)." },
    { num: "10", title: "The First Word", desc: "Starting the answer for it to prevent rambling." },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-5xl mx-auto space-y-10">
        
        {/* Slide Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
            Prompt Structure Blueprint
          </span>
          <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
            The Anatomy of a Professional Prompt
          </h3>
          <p className="text-sm text-[var(--color-slate-blue)] max-w-2xl">
            To get reliable results from AI, don't just ask a one-line question. Treat it like onboarding a fresh assistant by structuring your instructions into these distinct layers.
          </p>
          <div className="h-0.5 w-16 bg-[var(--color-magenta)]"></div>
        </div>

        {/* 10 Step Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {blueprintSteps.map((step) => (
            <div key={step.num} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-400">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold text-[var(--color-headline)] mt-2">{step.title}</h4>
              </div>
              <p className="text-[11px] text-[var(--color-slate-blue)] leading-tight">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Practical Simple Example Box */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-magenta)]">
            A Clean Example in Action
          </div>
          <div className="text-xs font-mono text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-150 leading-relaxed">
            <p><strong>[Context & Tone]</strong> Act as an educational coach. Use an encouraging, friendly tone.</p>
            <p><strong>[Data & Rules]</strong> Read this standard guide on stress-management. Do not give medical or clinical diagnoses.</p>
            <p><strong>[The Request]</strong> Create a 3-question self-reflection worksheet layout for university students experiencing study burnout.</p>
            <p><strong>[Thinking Step]</strong> Think step-by-step about what questions help a student feel relieved before outputting your answer.</p>
          </div>
        </div>

      </div>
    </section>
  );
}