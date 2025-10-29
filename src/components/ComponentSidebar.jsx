// src/components/ComponentSidebar.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToc } from "../contexts/TocContext";
import { useCatalog } from "../contexts/CatalogContext";

export default function ComponentSidebar() {
  const { items = [] } = useToc();
  const { items: catalog = [] } = useCatalog();
  const location = useLocation();
  const [activeId, setActiveId] = useState(items?.[0]?.id);

  // Observe headings to highlight active section
  useEffect(() => {
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );
    const nodes = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  const toc = useMemo(() => items ?? [], [items]);

  // Prev/Next: compute neighbors in the flattened catalog
  const idx = catalog.findIndex((c) => c.path === location.pathname);
  const prev = idx > 0 ? catalog[idx - 1] : null;
  const next = idx >= 0 && idx < catalog.length - 1 ? catalog[idx + 1] : null;

  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] overflow-auto pr-3">
      <div className="text-xs uppercase tracking-wide text-foreground/60 mb-3">On This Page</div>
      {!toc.length ? (
        <div className="text-sm text-foreground/60 mb-6">No sections</div>
      ) : (
        <nav className="flex flex-col gap-2 mb-6">
          {toc.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm transition-colors ${
                activeId === s.id ? "text-[var(--fg)]" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}

      {/* Divider */}
      <div className="h-px bg-foreground/10 my-4" />

      {/* Prev/Next */}
      <div className="flex flex-col gap-2">
        {prev && (
          <Link
            to={prev.path}
            className="group rounded-lg border border-foreground/20 px-3 py-2 text-sm hover:bg-secondary transition-colors"
          >
            <div className="text-xs text-foreground/60">Previous</div>
            <div className="font-medium text-[var(--fg)] group-hover:text-black">{prev.title}</div>
          </Link>
        )}
        {next && (
          <Link
            to={next.path}
            className="group rounded-lg border border-foreground/20 px-3 py-2 text-sm hover:bg-secondary transition-colors"
          >
            <div className="text-xs text-foreground/60">Next</div>
            <div className="font-medium text-[var(--fg)] group-hover:text-black">{next.title}</div>
          </Link>
        )}
      </div>
    </aside>
  );
}
