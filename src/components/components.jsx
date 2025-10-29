// src/components/components.jsx
import { Link } from "react-router-dom";
import { componentsCatalog } from "../data/componentsCatalog";

// util: group catalog by section and pick first item as entry link
function groupBySection(list) {
    const map = new Map();
    for (const item of list) {
        if (!map.has(item.section)) map.set(item.section, []);
        map.get(item.section).push(item);
    }
    return map; // Map<section, Array<item>>
}

const SECTION_META = {
    Badges: { tagline: "Tiny accents for emphasis", color: "from-indigo-500 to-sky-400" },
    Buttons: { tagline: "Actions with style", color: "from-fuchsia-500 to-pink-400" },
    Cards: { tagline: "Content blocks that breathe", color: "from-emerald-500 to-lime-400" },
    Text: { tagline: "Typography and micro-animations", color: "from-amber-500 to-orange-400" },
    "Input Field": { tagline: "Forms that feel right", color: "from-cyan-500 to-teal-400" },
    Animation: { tagline: "Motion that guides", color: "from-purple-500 to-violet-400" },
    Pages: { tagline: "Full page templates", color: "from-rose-500 to-red-400" },
};

export default function Components() {
    const grouped = groupBySection(componentsCatalog);
    const sections = Array.from(grouped.keys());

    return (
        <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Components</h1>
                <p className="text-foreground/70">
                    Here you can find all the components available in the library. I am working on adding more components.
                </p>
            </header>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sections.map((section) => {
                    const items = grouped.get(section) || [];
                    const first = items[0];
                    const meta = SECTION_META[section] || {
                        tagline: "Curated UI building blocks",
                        color: "from-slate-500 to-zinc-400"
                    };

                    return (
                        <li key={section}>
                            <div className="h-full relative rounded-xl border border-foreground/15 bg-[var(--bg)] overflow-hidden hover:bg-foreground/5">
                                {/* Decorative gradient blob */}
                                <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${meta.color} opacity-20 blur-xl`} />

                                <div className="relative p-5 flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold">{section}</h3>
                                    </div>

                                    <p className="text-sm text-foreground/70">{meta.tagline}</p>

                                    <div className="mt-1 text-xs text-foreground/60">
                                        {items.length} component{items.length === 1 ? "" : "s"}
                                    </div>

                                    <div className="mt-3">
                                        {first ? (
                                            <Link
                                                to={first.path}
                                                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5 transition-colors"
                                                aria-label={`Explore ${section}`}
                                            >
                                                Explore
                                            </Link>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-3 py-1.5 text-sm text-foreground/50">
                                                Coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
