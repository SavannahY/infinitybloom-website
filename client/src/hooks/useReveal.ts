import { useEffect, useRef } from "react";

/**
 * Attaches IntersectionObserver to a single element.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/**
 * Attaches IntersectionObserver to ALL .reveal children inside the container ref.
 * Re-runs whenever the component re-renders (e.g. language change) to catch
 * newly rendered elements. Already-visible elements are skipped.
 */
export function useRevealAll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "50px 0px -10px 0px" }
    );

    elements.forEach((el) => {
      // Skip elements that are already visible
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });

    // Fallback: after 2s, make any still-hidden elements visible
    // This prevents content from being permanently hidden if observer fails
    const fallback = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains("visible")) {
          el.classList.add("visible");
        }
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  });

  return ref;
}
