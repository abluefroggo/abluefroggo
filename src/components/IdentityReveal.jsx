import { useState } from "react";
import { useIdentity } from "@/context/IdentityContext";

export const IdentityReveal = () => {
  const { isReal, tryReveal, clearReal } = useIdentity();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tryReveal(value)) {
      setValue("");
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto"
    >
      <label htmlFor="identity-reveal" className="sr-only">
        Reveal legal name
      </label>
      <input
        id="identity-reveal"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError(false);
        }}
        placeholder={isReal ? "Showing legal name" : "Enter name to reveal"}
        className={`glass rounded-full px-4 py-2 text-sm text-primary placeholder:text-muted-foreground min-w-[12rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
          error ? "border border-highlight/60" : ""
        }`}
        autoComplete="off"
        spellCheck={false}
      />
      {!isReal ? (
        <button
          type="submit"
          className="rounded-full px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          Reveal
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            clearReal();
            setValue("");
            setError(false);
          }}
          className="rounded-full px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          Use pseudonym
        </button>
      )}
    </form>
  );
};
