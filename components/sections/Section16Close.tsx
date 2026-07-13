import { Link2 } from "lucide-react";
import Section from "@/components/Section";

export default function Section16Close() {
  return (
    <Section id={16} className="text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-4xl md:text-6xl"
        >
          Thank you.
        </h2>
        <p data-reveal className="mt-4 text-slate-blue text-lg md:text-xl">
          Questions?
        </p>

        <a
          data-reveal
          href="https://www.linkedin.com/in/g-sai-prashanth/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-20 inline-flex items-center gap-3 rounded-xl border border-slate-blue/25 bg-violet/15 px-5 py-3 hover:border-magenta/50 transition"
        >
          <Link2 size={18} className="text-magenta" />
          <span className="text-sm text-slate-blue">
            <span className="text-headline font-medium">G Sai Prashanth</span>
            {" "}&middot; MSc Psychology &middot; HR Analytics &amp; AI
          </span>
        </a>
      </div>
    </Section>
  );
}
