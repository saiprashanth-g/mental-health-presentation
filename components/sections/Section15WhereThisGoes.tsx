import Section from "@/components/Section";

export default function Section15WhereThisGoes() {
  return (
    <Section id={15} className="text-center">
      <div className="max-w-2xl mx-auto">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-4xl leading-tight"
        >
          AI helping the people{" "}
          <span className="text-coral">who help.</span>
        </h2>
        <p data-reveal className="mt-6 text-slate-blue text-base md:text-lg">
          Not AI replacing HR teams, managers, or faculty &mdash; AI helping
          them do that work better. Identification, response guidance,
          faster connection to real support. Never a replacement for
          clinical judgment.
        </p>
      </div>
    </Section>
  );
}
