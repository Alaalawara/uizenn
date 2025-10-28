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

function CircleAnimation() {
    return (
        <div className="flex flex-col">
            <p className="h-5 w-5 bg-black dark:bg-[var(--fg)] rounded-full hover:scale-210 delay-300" />
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

function TriangleAnimation() {
    return (
        <div className="flex flex-col">
            <div class="border-solid border-b-black border-b-25 border-x-transparent border-x-14 border-t-0 hover:animate-spin"></div>
        </div>
    );
}

const Code1 = `function CircleAnimation() {
    return (
        <div className="flex flex-col">
            <p className="h-5 w-5 bg-black dark:bg-[var(--fg)] rounded-full hover:scale-210 delay-300" />
        </div>
    );
}
`

const Code2 = `function SquareAnimation() {
    return (
        <div className="flex flex-col">
            <p className="h-5 w-5 bg-black dark:bg-[var(--fg)] hover:scale-210 delay-300" />
        </div>
    );
}`;

const Code3 = `function TriangleAnimation() {
    return (
        <div className="flex flex-col">
            <div class="border-solid border-b-black border-b-25 border-x-transparent border-x-14 border-t-0 hover:animate-spin"></div>
        </div>
    );
}
`;