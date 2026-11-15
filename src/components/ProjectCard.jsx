import { Button } from "./button";

export const ProjectCard = ({
  title,
  url,
  description,
  tags = [],
  year,
  featured = false,
}) => (
  <article
    className={`glass group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 transition-all duration-300 hover:border-secondary-foreground/40 hover:shadow-lg hover:shadow-black/20 ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    <div
      className="relative h-44 md:h-52 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#143B34] via-[#1a4d44] to-[#0f2a26]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)] bg-[length:24px_24px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl md:text-7xl opacity-90 select-none" role="img" aria-label="chess">
          ♞
        </span>
      </div>
      {featured && (
        <span className="absolute top-4 left-4 rounded-full bg-highlight/90 px-3 py-1 text-xs font-semibold text-[#1a2329] uppercase tracking-wide">
          Featured
        </span>
      )}
      {year && (
        <span className="absolute top-4 right-4 text-sm text-primary/80 font-medium">
          {year}
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-3 py-1 text-xs text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button
        href={url}
        external
        size="sm"
        className="self-start"
      >
        Visit site →
      </Button>
    </div>
  </article>
);
