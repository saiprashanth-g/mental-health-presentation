import { FileText, BookOpen, Wrench, Boxes } from "lucide-react";
import Section from "@/components/Section";

const buckets = [
  { icon: FileText, label: "Instructions", desc: "system prompts, standing rules, format constraints" },
  { icon: BookOpen, label: "Knowledge", desc: "retrieved facts and documents the model wasn't trained on" },
  { icon: Wrench, label: "Tools", desc: "external functions and APIs the system can call" },
];

export default function Section08ContextEngineering() {
  return (
    <Section id={8}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-2xl md:text-4xl leading-snug"
        >
          Prompting is what you ask.
          <br />
          <span className="text-magenta">
            Context engineering is what the model already knows before you ask.
          </span>
        </h2>

        <div data-reveal className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
          {buckets.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className="flex items-center gap-6">
              <div className="w-40 rounded-xl border border-slate-blue/20 bg-violet/15 p-5">
                <Icon size={20} className="text-coral mx-auto mb-2" />
                <div className="text-headline font-medium text-sm">{label}</div>
                <div className="text-slate-blue text-xs mt-1">{desc}</div>
              </div>
              {i < buckets.length - 1 && (
                <Boxes size={18} className="text-slate-blue/40 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
