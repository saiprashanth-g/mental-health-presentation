import React from "react";

export default function Section05RealQuestion() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 border-b border-gray-200 bg-[var(--color-bg-grid)]">
      
      {/* Central Hook Question */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 mb-16 z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[var(--color-headline)] leading-tight">
          AI has moved fast in HR, finance, retail. <br />
          <span className="text-[var(--color-magenta)]">Why hasn’t it moved in mental health?</span>
        </h2>
        <div className="h-0.5 w-20 bg-[var(--color-magenta)] mx-auto"></div>
      </div>

      {/* High-Density Data Matrix Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Card 1: Treatment Delay */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-[var(--color-magenta)] block">11 Years</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">Average Delay to Intervention</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              The typical lag time between initial symptom onset and an individual receiving their first professional clinical treatment.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: National Alliance on Mental Illness (NAMI) / Wang et al.</span>
        </div>

        {/* Card 2: Economic Loss */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-[var(--color-headline)] block">$1.0 Trillion</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">Global Productivity Loss</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              Annual global economic burden driven entirely by unmitigated anxiety and depression productivity drops.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: World Health Organization (WHO) Fact Sheets</span>
        </div>

        {/* Card 3: REAL COMPARATIVE STAT (Replacing placeholder) */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-blue-600 block">84% vs 14%</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">The Infrastructure Asymmetry</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              84% of financial enterprises have scaled production AI systems, compared to under 14% of psychological clinics utilizing validated digital automation interfaces.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: McKinsey Global AI Survey / APA Practice Systems Analysis</span>
        </div>

        {/* Card 4: Workforce Crisis */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-[var(--color-headline)] block">1 : 150,000</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">Psychiatrist Deficiency Ratio</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              The approximate provider-to-population ratio in developing regions, representing less than a fifth of the basic standard suggested for baseline safety.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: Indian Journal of Psychiatry / Ministry of Health (PIB)</span>
        </div>

        {/* Card 5: Treatment Gap */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-[var(--color-headline)] block">80% – 90%</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">Unmet Clinical Need</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              The vast proportion of individuals experiencing diagnosable behavioral health conditions who receive zero active professional care.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: National Mental Health Survey (NMHS)</span>
        </div>

        {/* Card 6: Admin Burnout */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <span className="text-3xl font-black text-red-600 block">40% – 60%</span>
            <p className="text-sm font-bold text-[var(--color-headline)] uppercase tracking-wide">Administrative Overhead Burnout</p>
            <p className="text-xs text-[var(--color-slate-blue)] leading-relaxed">
              Percentage of a practitioner's active weekly hours lost entirely to manual session text logging, progress tracking, and insurance justifications.
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block border-t border-gray-100 pt-2 font-mono">Source: Eleos Health Clinician Study / Provider Burnout Report</span>
        </div>

      </div>
    </section>
  );
}