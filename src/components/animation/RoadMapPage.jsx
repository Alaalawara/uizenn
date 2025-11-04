import { motion } from "framer-motion";
import { useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";
import InstallationLayout from '../../componentLayout/InstallationLayout';

export default function RoadMapPage() {
    const { setItems } = useToc();

    const hasInstallation = true;
    const hasUsage = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "installation", label: "Installation" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "installation" && hasInstallation)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasInstallation, hasUsage]);

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasUsage]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Road Map Animation</h2>
                <p className="text-foreground">
                    Displays a Road Map for visualizing a path or progression.
                </p>
            </div>

            <CodeLayout filename='MagneticButton.jsx' code={code} enableRefresh>
                {({ refreshKey }) => (
                    <div key={refreshKey} className="lg:w-[600px] w-[200px]">
                        <Roadmap />
                    </div>
                )}
            </CodeLayout>

            <div id='installation' className='scroll-mt-24'>
                <InstallationLayout />
            </div>
        </div>
    );
}


const code = `function Roadmap() {
    const items = [
        { q: "Past", t: "Foundations shipped", d: "Core components with smooth micro‑interactions." },
        { q: "Present", t: "Refining experience", d: "Accessibility, docs polish, and new everyday patterns." },
        { q: "Future", t: "Expand the library", d: "More components, better theming hooks, richer examples." }
    ];

    return (
        <div className="relative">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-foreground/15" />
            <ul className="space-y-6">
                {items.map((it, i) => (
                    <motion.li
                        key={it.q}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="relative pl-8"
                    >
                        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-foreground/30" />
                        <div className="text-sm font-semibold">{it.q} — {it.t}</div>
                        <div className="text-sm text-foreground/70">{it.d}</div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
`;

export function Roadmap() {
    const items = [
        { q: "Past", t: "Foundations shipped", d: "Core components with smooth micro‑interactions." },
        { q: "Present", t: "Refining experience", d: "Accessibility, docs polish, and new everyday patterns." },
        { q: "Future", t: "Expand the library", d: "More components, better theming hooks, richer examples." }
    ];

    return (
        <div className="relative">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-foreground/15" />
            <ul className="space-y-6">
                {items.map((it, i) => (
                    <motion.li
                        key={it.q}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="relative pl-8"
                    >
                        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-foreground/30" />
                        <div className="text-sm font-semibold">{it.q} — {it.t}</div>
                        <div className="text-sm text-foreground/70">{it.d}</div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}