import React from "react";

export default function Section05RealQuestion() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden border-b border-gray-200">
      
      {/* --- SCATTERED DATA CLOUD BACKGROUND TIER --- */}
      {/* Top Left Cluster */}
      <div className="absolute top-[12%] left-[8%] max-w-[180px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-[var(--color-magenta)] tracking-tight">11 Years</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Average delay between symptom onset and initial treatment intervention.
        </div>
      </div>

      <div className="absolute top-[28%] left-[5%] max-w-[160px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-slate-700 tracking-tight">$1.0 Trillion</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Annual global economic loss driven exclusively by anxiety & depression productivity drops.
        </div>
      </div>

      {/* Top Right Cluster */}
      <div className="absolute top-[10%] right-[10%] max-w-[190px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-slate-700 tracking-tight">4.3% vs 84%</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Finance sector AI adoption rate versus clinical psychology deployment readiness.
        </div>
      </div>

      <div className="absolute top-[32%] right-[6%] max-w-[160px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-[var(--color-magenta)] tracking-tight">&lt; 1%</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Of actionable health data points in behavioral therapy are currently structured electronically.
        </div>
      </div>

      {/* Bottom Left Cluster */}
      <div className="absolute bottom-[28%] left-[6%] max-w-[170px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-slate-700 tracking-tight">18% Triage Margin</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Error spectrum observed in initial intake priority scoring under high-volume crisis manual loads.
        </div>
      </div>

      <div className="absolute bottom-[10%] left-[12%] max-w-[180px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-[var(--color-magenta)] tracking-tight">200,000 : 1</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Average citizen-to-licensed behavioral practitioner ratio across lower-middle income territories.
        </div>
      </div>

      {/* Bottom Right Cluster */}
      <div className="absolute bottom-[25%] right-[5%] max-w-[170px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-slate-700 tracking-tight">40-60% Admin Burn</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          Of a practitioner's weekly hours spent logging clinical session documentation over active care.
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[12%] max-w-[180px] pointer-events-none hidden md:block">
        <div className="text-sm font-black text-[var(--color-magenta)] tracking-tight">82% Drop-off</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400 leading-tight mt-0.5">
          In longitudinal engagement logs when mental health support utilizes un-guided standalone applications.
        </div>
      </div>


      {/* --- CENTRAL MAIN DATA POINTS CONTAINER --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-12">
        
        {/* Main Title Banner */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[var(--color-headline)] max-w-3xl mx-auto">
            AI has moved fast in HR, finance, retail. <br />
            Why hasn’t it moved in <span className="text-[var(--color-magenta)]">mental health</span>?
          </h2>
          <div className="h-0.5 w-16 bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Core Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto pt-4">
          
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-black tracking-tight text-[var(--color-headline)]">
              1 : 150,000
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 leading-relaxed max-w-xs mx-auto">
              psychatrist-to-population ratio in India — roughly a fifth of the WHO minimum standard
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-black tracking-tight text-[var(--color-headline)]">
              80–90%
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 leading-relaxed max-w-xs mx-auto">
              of people needing mental health care in India never receive it
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}