import { useEffect, useState } from "react";

export function useActiveSection(sectionIds, rootMargin = "-35% 0px -50% 0px") {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const updateFromScroll = () => {
      if (window.scrollY < 80) {
        setActiveId("top");
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (updateFromScroll()) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold: [0, 0.15, 0.35, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFromScroll);
    };
  }, [sectionIds, rootMargin]);

  return activeId;
}
