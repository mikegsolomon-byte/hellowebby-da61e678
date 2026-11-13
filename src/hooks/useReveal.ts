import { useEffect, useRef, useState } from "react";

/**
 * Fades a group's direct children up as it scrolls into view, with a small
 * stagger between them (styles live under .reveal in index.css).
 *
 * Spread the result onto the existing wrapper:
 *   const reveal = useReveal();
 *   <div ref={reveal.ref} className={`grid gap-8 ${reveal.className}`}>
 *
 * The hidden state is only applied after mount, so without JavaScript the
 * content renders normally, and a failsafe timer means it can never stay
 * invisible if IntersectionObserver doesn't fire.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;

    if (reduced || typeof IntersectionObserver === "undefined" || !node) {
      setShown(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);

    const failsafe = window.setTimeout(() => setShown(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return {
    ref,
    className: `${armed ? "reveal" : ""}${shown ? " is-visible" : ""}`.trim(),
  };
}

export default useReveal;
