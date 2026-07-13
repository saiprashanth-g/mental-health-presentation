import Section from "@/components/Section";

export default function Section12IntroducingWMHIT() {
  return (
    <Section id={12}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-semibold text-headline text-3xl md:text-5xl leading-tight"
        >
          Workplace Mental Health
          <br />
          <span className="text-magenta">Intervention Training</span>
        </h2>
        <p data-reveal className="mt-6 text-slate-blue text-lg max-w-xl mx-auto">
          A tool that trains non-clinicians to recognize, respond, and
          escalate appropriately.
        </p>
      </div>
    </Section>
  );
}
