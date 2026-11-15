import { Section } from "@/components/Section";
import { site, skillGroups } from "@/data/content";
import { useIdentity } from "@/context/IdentityContext";

export const About = () => {
  const { displayName } = useIdentity();

  return (
    <Section
      id="about"
      eyebrow="About"
      title={`I'm ${displayName}`}
      subtitle={`${site.bio.flags} · ${site.bio.headline}`}
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a Chinese-American student who competes in algorithmic programming
            and builds real software — from ML experiments to game engines to production
            web apps.
          </p>
          <p className="text-primary/95">{site.bio.tech}</p>
          <p>{site.bio.beyond}</p>
          <p>
            One project I&apos;m proud of is{" "}
            <a
              href="https://mastermindchess.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              mastermindchess.org
            </a>
            — the camp site for Mastermind Chess, tying together my interest in chess
            and full-stack development.
          </p>
        </div>
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="glass rounded-2xl p-6 md:p-7">
              <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
