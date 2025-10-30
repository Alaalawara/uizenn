import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";
import InstallationLayout from '../../componentLayout/InstallationLayout';

export default function MagneticButtonPage() {
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
                <h2 className="font-bold tracking-tight">Magnetic Button</h2>
                <p className="text-foreground">
                    Displays a Magnetic button a UI effect where a button follows the user's cursor.
                </p>
            </div>

            <CodeLayout filename='MagneticButton.jsx' code={code}>
                <MagneticButton label="Browse Components" />
            </CodeLayout>

            <div id='installation' className='scroll-mt-24'>
                <InstallationLayout />
            </div>
        </div>
    );
}


const code = `function MagneticButton() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rx = useSpring(x, { stiffness: 150, damping: 12, mass: 0.2 });
    const ry = useSpring(y, { stiffness: 150, damping: 12, mass: 0.2 });

    function move(e) {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 12);
    }
    function leave() {
        x.set(0); y.set(0);
    }

    return (
        <motion.button
            onClick={""}
            onMouseMove={move}
            onMouseLeave={leave}
            style={{ x: rx, y: ry }}
            className="inline-flex select-none items-center gap-2 rounded-xl border-2 border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-[var(--bg)] shadow-sm transition-[box-shadow,transform] hover:shadow-md active:scale-[0.99]"
        >
            Button
        </motion.button>
    );
}
`;


export function MagneticButton({ label, onClick }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rx = useSpring(x, { stiffness: 150, damping: 12, mass: 0.2 });
    const ry = useSpring(y, { stiffness: 150, damping: 12, mass: 0.2 });

    function move(e) {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 12);
    }
    function leave() {
        x.set(0); y.set(0);
    }

    return (
        <motion.button
            onClick={onClick}
            onMouseMove={move}
            onMouseLeave={leave}
            style={{ x: rx, y: ry }}
            className="inline-flex cursor-pointer select-none items-center gap-2 rounded-xl border-2 border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-[var(--bg)] shadow-sm transition-[box-shadow,transform] hover:shadow-md active:scale-[0.99]"
        >
            {label}
        </motion.button>
    );
}