import { CheckCircle2, AlertCircle, Scale } from "lucide-react";
import Section from "@/components/Section";

export default function Section10CaseForAI() {
  return (
    <Section id={10}>
      <div className="max-w-4xl mx-auto">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-4xl text-center"
        >
          Wysa &mdash; built in Bengaluru
        </h2>
        <p data-reveal className="text-center text-slate-blue mt-3 max-w-xl mx-auto">
          A guided self-help and triaging tool, not a generative open-ended chatbot.
        </p>

        <div className="mt-12 space-y-5">
          <div
            data-reveal
            className="rounded-xl border border-coral/30 bg-violet/15 p-5 md:p-6 flex gap-4"
          >
            <CheckCircle2 size={22} className="text-coral shrink-0 mt-1" />
            <div>
              <div className="text-headline font-medium mb-1">Strongest finding</div>
              <p className="text-slate-blue text-sm md:text-base">
                Within five days of use, self-reported therapeutic alliance
                scores were comparable to in-person CBT &mdash; this measures
                perceived bond, not clinical outcome equivalence.
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="rounded-xl border border-slate-blue/30 bg-violet/10 p-5 md:p-6 flex gap-4"
          >
            <Scale size={22} className="text-slate-blue shrink-0 mt-1" />
            <div>
              <div className="text-headline font-medium mb-1">Mixed finding</div>
              <p className="text-slate-blue text-sm md:text-base">
                A 3-week Indian study using DASS-21 found non-significant
                results for some participants, partly attributed to short
                duration and skepticism about a chatbot&apos;s capacity to help.
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="rounded-xl border border-magenta/30 bg-violet/15 p-5 md:p-6 flex gap-4"
          >
            <AlertCircle size={22} className="text-magenta shrink-0 mt-1" />
            <div>
              <div className="text-headline font-medium mb-1">Complicating finding</div>
              <p className="text-slate-blue text-sm md:text-base">
                A 2025 comparative study found general-purpose GPT-4
                outperformed purpose-built therapeutic bots &mdash; including
                Wysa &mdash; at recognizing and correcting cognitive biases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
