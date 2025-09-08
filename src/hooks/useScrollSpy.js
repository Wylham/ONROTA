import { useEffect, useState } from "react";

export default function useScrollSpy(ids = []) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
