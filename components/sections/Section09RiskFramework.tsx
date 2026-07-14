import React from "react";
import AnimationStagger from "@/components/AnimationStagger";

export default function Section09RiskFramework() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      
      {/* 1. Setup the staggered flow (stagger-card is the default selector) */}
      <AnimationStagger selector=".stagger-card" stagger={0.15}>
        <div className="w-full max-w-5xl mx-auto space-y-12">
          
          {/* 2. Header and cards use 'stagger-card' to cascade sequentially */}
          <div className="stagger-card space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
              Risk & Operations Roadmap
            </span>
            <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
              Navigating Risk & Safety Guardrails
            </h3>
            <div className="h-0.5 w-16 bg-[var(--color-magenta)] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Box 1 (Human Review First) */}
            <div className="stagger-card bg-white border border-gray-200 rounded-xl p-5 space-y-3 shadow-sm text-center">
              <span className="text-2xl block">👥</span>
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Human Review First
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                AI systems must never trigger actions without direct clinical proxy control.
              </p>
            </div>

            {/* Box 2 (Group Aggregates) */}
            <div className="stagger-card bg-white border border-gray-200 rounded-xl p-5 space-y-3 shadow-sm text-center">
              <span className="text-2xl block">📊</span>
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Group Aggregates
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                Track overall institutional trendlines instead of monitoring individual users.
              </p>
            </div>

            {/* Box 3 (Explicit Consent) */}
            <div className="stagger-card bg-white border border-gray-200 rounded-xl p-5 space-y-3 shadow-sm text-center">
              <span className="text-2xl block">🔐</span>
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Explicit Consent
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                End-users retain total visibility and direct deletion ownership of text logs.
              </p>
            </div>

            {/* Box 4 (Explainable Data) */}
            <div className="stagger-card bg-white border border-gray-200 rounded-xl p-5 space-y-3 shadow-sm text-center">
              <span className="text-2xl block">🔍</span>
              <h4 className="text-base font-bold text-[var(--color-headline)]">
                Explainable Data
              </h4>
              <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
                Algorithms must explicitly highlight the precise words that triggered a flag.
              </p>
            </div>
          </div>

          {/* 3. The final rule block also flows sequentially */}
          <div className="stagger-card bg-slate-900 text-white rounded-xl p-6 text-center max-w-2xl mx-auto shadow-md space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              The Golden Rule
            </div>
            <div className="text-lg font-black text-pink-400">
              Recognition → Responsible Response → Human Escalation
            </div>
          </div>

        </div>
      </AnimationStagger>
    </section>
  );
}