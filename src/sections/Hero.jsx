import { Button } from "@/components/button";
import { useIdentity } from "@/context/IdentityContext";
import { site } from "@/data/content";

export const Hero = () => {
  const { displayName } = useIdentity();

  return (
    <section id="top" className="hero min-h-screen flex flex-col justify-center scroll-mt-24">
      <div className="hero-content container mx-auto max-w-5xl w-full">
        <div className="hero-text">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-highlight/90">
            {site.bio.flags} · {site.bio.headline}
          </p>
          <h1 className="hero-title text-primary">
            Hi, I&apos;m <span className="text-highlight">{displayName}</span>
          </h1>
          <p className="mt-5 text-2xl font-semibold text-highlight md:text-4xl">
            Art and programming commisions open!! :D
          </p>
          <p className="mt-4 text-lg md:text-xl text-primary/90 max-w-2xl leading-relaxed">
            Chinese-American programmer and creative.
          </p>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">
            {site.bio.tech} · {site.bio.beyond}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              View my work
            </Button>
            <Button
              href="#contact"
              size="lg"
              className="!bg-transparent !shadow-none border border-primary/40 text-primary hover:!bg-primary/10"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
