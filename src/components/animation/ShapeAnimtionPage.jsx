import { useEffect } from "react";
import CodeLayout from "../../componentLayout/CodeLayout";
import { useToc } from "../../contexts/TocContext";

export default function ShapeAnimationPage() {
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
                <h2 className="font-bold tracking-tight text-2xl">Shape Animation</h2>
                <p className="text-foreground">Interactive shape animation.</p>
            </div>

            <CodeLayout filename="CircleAnimation.jsx" code={Code1}>
                <CircleAnimation />
            </CodeLayout>

            <div id="examples" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Sqaure Shape</h3>
            </div>

            <CodeLayout filename="SquareAnimation.jsx" code={Code2}>
                <SquareAnimation />
            </CodeLayout>

            <div className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Triangle Shape</h3>
            </div>

            <CodeLayout filename="StarAnimation.jsx" code={Code3}>
                <TriangleAnimation />
            </CodeLayout>

        </div>
    );
}

export function CircleAnimation({ count = 25 }) {
    const items = Array.from({ length: count })
    return (
        <div className="grid grid-cols-5 gap-1">
            {items.map((_, i) =>
                <p key={i} className="h-5 w-5 bg-black dark:bg-[var(--fg)] rounded-full hover:bg-[var(--bg)] hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120" />
            )}
        </div>
    );
}

function SquareAnimation() {
    return (
        <div className="flex flex-col">
            <p className="h-5 w-5 bg-black dark:bg-[var(--fg)] hover:scale-210 delay-300" />
        </div>
    );
}

export function TriangleAnimation() {
    return (
        <div>
            <svg className="lg:w-[300px] lg:h-[300px]">
                <path d="M150,0 225,150 75,150" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M0,300 75,150 150,300" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M75,150 225,150 150,300" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M150,300 300,300 225,150" className="fill-[var(--fg)] hover:fill-[var(--bg)] hover:delay-0 [transition-delay:0.5s] ease-in-out" />
            </svg>
        </div>
    );
}

const Code1 = `function CircleAnimation({ count = 25 }) {
    const items = Array.from({ length: count })
    return (
        <div className="grid grid-cols-5 gap-1">
            {items.map((_,i)=>
            <p key={i} className="h-5 w-5 bg-black rounded-full hover:bg-white hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120" />
            )}
        </div>
    );
}
`

const Code2 = `function SquareAnimation() {
    return (
        <div className="flex flex-col">
            <p className="h-5 w-5 bg-black hover:scale-210 delay-300" />
        </div>
    );
}`;

const Code3 = `function TriangleAnimation() {
    return (
        <div>
            <svg width="300" height="300">
                <path d="M150,0 225,150 75,150" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M0,300 75,150 150,300" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M75,150 225,150 150,300" className="fill-[var(--fg)] hover:fill-[var(--bg)]" />
                <path d="M150,300 300,300 225,150" className="fill-[var(--fg)] hover:fill-[var(--bg)] hover:delay-0 [transition-delay:0.5s] ease-in-out" />
            </svg>
        </div>
    );
}
`;