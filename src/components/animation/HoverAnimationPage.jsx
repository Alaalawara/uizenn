import { useEffect } from "react";
import CodeLayout from "../../componentLayout/CodeLayout";
import { useToc } from "../../contexts/TocContext";

export default function HoverAnimationPage() {
    const { setItems } = useToc();

    const hasInstallation = true;
    const hasUsage = true;
    const hasExamples = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "examples", label: "Examples" }
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "examples" && hasExamples)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasInstallation, hasUsage, hasExamples]);

    return (
        <div className="flex flex-col gap-10">
            <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h2 className="font-bold tracking-tight text-2xl">Hover Animation</h2>
                <p className="text-foreground">Interactive hover animation. Credit: @samirande_</p>
            </div>

            <CodeLayout filename="HoverAnimation.jsx" code={Code1}>
                <HoverAnimation />
            </CodeLayout>

            <div id="examples" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">$$$$$</h3>
            </div>

            <CodeLayout filename="DollarAnimation.jsx" code={Code2}>
                <DollarAnimation />
            </CodeLayout>

            <div className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">*****</h3>
            </div>

            <CodeLayout filename="StarAnimation.jsx" code={Code3}>
                <StarAnimation />
            </CodeLayout>

        </div>
    );
}

function HoverAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="lg:w-[600px] w-200px h-50 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-neutral-400 transition-all duration-0 hover:text-[var(--fg)] cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        +
                    </p>
                </div>
            ))}
        </div>
    );
}

function DollarAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="lg:w-[600px] w-200px h-60 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-green-300 transition-all duration-0 hover:text-green-600 cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        $
                    </p>
                </div>
            ))}
        </div>
    );
}

function StarAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="lg:w-[600px] w-200px h-60 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-yellow-300 transition-all duration-0 hover:text-yellow-600 cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        *
                    </p>
                </div>
            ))}
        </div>
    );
}

const Code1 = `function HoverAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="w-[600px] h-50 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-neutral-400 transition-all duration-0 hover:text-black cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        +
                    </p>
                </div>
            ))}
        </div>
    );
}`

const Code2=`function DollarAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="w-[600px] h-60 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-green-300 transition-all duration-0 hover:text-green-600 cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        $
                    </p>
                </div>
            ))}
        </div>
    );
}`;

const Code3=`function StarAnimation({ count = 220 }) {
    const items = Array.from({ length: count });
    return (
        <div className="w-[600px] h-60 mt-3 rounded-md grid grid-cols-22 grid-rows-10">
            {items.map((_, i) => (
                <div key={i} className="flex -inset-4">
                    <p className="text-2xl font-bold text-yellow-300 transition-all duration-0 hover:text-yellow-600 cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120">
                        *
                    </p>
                </div>
            ))}
        </div>
    );
}`;