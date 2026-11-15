export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}) => (
  <section
    id={id}
    className={`scroll-mt-24 py-20 md:py-28 px-6 ${className}`}
  >
    <div className="container mx-auto max-w-5xl">
      {(eyebrow || title) && (
        <header className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </div>
  </section>
);
