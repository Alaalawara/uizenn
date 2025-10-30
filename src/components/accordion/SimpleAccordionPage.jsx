import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";

export default function SimpleAccordionPage() {
    const { setItems } = useToc();

    const hasUsage = true;
    const hasInstallation = true;

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


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Accordian - FAQs</h2>
                <p className="text-foreground">
                    The Accordion component lets users show and hide sections of related content on a page.
                </p>
            </div>

            <CodeLayout filename='SimpleAccordian.jsx' code={code}>
                <FAQ />
            </CodeLayout>

            <div id='installation' className='scroll-mt-24'>
                <InstallationLayout />
            </div>
        </div>
    );
}

const code = `export function FAQ() {
    const faqs = [
        { q: "What is uizenn?", a: "UI library in zenn way" },
        { q: "Can I use it commercially?", a: "Yes. Use freely anywhere." },
        { q: "Does it support dark mode?", a: "Fully. The system is driven by CSS variables that flip with data‑theme." }
    ];
    return (
        <div className="rounded-xl border border-foreground/15">
            {faqs.map((f, i) => (
                <AccordionItem key={i} title={f.q} text={f.a} defaultOpen={i === 0} />
            ))}
        </div>
    );
}

function AccordionItem({ title, text, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border-b last:border-b-0 border-foreground/10">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
                <span className="text-sm font-medium">{title}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                >
                    ▼
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
            >
                <div className="px-4 pb-4 text-sm text-foreground/70">{text}</div>
            </motion.div>
        </div>
    );
}
`;

export function FAQ() {
    const faqs = [
        { q: "What is uizenn?", a: "UI library in zenn way" },
        { q: "Can I use it commercially?", a: "Yes. Use freely anywhere." },
        { q: "Does it support dark mode?", a: "Fully. The system is driven by CSS variables that flip with data‑theme." }
    ];
    return (
        <div className="rounded-xl border border-foreground/15">
            {faqs.map((f, i) => (
                <AccordionItem key={i} title={f.q} text={f.a} defaultOpen={i === 0} />
            ))}
        </div>
    );
}

function AccordionItem({ title, text, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border-b last:border-b-0 border-foreground/10">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
                <span className="text-sm font-medium">{title}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                >
                    ▼
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
            >
                <div className="px-4 pb-4 text-sm text-foreground/70">{text}</div>
            </motion.div>
        </div>
    );
}