import { useEffect } from "react";
import {
    motion,
    useSpring,
    useTransform,
    useMotionValue, animate
} from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";

export default function StatsAnimationPage() {
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
                <h2 className="font-bold tracking-tight">Stats Animation</h2>
                <p className="text-foreground">
                    Displays a animated statistics or number.
                </p>
            </div>

            <CodeLayout filename='StatsBand.jsx' code={code} enableRefresh>
                {({ refreshKey }) => (
                    <div key={refreshKey}>
                <StatsBand />
                </div>
                )}
            </CodeLayout>

            <div id='installation' className='scroll-mt-24'>
                <InstallationLayout />
            </div>
        </div>
    );
}

const code = `function StatsBand() {
    const stats = [
        { label: "Components", to: 50 },
        { label: "Downloads", to: 1000 },
        { label: "Stars", to: 3_200 },
        { label: "Viewers", to: 5000 },
    ];
    return (
        <div className="rounded-xl border border-foreground/15 p-4 md:p-5">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                    <Counter key={s.label} to={s.to} delay={i * 0.1} label={s.label} />
                ))}
            </div>
        </div>
    );
}
function Counter({ to, label, delay = 0 }) {
    const v = useMotionValue(0);
    const sv = useSpring(v, { stiffness: 120, damping: 20 });
    useEffect(() => {
        const controls = animate(v, to, { duration: 1.2, delay, ease: "easeOut" });
        return () => controls.stop();
    }, [to, delay, v]);
    const text = useTransform(sv, (n) =>
        Intl.NumberFormat("en", { notation: "compact" }).format(Math.round(n))
    );
    return (
        <div className="flex flex-col items-center">
            <motion.span className="text-2xl font-semibold">{text}</motion.span>
            <span className="text-sm text-foreground/70">{label}</span>
        </div>
    );
}
`;

export function StatsBand() {
    const stats = [
        { label: "Components", to: 50 },
        { label: "Downloads", to: 1000 },
        { label: "Stars", to: 3_200 },
        { label: "Viewers", to: 5000 },
    ];
    return (
        <div className="rounded-xl border border-foreground/15 p-4 md:p-5">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                    <Counter key={s.label} to={s.to} delay={i * 0.1} label={s.label} />
                ))}
            </div>
        </div>
    );
}
function Counter({ to, label, delay = 0 }) {
    const v = useMotionValue(0);
    const sv = useSpring(v, { stiffness: 120, damping: 20 });
    useEffect(() => {
        const controls = animate(v, to, { duration: 1.2, delay, ease: "easeOut" });
        return () => controls.stop();
    }, [to, delay, v]);
    const text = useTransform(sv, (n) =>
        Intl.NumberFormat("en", { notation: "compact" }).format(Math.round(n))
    );
    return (
        <div className="flex flex-col items-center">
            <motion.span className="text-2xl font-semibold">{text}</motion.span>
            <span className="text-sm text-foreground/70">{label}</span>
        </div>
    );
}