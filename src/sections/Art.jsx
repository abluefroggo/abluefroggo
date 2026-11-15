import { Section } from "@/components/Section";
import { artPieces } from "@/data/content";

export const Art = () => (
  <Section
    id="art"
    eyebrow="Art"
    title="Visual work"
    subtitle="Creative studies, sketches, and personal projects that sit alongside my engineering work."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {artPieces.map((piece) => (
        <article
          key={piece.title}
          className="glass overflow-hidden rounded-2xl border border-border/60"
        >
          <div className={`h-48 bg-gradient-to-br ${piece.accent}`} aria-hidden />
          <div className="space-y-3 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {piece.medium}
            </p>
            <h3 className="text-xl font-semibold text-primary">{piece.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{piece.description}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
