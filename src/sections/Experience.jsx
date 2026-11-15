import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've been building"
    subtitle="A mix of production work and ongoing learning."
  >
    <ol className="relative space-y-8 border-l border-border/80 pl-8">
      {experience.map((item) => (
        <li key={`${item.role}-${item.org}`} className="relative">
          <span
            className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-secondary-foreground ring-4 ring-background"
            aria-hidden
          />
          <div className="glass rounded-xl p-6 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-primary">{item.role}</h3>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-secondary-foreground font-medium mb-3">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {item.org} ↗
                </a>
              ) : (
                item.org
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
