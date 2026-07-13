import { UserX, Scale3d, Lock, Activity } from "lucide-react";
import Section from "@/components/Section";

const risks = [
  { icon: UserX, label: "Substitution Risk", desc: "A chatbot standing in for a clinician, unsupervised" },
  { icon: Scale3d, label: "Bias in Training Data", desc: "Models can systematically underestimate need in underrepresented groups" },
  { icon: Lock, label: "Consent & Data Sensitivity", desc: "Mental health data is among the most sensitive data that exists" },
  { icon: Activity, label: "Engagement vs. Outcomes", desc: "Optimizing for time-on-app can work against wellbeing" },
];

export default function Section11TheRisk() {
  return (
    <Section id={11}>
      <div className="max-w-4xl mx-auto">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-4xl text-center mb-14"
        >
          Where the real risk sits
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {risks.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              data-reveal
              className="rounded-xl border border-magenta/30 bg-violet/15 p-5 md:p-6"
            >
              <Icon size={22} className="text-magenta mb-3" />
              <div className="text-headline font-medium mb-1">{label}</div>
              <p className="text-slate-blue text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="mt-14 text-center font-display text-xl md:text-2xl text-headline max-w-2xl mx-auto"
        >
          Not diagnosis.{" "}
          <span className="text-magenta">Recognition, response, and escalation.</span>
        </p>
      </div>
    </Section>
  );
}
