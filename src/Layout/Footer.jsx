import { IdentityReveal } from "@/components/IdentityReveal";
import { useIdentity } from "@/context/IdentityContext";

export const Footer = () => {
  const { displayName } = useIdentity();

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {displayName}
          </p>
          <IdentityReveal />
        </div>
        <div className="flex justify-center sm:justify-end">
          <a
            href="https://mastermindchess.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            mastermindchess.org
          </a>
        </div>
      </div>
    </footer>
  );
};
