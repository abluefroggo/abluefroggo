import { useMemo, useState } from "react";
import { Button } from "../components/button";
import { navLinks } from "@/data/content";
import { useIdentity } from "@/context/IdentityContext";
import { useActiveSection } from "@/hooks/useActiveSection";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { navbarBrand, isReal } = useIdentity();
  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace("#", "")),
    [],
  );
  const activeId = useActiveSection(sectionIds);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setOpen(false);
  };

  const linkClass = (href) => {
    const id = href.replace("#", "");
    const isActive = activeId === id;

    return [
      "px-3 py-2 text-sm rounded-full transition-colors whitespace-nowrap",
      isActive
        ? "text-primary bg-surface font-medium"
        : "text-muted-foreground hover:text-foreground hover:bg-surface",
    ].join(" ");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 md:py-5">
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="text-sm md:text-lg lg:text-xl font-bold hover:text-primary tracking-[0.15em] md:tracking-[0.35em] text-primary shrink min-w-0 leading-tight"
        >
          {isReal ? (
            <span>{navbarBrand}</span>
          ) : (
            <span className="hidden md:inline">{navbarBrand}</span>
          )}
          {!isReal && (
            <span className="md:hidden tracking-[0.2em]">
              {navbarBrand.replace(/ /g, "")}
            </span>
          )}
          <span className="text-highlight">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={linkClass(link.href)}
                aria-current={activeId === link.href.replace("#", "") ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:block shrink-0">
          <Button href="#contact" size="sm">
            Contact Me
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden glass rounded-full px-4 py-2 text-sm text-primary shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden container mx-auto px-4 md:px-6 pt-2 pb-4">
          <div className="glass rounded-2xl p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={[
                  "px-4 py-3 rounded-lg transition-colors",
                  activeId === link.href.replace("#", "")
                    ? "text-primary bg-surface font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface",
                ].join(" ")}
                aria-current={
                  activeId === link.href.replace("#", "") ? "page" : undefined
                }
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" size="sm" className="mt-2 w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
