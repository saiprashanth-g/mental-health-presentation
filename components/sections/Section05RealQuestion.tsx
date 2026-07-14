import React from "react";

export default function Section05RealQuestion() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 border-b border-gray-200">
      
      {/* Top Stat Cluster Row */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-8">
        
        {/* Left Stats Column */}
        <div className="space-y-12 md:pt-12">
          {/* 11 Years */}
          <div className="space-y-1">
            <span className="text-xl font-bold text-[var(--color-magenta)] block">11 Years</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-headline)] block">
              Average delay between symptom onset and initial treatment intervention.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: National Alliance on Mental Illness (NAMI)
            </span>
          </div>

          {/* $1.0 Trillion */}
          <div className="space-y-1">
            <span className="text-xl font-bold text-[var(--color-headline)] block">$1.0 Trillion</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block leading-relaxed">
              Annual global economic loss driven exclusively by anxiety & depression productivity drops.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: World Health Organization (WHO)
            </span>
          </div>
        </div>

        {/* Center Big Hook Typography */}
        <div className="text-center space-y-4 md:pt-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--color-headline)] leading-tight">
            AI has moved fast in HR, finance, retail.
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--color-headline)] leading-tight">
            Why hasn’t it moved in <span className="text-[var(--color-magenta)]">mental health</span>?
          </h3>
          <div className="h-px w-16 bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Right Stats Column */}
        <div className="space-y-12 md:text-right">
          {/* 84% vs 14% */}
          <div className="space-y-1">
            <span className="text-xl font-bold text-blue-600 block">84% vs 14%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block leading-relaxed">
              Enterprise production AI scaling adoption rate versus clinical psychology deployment readiness.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: McKinsey Global AI Survey / APA Practice Systems
            </span>
          </div>

          {/* < 1% */}
          <div className="space-y-1">
            <span className="text-xl font-bold text-[var(--color-magenta)] block">&lt; 1%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block leading-relaxed">
              Of actionable health data points in behavioral therapy are currently structured electronically.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: Eleos Health Systems Analysis
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Large Numbers Row */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start mt-12 pt-12 border-t border-gray-100">
        
        {/* 200,000 : 1 */}
        <div className="space-y-1">
          <span className="text-lg font-bold text-[var(--color-magenta)] block">200,000 : 1</span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block leading-relaxed">
            Average citizen-to-licensed behavioral practitioner ratio across lower-middle income territories.
          </span>
          <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
            Source: WHO Mental Health Atlas
          </span>
        </div>

        {/* 1 : 150,000 */}
        <div className="text-center space-y-1">
          <span className="text-4xl md:text-5xl font-black text-[var(--color-headline)] block tracking-tight">1 : 150,000</span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block max-w-xs mx-auto leading-relaxed">
            Psychiatrist-to-population ratio in India — roughly a fifth of the WHO minimum standard
          </span>
          <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
            Source: Indian Journal of Psychiatry
          </span>
        </div>

        {/* 80-90% */}
        <div className="text-center space-y-1">
          <span className="text-4xl md:text-5xl font-black text-[var(--color-headline)] block tracking-tight">80–90%</span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block max-w-xs mx-auto leading-relaxed">
            Of people needing mental health care in India never receive it
          </span>
          <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
            Source: National Mental Health Survey (NMHS)
          </span>
        </div>

        {/* 40-60% Admin Burn & Drop-off Column */}
        <div className="md:text-right space-y-8">
          <div className="space-y-1">
            <span className="text-lg font-bold text-[var(--color-headline)] block">40–60% Admin Burn</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block leading-relaxed">
              Of a practitioner's weekly hours spent logging clinical session documentation over active care.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: Provider Burnout Assessment Reports
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-lg font-bold text-[var(--color-magenta)] block">82% Drop-off</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block leading-relaxed">
              In longitudinal engagement logs when mental health support utilizes un-guided standalone applications.
            </span>
            <span className="text-[9px] font-mono text-gray-400 block tracking-tight pt-1">
              Source: Journal of Medical Internet Research (JMIR)
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}