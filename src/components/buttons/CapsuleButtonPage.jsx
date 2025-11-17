import { useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';

export default function CapsuleButtonPage() {
    const { setItems } = useToc();

    const hasUsage = true;
    const hasExample = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "examples", label: "Example" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "example" && hasExample)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasUsage, hasExample]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Capsule Button</h2>
                <p className="text-foreground">
                    Displays a Capsule like button or a component that looks like a Capsule.
                </p>
            </div>

            <CodeLayout filename='button.jsx' code={code}>
                <Button />
            </CodeLayout>

            {/* example 1 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 1</h3>
            </div>

            <CodeLayout filename='button.jsx' code={code1}>
                <Button1 />
            </CodeLayout>

            {/* example 2 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 2</h3>
            </div>

            <CodeLayout filename='button.jsx' code={code2}>
                <Button2 />
            </CodeLayout>

            {/* example 3 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 3</h3>
            </div>

            <CodeLayout filename='button.jsx' code={code3}>
                <Button3 />
            </CodeLayout>

            {/* example 4 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 4</h3>
            </div>

            <CodeLayout filename='button.jsx' code={code4}>
                <Button4 />
            </CodeLayout>

        </div>
    );
}

const code = `function Button() {
    return (
          <button className='bg-neutral-300 px-4 py-2 text-xl text-neutral-700 font-bold rounded-full shadow-lg shadow-neutral-300 hover:scale-105 cursor-pointer'>
            Vercel
        </button>
    )
}
`;

const code1 = `function Button() {
    return (
        <button className='bg-red-300 px-4 py-2 text-xl text-red-700 font-bold rounded-full shadow-lg shadow-red-300 hover:scale-105 cursor-pointer'>
            Netflix
        </button>
    )
}
`;

const code2 = `function Button() {
    return (
        <button className='bg-purple-300 px-4 py-2 text-xl text-purple-700 font-bold rounded-full shadow-lg shadow-purple-300 hover:scale-105 cursor-pointer'>
            Cadbury
        </button>
    )
}
`;

const code3 = `function Button() {
    return (
        <button className='bg-green-300 px-4 py-2 text-xl text-green-700 font-bold rounded-full shadow-lg shadow-green-300 hover:scale-105 cursor-pointer'>
            nvidia
        </button>
    )
}
`;

const code4 = `function Button() {
    return (
         <button className='bg-blue-300 px-4 py-2 text-xl text-blue-700 font-bold rounded-full shadow-lg shadow-blue-300 hover:scale-105 cursor-pointer'>
            meta
        </button>
    )
}
`;

function Button() {
    return (
        <button className='bg-neutral-300 px-4 py-2 text-xl text-neutral-700 font-bold rounded-full shadow-lg shadow-neutral-300 hover:scale-105 cursor-pointer'>
            Vercel
        </button>
    )
}

function Button1() {
    return (
        <button className='bg-red-300 px-4 py-2 text-xl text-red-700 font-bold rounded-full shadow-lg shadow-red-300 hover:scale-105 cursor-pointer'>
            Netflix
        </button>
    )
}

function Button2() {
    return (
        <button className='bg-purple-300 px-4 py-2 text-xl text-purple-700 font-bold rounded-full shadow-lg shadow-purple-300 hover:scale-105 cursor-pointer'>
            Cadbury
        </button>
    )
}

function Button3() {
    return (
        <button className='bg-green-300 px-4 py-2 text-xl text-green-700 font-bold rounded-full shadow-lg shadow-green-300 hover:scale-105 cursor-pointer'>
            nvidia
        </button>
    )
}

function Button4() {
    return (
        <button className='bg-blue-300 px-4 py-2 text-xl text-blue-700 font-bold rounded-full shadow-lg shadow-blue-300 hover:scale-105 cursor-pointer'>
            meta
        </button>
    )
}