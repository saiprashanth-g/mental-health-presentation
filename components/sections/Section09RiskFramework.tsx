import React from "react";

export default function Section09RiskFramework() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Simplified Header */}
        <div className="space-y-2 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
            Risk & Operations Roadmap
          </span>
          <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
            Navigating Risk & Safety Guardrails
          </h3>
          <div className="h-0.5 w-16 bg-[var(--color-magenta)] mx-auto mt-2"></div>
        </div>

        {/* The 4 Core Operational Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Box 1: Human Review First */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[var(--color-magenta)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Human Review First
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                AI systems must never trigger actions without direct clinical proxy control.
              </p>
            </div>
          </div>

          {/* Box 2: Group Aggregates */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Group Aggregates
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                Track overall institutional trendlines instead of monitoring individual users.
              </p>
            </div>
          </div>

          {/* Box 3: Explicit Consent */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Explicit Consent
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                End-users retain total visibility and direct deletion ownership of text logs.
              </p>
            </div>
          </div>

          {/* Box 4: Explainable Data */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm text-center flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Explainable Data
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                Algorithms must explicitly highlight the precise words that triggered a flag.
              </p>
            </div>
          </div>

        </div>

        {/* Clear, Bottom Line Core Paradigm Takeaway */}
        <div className="bg-slate-900 text-white rounded-xl p-6 text-center max-w-2xl mx-auto shadow-md space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
            The Golden Rule
          </div>
          <div className="text-lg font-black text-pink-400">
            Recognition → Responsible Response → Human Escalation
          </div>
        </div>

      </div>
    </section>
  );
}