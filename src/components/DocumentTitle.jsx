import { useEffect } from "react";
import { useIdentity } from "@/context/IdentityContext";

export const DocumentTitle = () => {
  const { displayName } = useIdentity();

  useEffect(() => {
    document.title = `${displayName} — Portfolio`;
  }, [displayName]);

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        `Portfolio of ${displayName} — USACO Platinum, developer behind mastermindchess.org.`,
      );
    }
  }, [displayName]);

  return null;
};
