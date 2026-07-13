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
    <main className="relative">
      <BackgroundDrift />
      <ProgressNav />

      <Section01Opening />
      <Section02WhoIAm />
      <Section05RealQuestion />
      <Section065AIVocabulary />
      <Section06LLMCapability />
      <Section06BScaffolding />
      <Section07PromptEngineering />
      
      {/* New Safe & Intuitive Ethics & Risk Transition */}
      <Section08Bridge />
      <Section09RiskFramework />
      
      {/* Product & Action Layer */}
      <Section12IntroducingWMHIT />
      <Section13LiveDemo />
      <Section14WhatDemoShows />
      <Section15WhereThisGoes />
      <Section16Close />
    </main>
  );
}