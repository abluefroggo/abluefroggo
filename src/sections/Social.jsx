import { Section } from "@/components/Section";
import { useIdentity } from "@/context/IdentityContext";
import { socialLinks } from "@/data/content";

const iconMap = {
  github: "github-icon",
  social: "social-icon",
  documentation: "documentation-icon",
};

export const Social = () => {
  const { displayName, isReal } = useIdentity();
  const visibleLinks = socialLinks.filter(
    (link) => !link.requiresReal || isReal,
  );

  return (
    <Section
      id="social"
      eyebrow="Connect"
      title="Social & links"
      subtitle={`Find me as ${displayName} — code, art, and updates across the web.`}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-secondary-foreground/50 hover:shadow-lg hover:shadow-black/15 border border-transparent group"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <svg className="h-6 w-6 text-primary" aria-hidden="true">
                  <use href={`/icons.svg#${iconMap[link.icon]}`} />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground uppercase tracking-wider">
                  {link.platform}
                </span>
                <span className="block text-primary font-medium truncate group-hover:text-secondary-foreground transition-colors">
                  {link.handle}
                </span>
              </span>
              <span
                className="ml-auto text-muted-foreground group-hover:text-highlight transition-colors"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
