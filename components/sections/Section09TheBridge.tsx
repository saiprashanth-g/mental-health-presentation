import { TrendingDown, HeartPulse, ArrowRight, ArrowLeft } from "lucide-react";
import Section from "@/components/Section";

export default function Section09TheBridge() {
  return (
    <Section id={9}>
      <div className="max-w-5xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-4xl mb-14"
        >
          The bridge
        </h2>

        <div data-reveal className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div className="rounded-2xl border border-coral/30 bg-violet/15 p-6 md:p-8">
            <TrendingDown size={28} className="text-coral mx-auto mb-3" />
            <div className="text-headline font-display font-semibold">
              HR Attrition Flag
            </div>
            <p className="text-slate-blue text-sm mt-2">
              Predicted flight risk, shown to a manager
            </p>
          </div>

          <div className="flex md:flex-col items-center justify-center gap-2 text-magenta">
            <ArrowRight className="hidden md:block" size={22} />
            <ArrowLeft className="hidden md:block" size={22} />
          </div>

          <div className="rounded-2xl border border-magenta/30 bg-violet/15 p-6 md:p-8">
            <HeartPulse size={28} className="text-magenta mx-auto mb-3" />
            <div className="text-headline font-display font-semibold">
              Mental Health Crisis Flag
            </div>
            <p className="text-slate-blue text-sm mt-2">
              Predicted risk, shown to&hellip; who?
            </p>
          </div>
        </div>

        <p
          data-reveal
          className="mt-10 font-display text-xl md:text-2xl text-headline"
        >
          What do you do with a flag,{" "}
          <span className="text-magenta">and who sees it?</span>
        </p>

        <div
          data-reveal
          className="mt-10 flex flex-wrap justify-center gap-3 text-xs md:text-sm text-slate-blue"
        >
          {["Aggregate over individual", "Ongoing consent", "Explainability", "Human review before action"].map(
            (m) => (
              <span
                key={m}
                className="rounded-full border border-slate-blue/30 px-4 py-1.5"
              >
                {m}
              </span>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
