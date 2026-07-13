import React from "react";

export default function Section02WhoIAm() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Big-Format Profile Block */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#111111] rounded-lg overflow-hidden border border-gray-300 p-4 shadow-sm text-white">
          <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden bg-gray-900">
            <img 
              src="/speaker-profile.jpeg" 
              alt="G Sai Prashanth" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="mt-6 space-y-2 px-2 pb-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              G Sai Prashanth
            </h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-magenta)]">
              MSc Psychology — Christ University, Bangalore
            </p>
            <p className="text-xs text-gray-400 tracking-wide mt-1">
              Scaling AI-Augmented Organizations | Designing Cultural Systems | Handling GenZ & Hybrid Teams
            </p>
          </div>
        </div>

        {/* Right Column: High-Density Professional Data Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-magenta)]">
              Speaker Background
            </span>
            <h3 className="text-4xl font-extrabold tracking-tight text-[var(--color-headline)]">
              At the Intersection of Organizational Psychology & AI
            </h3>
            <div className="h-1 w-20 bg-[var(--color-magenta)] mt-2"></div>
          </div>

          {/* Core Biography Statement */}
          <p className="text-lg text-[var(--color-slate-blue)] leading-relaxed font-normal">
            I work at the intersection of psychology and AI, focusing on how organizations build culture, develop people, and adapt to new ways of working. My interests lie in organizational development, people and culture, and how AI is shaping HR practices—especially in the context of Gen Z and evolving workplaces.
          </p>

          {/* Experience Grid Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Box 1: Proven Execution */}
            <div className="bg-white p-5 rounded border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm uppercase text-[var(--color-headline)] tracking-wider">
                Proven Execution
              </h4>
              <p className="text-sm text-[var(--color-slate-blue)] leading-relaxed">
                <strong>Built from the Founder's Office at Dolze AI</strong>. Formulated HR infrastructure and People Pipelines from scratch, rethinking foundational people processes through an AI-first lens.
              </p>
            </div>

            {/* Box 2: Methodology */}
            <div className="bg-white p-5 rounded border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm uppercase text-[var(--color-headline)] tracking-wider">
                Methodological Edge
              </h4>
              <p className="text-sm text-[var(--color-slate-blue)] leading-relaxed">
                Grounding AI workloads in deep empirical research—utilizing meta-analysis, behavioral data modeling, and academic rigor to generate operational playbooks that scale seamlessly.
              </p>
            </div>

          </div>

          {/* Strategic Objectives */}
          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500">
              Core Capabilities & Strategic Focus
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-slate-blue)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-magenta)] font-bold">▪</span> 
                AI-Augmented Talent & Recruitment Pipelines
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-magenta)] font-bold">▪</span> 
                Gamified Behavioral Design & Interventions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-magenta)] font-bold">▪</span> 
                GenZ & Hybrid Work Culture Architecture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-magenta)] font-bold">▪</span> 
                Human-AI Collaboration Team Dynamics
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}