import React from "react";

export default function Section05RealQuestion() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      
      {/* --- TOP LEFT CLUSTER --- */}
      <div className="absolute top-24 left-12 md:left-24 max-w-[280px] space-y-8">
        <div>
          <span className="text-pink-600 font-bold block">11 Years</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block leading-tight">
            AVERAGE DELAY BETWEEN SYMPTOM ONSET AND INITIAL TREATMENT INTERVENTION.
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: National Alliance on Mental Illness (NAMI)</span>
        </div>
        <div>
          <span className="text-slate-900 font-bold block">$1.0 Trillion</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-tight">
            ANNUAL GLOBAL ECONOMIC LOSS DRIVEN EXCLUSIVELY BY ANXIETY & DEPRESSION PRODUCTIVITY DROPS.
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: World Health Organization (WHO)</span>
        </div>
      </div>

      {/* --- CENTER HERO TYPOGRAPHY --- */}
      <div className="text-center space-y-4 max-w-2xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          AI has moved fast <br /> in HR, finance, retail.
        </h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Why hasn’t it moved in <span className="text-pink-600">mental health</span>?
        </h3>
        <div className="h-0.5 w-12 bg-gray-200 mx-auto mt-6"></div>
      </div>

      {/* --- TOP RIGHT CLUSTER --- */}
      <div className="absolute top-24 right-12 md:right-24 max-w-[280px] text-right space-y-8">
        <div>
          <span className="text-blue-600 font-bold block">84% vs 14%</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-tight">
            ENTERPRISE PRODUCTION AI SCALING ADOPTION RATE VERSUS CLINICAL PSYCHOLOGY DEPLOYMENT READINESS.
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: McKinsey Global AI Survey / APA Practice Systems</span>
        </div>
        <div>
          <span className="text-pink-600 font-bold block">&lt; 1%</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-tight">
            OF ACTIONABLE HEALTH DATA POINTS IN BEHAVIORAL THERAPY ARE CURRENTLY STRUCTUREED ELECTRONICALLY.
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: Eleos Health Systems Analysis</span>
        </div>
      </div>

      {/* --- BOTTOM GRID LAYER --- */}
      <div className="absolute bottom-16 left-12 right-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-end border-t border-gray-100 pt-8">
        <div>
          <span className="text-pink-600 font-bold block text-sm">200,000 : 1</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block leading-tight">
            AVERAGE CITIZEN-TO-LICENSED BEHAVIORAL PRACTITIONER RATIO ACROSS LOWER-MIDDLE INCOME TERRITORIES.
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: WHO Mental Health Atlas</span>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-black text-slate-900 block tracking-tight">1 : 150,000</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block max-w-[200px] mx-auto leading-tight">
            PSYCHIATRIST-TO-POPULATION RATIO IN INDIA — ROUGHLY A FIFTH OF THE WHO MINIMUM STANDARD
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: Indian Journal of Psychiatry</span>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-black text-slate-900 block tracking-tight">80–90%</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block max-w-[200px] mx-auto leading-tight">
            OF PEOPLE NEEDING MENTAL HEALTH CARE IN INDIA NEVER RECEIVE IT
          </span>
          <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: National Mental Health Survey (NMHS)</span>
        </div>

        <div className="text-right space-y-4">
          <div>
            <span className="text-slate-900 font-bold block text-sm">40–60% Admin Burn</span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block leading-tight">
              OF A PRACTITIONER'S WEEKLY HOURS SPENT LOGGING CLINICAL SESSION DOCUMENTATION OVER ACTIVE CARE.
            </span>
            <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: Provider Burnout Assessment Reports</span>
          </div>
          <div>
            <span className="text-pink-600 font-bold block text-sm">82% Drop-off</span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block leading-tight">
              IN LONGITUDINAL ENGAGEMENT LOGS WHEN MENTAL HEALTH SUPPORT UTILIZES UN-GUIDED STANDALONE APPLICATIONS.
            </span>
            <span className="text-[8px] font-mono text-slate-400 block mt-1">Source: Journal of Medical Internet Research (JMIR)</span>
          </div>
        </div>
      </div>

    </section>
  );
}