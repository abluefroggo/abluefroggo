import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { site } from "@/data/content";

const STORAGE_KEY = "portfolio-identity-real";

const IdentityContext = createContext(null);

function readUrlRealMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode")?.toLowerCase();
  const name = params.get("name")?.toLowerCase();

  if (params.has("real") || mode === "real") return true;

  return site.identity.urlKeys.some(
    (key) => key === mode || key === name || params.has(key),
  );
}

function matchesRevealPhrase(value) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return false;

  const candidates = [
    site.name,
    site.name.toLowerCase(),
    ...site.identity.revealPhrases,
  ];

  return candidates.some((c) => c.toLowerCase() === normalized);
}

export function IdentityProvider({ children }) {
  const [isReal, setIsReal] = useState(() => {
    if (readUrlRealMode()) return true;
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  });

  const persist = useCallback((real) => {
    setIsReal(real);
    if (real) sessionStorage.setItem(STORAGE_KEY, "1");
    else sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  const tryReveal = useCallback(
    (input) => {
      if (matchesRevealPhrase(input)) {
        persist(true);
        return true;
      }
      return false;
    },
    [persist],
  );

  const clearReal = useCallback(() => persist(false), [persist]);

  const value = useMemo(() => {
    const displayName = isReal ? site.name : site.handle;
    const displayNameSpaced = isReal ? site.name : site.handleSpaced;
    const navbarBrand = isReal ? site.name : site.handleSpaced;

    return {
      isReal,
      displayName,
      displayNameSpaced,
      navbarBrand,
      setReal: () => persist(true),
      clearReal,
      tryReveal,
    };
  }, [isReal, persist, tryReveal, clearReal]);

  return (
    <IdentityContext.Provider value={value}>{children}</IdentityContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useIdentity() {
  const ctx = useContext(IdentityContext);
  if (!ctx) {
    throw new Error("useIdentity must be used within IdentityProvider");
  }
  return ctx;
}
