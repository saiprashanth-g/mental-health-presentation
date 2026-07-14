'use client';

import React from "react";
import AnimationStagger from "@/components/AnimationStagger";
import BackgroundDrift from "@/components/BackgroundDrift";
import ProgressNav from "@/components/ProgressNav";

import Section01Opening from "@/components/sections/Section01Opening";
import Section02WhoIAm from "@/components/sections/Section02WhoIAm";
import Section05RealQuestion from "@/components/sections/Section05RealQuestion";
import Section065AIVocabulary from "@/components/sections/Section065AIVocabulary";
import Section06LLMCapability from "@/components/sections/Section06LLMCapability";
import Section06BScaffolding from "@/components/sections/Section06BScaffolding";
import Section07PromptEngineering from "@/components/sections/Section07PromptEngineering";
import Section08Bridge from "@/components/sections/Section08Bridge";
import Section09RiskFramework from "@/components/sections/Section09RiskFramework";
import Section12IntroducingWMHIT from "@/components/sections/Section12IntroducingWMHIT";
import Section13LiveDemo from "@/components/sections/Section13LiveDemo";
import Section14WhatDemoShows from "@/components/sections/Section14WhatDemoShows";
import Section15WhereThisGoes from "@/components/sections/Section15WhereThisGoes";
import Section16Close from "@/components/sections/Section16Close";

export default function Home() {
  return (
    <main className="relative w-full text-[var(--color-headline)] antialiased selection:bg-[var(--color-magenta)] selection:text-white">
      <BackgroundDrift />
      <ProgressNav />

      {/* Slide 1: Opening */}
      <AnimationStagger selector=".animate-slide" duration={0.6} y={30}>
        <div className="animate-slide">
          <Section01Opening />
        </div>
      </AnimationStagger>

      {/* ANCHOR HOOK: Moved immediately after Introduction */}
      <Section08Bridge />

      {/* Slide 2: Who I Am */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section02WhoIAm />
        </div>
      </AnimationStagger>

      {/* Slide 5: Real Question / Data Matrix */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section05RealQuestion />
        </div>
      </AnimationStagger>

      {/* Slide 6: AI Vocabulary */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section065AIVocabulary />
        </div>
      </AnimationStagger>

      {/* Slide 6.1: LLM Capability */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section06LLMCapability />
        </div>
      </AnimationStagger>

      {/* Slide 6.2: Scaffolding */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section06BScaffolding />
        </div>
      </AnimationStagger>

      {/* Slide 7: Prompt Engineering */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section07PromptEngineering />
        </div>
      </AnimationStagger>
      
      {/* Slide 9: Risk & Guardrails */}
      <Section09RiskFramework />
      
      {/* Slide 12: Introducing WMHIT */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section12IntroducingWMHIT />
        </div>
      </AnimationStagger>

      {/* Slide 13: Live Demo */}
      <AnimationStagger selector=".animate-slide" duration={0.5}>
        <div className="animate-slide">
          <Section13LiveDemo />
        </div>
      </AnimationStagger>

      {/* Slide 14: What Demo Shows */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section14WhatDemoShows />
        </div>
      </AnimationStagger>

      {/* Slide 15: Where This Goes */}
      <AnimationStagger selector=".animate-slide">
        <div className="animate-slide">
          <Section15WhereThisGoes />
        </div>
      </AnimationStagger>

      {/* Slide 16: Closing */}
      <AnimationStagger selector=".animate-slide" duration={0.7} y={15}>
        <div className="animate-slide">
          <Section16Close />
        </div>
      </AnimationStagger>
    </main>
  );
}