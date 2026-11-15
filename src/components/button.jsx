export const Button = ({
  className,
  size = "default",
  children,
  href,
  external = false,
  onClick,
}) => {
  const baseClasses =
    "relative isolate overflow-hidden rounded-md border border-white/10 font-medium transition-all duration-300 backdrop-blur-sm " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
    "bg-[color:rgba(26,35,41,0.52)] text-white hover:bg-[color:rgba(26,35,41,0.7)] active:scale-[0.98] " +
    "shadow-[0_4px_0_rgba(0,0,0,0.22)] inline-flex items-center justify-center " +
    "before:absolute before:inset-0 before:content-[''] before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_40%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_3px)] before:opacity-80 before:mix-blend-screen before:pointer-events-none";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs font-semibold leading-tight tracking-wide",
    default: "px-5 py-2 text-sm font-medium leading-tight",
    lg: "px-8 py-3.5 text-base font-medium",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className || ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
