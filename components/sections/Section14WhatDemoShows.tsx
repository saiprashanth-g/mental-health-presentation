import { Eye, MessageCircle, ArrowUpCircle, ArrowRight } from "lucide-react";
import Section from "@/components/Section";

const steps = [
  { icon: Eye, label: "Recognition" },
  { icon: MessageCircle, label: "Response" },
  { icon: ArrowUpCircle, label: "Escalation" },
];

export default function Section14WhatDemoShows() {
  return (
    <Section id={14}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-2xl md:text-3xl mb-12"
        >
          Recognition. Response. Escalation.{" "}
          <span className="text-magenta">Not diagnosis.</span>
        </h2>
        <div data-reveal className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {steps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-violet/30 border border-magenta/40 flex items-center justify-center">
                  <Icon size={26} className="text-magenta" />
                </div>
                <span className="text-slate-blue text-sm">{label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={20} className="text-slate-blue/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
