import { LineChart, Sparkles, Brain, LayoutGrid } from "lucide-react";
import Section from "@/components/Section";

const interests = [
  { icon: LineChart, label: "HR Analytics" },
  { icon: Sparkles, label: "AI Applications" },
  { icon: Brain, label: "Organizational Psychology" },
  { icon: LayoutGrid, label: "Systems Building" },
];

export default function Section04Interests() {
  return (
    <Section id={4}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-2xl md:text-3xl"
        >
          What I&apos;m interested in
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {interests.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-reveal
              className="flex items-center gap-2 rounded-full border border-slate-blue/30 bg-violet/20 px-5 py-2.5"
            >
              <Icon size={18} className="text-coral" />
              <span className="text-slate-blue text-sm md:text-base">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
