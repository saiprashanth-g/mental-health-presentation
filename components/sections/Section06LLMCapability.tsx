import {
  Check,
  X,
  Type,
  ScanSearch,
  FileStack,
  UserCog,
  Database,
  AlertTriangle,
  Stethoscope,
  Repeat,
} from "lucide-react";
import Section from "@/components/Section";

const goodAt = [
  { icon: Type, text: "Language understanding & generation at scale" },
  { icon: ScanSearch, text: "Pattern recognition across large text" },
  { icon: FileStack, text: "Structured content: forms, decision trees, training material" },
  { icon: UserCog, text: "Personalization at scale" },
  { icon: Database, text: "Grounding responses in real documents (RAG)" },
];

const notGoodAt = [
  { icon: AlertTriangle, text: "Hallucination is structural, not just a fixable bug" },
  { icon: Stethoscope, text: "No genuine clinical judgment — pattern-matching, not iterative reasoning" },
  { icon: Repeat, text: "Trained on static snapshots — can't natively track a changing situation" },
  { icon: X, text: "Can be confidently wrong with no signal that it's wrong" },
];

export default function Section06LLMCapability() {
  return (
    <Section id={6}>
      <div className="max-w-5xl mx-auto">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-4xl text-center"
        >
          What LLMs can actually do right now
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div data-reveal className="rounded-2xl border border-coral/30 bg-violet/15 p-6 md:p-8">
            <div className="flex items-center gap-2 text-coral font-display font-semibold text-lg mb-5">
              <Check size={20} /> Good at
            </div>
            <ul className="space-y-4">
              {goodAt.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-sm md:text-base text-slate-blue">
                  <Icon size={18} className="text-coral shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="rounded-2xl border border-magenta/40 bg-violet/15 p-6 md:p-8">
            <div className="flex items-center gap-2 text-magenta font-display font-semibold text-lg mb-5">
              <X size={20} /> Not good at
            </div>
            <ul className="space-y-4">
              {notGoodAt.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-sm md:text-base text-slate-blue">
                  <Icon size={18} className="text-magenta shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          data-reveal
          className="mt-10 text-center text-headline text-base md:text-lg max-w-2xl mx-auto"
        >
          LLMs are excellent at organizing, structuring, and personalizing
          information. They are not reasoning about your wellbeing the way a
          clinician does.
        </p>
      </div>
    </Section>
  );
}
