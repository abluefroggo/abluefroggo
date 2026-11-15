import { Section } from "@/components/Section";
import { highlights } from "@/data/content";

export const Testimonials = () => (
  <Section
    id="highlights"
    eyebrow="Highlights"
    title="Quick facts"
    subtitle="A few ways I spend my time building, competing, and creating."
  >
    <div className="grid gap-6 sm:grid-cols-3">
      {highlights.map((item) => (
        <article
          key={item.label}
          className="glass rounded-2xl p-6 text-center flex flex-col items-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-highlight mb-2">
            {item.stat}
          </p>
          <h3 className="text-primary font-semibold mb-2">{item.label}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.detail}
          </p>
        </article>
      ))}
    </div>
  </Section>
);
