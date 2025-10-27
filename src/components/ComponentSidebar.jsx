// src/components/ComponentSidebar.jsx
import { useEffect, useMemo, useState } from "react";
import { useToc } from "../contexts/TocContext";

export default function ComponentSidebar() {
  const { items = [] } = useToc();
  const [activeId, setActiveId] = useState(items?.[0]?.id);

  useEffect(() => {
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // choose the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );

    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  const content = useMemo(() => items ?? [], [items]);

  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] overflow-auto pr-3">
      <div className="text-xs uppercase tracking-wide text-foreground mb-6">On This Page</div>
      {!content.length ? (
        <div className="text-sm text-foreground">No sections</div>
      ) : (
        <nav className="flex flex-col gap-2">
          {content.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm transition-colors ${
                activeId === s.id ? "text-[var(--fg)]" : "text-foreground/70 hover:text-[var(--fg)]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </aside>
  );
}
