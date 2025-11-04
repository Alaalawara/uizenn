import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { componentsCatalog } from "../data/componentsCatalog";

export default function Sidebar() {
  const groups = useMemo(() => {
    const map = new Map();
    for (const item of componentsCatalog) {
      if (!map.has(item.section)) map.set(item.section, []);
      map.get(item.section).push(item);
    }
    return Array.from(map.entries());
  }, []);

  const base = "block flex text-left rounded-lg px-2 py-1 text-sm";
  const hover = "hover:bg-secondary hover:text-[var(--fg)] dark:hover:text-[var(--bg)] lg:size-max md:size-max";
  const active = "bg-secondary text-[var(--fg)] dark:text-[var(--bg)] lg:size-max md:size-max";

  return (
    <nav
      className="sticky top-20 overflow-auto"
      style={{
        maxHeight: "unset",
        overflow: "visible",
      }}
    >
      <div
        className="pr-1"
        style={{
          maxHeight: "inherit",
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        {groups.map(([section, links]) => (
          <div key={section} className="mb-6 min-w-0">
            <div className="px-2 pb-1 text-base uppercase font-medium tracking-wide text-foreground/70">
              <span className="break-words">{section}</span>
            </div>

            <ul className="flex flex-col gap-1 min-w-0">
              {links.map((l) => (
                <li key={l.path} className="min-w-0">
                  <NavLink
                    to={l.path}
                    className={({ isActive }) =>
                      [
                        base,
                        hover,
                        isActive ? active : "text-foreground/90",
                        "truncate md:whitespace-normal md:truncate-0",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
                      ].join(" ")
                    }
                    title={l.title}
                  >
                    <span className="inline-block min-w-0 align-middle">{l.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
