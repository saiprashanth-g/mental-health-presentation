import Image from "next/image";
import Section from "@/components/Section";

export default function Section03Dolze() {
  return (
    <Section id={3}>
      <div className="max-w-5xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-5xl"
        >
          Founder&apos;s Office, <span className="text-magenta">Dolze AI</span>
        </h2>
        <p data-reveal className="mt-4 text-slate-blue max-w-xl mx-auto">
          Building HR infrastructure from scratch for an AI-native startup.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <figure
            data-reveal
            className="group rounded-2xl overflow-hidden border border-slate-blue/20 bg-violet/20 shadow-xl transition-shadow hover:shadow-magenta/20"
          >
            <div className="relative aspect-[16/9] bg-deep-purple">
              <Image
                src="/dolze/client-cortex.png"
                alt="Client Cortex — Notion-based client operating system"
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="p-4 text-sm text-slate-blue border-t border-slate-blue/10">
              5-database Client OS replacing 4 disconnected tools.
            </figcaption>
          </figure>

          <figure
            data-reveal
            className="group rounded-2xl overflow-hidden border border-slate-blue/20 bg-violet/20 shadow-xl transition-shadow hover:shadow-magenta/20"
          >
            <div className="relative aspect-[16/9] bg-deep-purple">
              <Image
                src="/dolze/trello-hiring.png"
                alt="Hiring pipeline board on Trello"
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="p-4 text-sm text-slate-blue border-t border-slate-blue/10">
              End-to-end hiring pipeline &mdash; from shortlist to onboarding.
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
