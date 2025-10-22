import { useState } from 'react';
import { motion } from 'framer-motion';

const Code1 = `import { motion } from 'framer-motion';

function OntapButton() {
  return (
    <span className='border-b-6 border-fg rounded-b-2xl'>
    <motion.button
      whileHover={{y:3}}
      whileTap={{ y: [0, 3] }}
      className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-fg bg-fg text-bg font-medium px-4 py-1.5 text-sm"
    >
      Button
    </motion.button>
    </span>
  );
}
`;

const Code2 = `import { motion } from 'framer-motion';

function OntapButton() {
  return (
         <span className='border-b-6 border-[#886372] rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 3 }}
                whileTap={{ y: [0, 3] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-[#886372] bg-[#f9c4d2] text-[#886372] font-medium px-4 py-1.5 text-sm"
            >
                Button
            </motion.button>
         </span>
  );
}
`;

const Code3 = `import { motion } from 'framer-motion';

function OntapButton() {
  return (
         <span className='border-b-6 border-[#780000] rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: [0, 2] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-[#780000] bg-[#CD201F] text-white font-medium px-4 py-1.5 text-sm"
            >
                Subscribe
            </motion.button>
        </span>
  );
}
`;

export default function OnTapButtonPage() {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);

    //multiple copy for multiple codes
    const copy1 = async () => {
        try {
            await navigator.clipboard.writeText(Code1);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    const copy2 = async () => {
        try {
            await navigator.clipboard.writeText(Code2);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    const copy3 = async () => {
        try {
            await navigator.clipboard.writeText(Code3);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start">
                <h2 className="font-bold tracking-tight text-2xl">On tap Button</h2>
                <p className="text-foreground">Interactive on tap button built with Framer Motion.</p>
            </div>

            <div className="flex flex-col gap-4">
                {/* Tabs */}
                <div className="flex items-center gap-4 text-sm">
                    <button
                        className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
                        onClick={() => setTab('code')}
                    >
                        Code
                    </button>
                </div>

                {/* Panel */}
                {tab === 'preview' ? (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
                        <div className="relative w-full h-[400px]">
                            <div className="absolute inset-0 grid place-items-center">
                                <OntapButton>Button</OntapButton>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
                            <button
                                type="button"
                                onClick={copy1}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code1>{Code1}</code1>
                        </pre>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Installation</h3>
                <div className="rounded-lg border border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
                    <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                        <span className="text-xs font-medium text-foreground">npm</span>
                        <button
                            type="button"
                            onClick={copy}
                            className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                        npm i framer-motion tailwindcss
                    </pre>
                </div>
            </div>

            {/* example 1 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 1</h3>
            </div>
            <div className="flex flex-col gap-4">
                {/* Tabs */}
                <div className="flex items-center gap-4 text-sm">
                    <button
                        className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
                        onClick={() => setTab('code')}
                    >
                        Code
                    </button>
                </div>
                {/* Panel */}
                {tab === 'preview' ? (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
                        <div className="relative h-[400px] w-full">
                            <div className="absolute inset-0 grid place-items-center">
                                <Example1OntapButton>Button</Example1OntapButton>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
                            <button
                                type="button"
                                onClick={copy2}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code2>{Code2}</code2>
                        </pre>
                    </div>
                )}
            </div>


            {/* example 2 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 2</h3>
            </div>
            <div className="flex flex-col gap-4">
                {/* Tabs */}
                <div className="flex items-center gap-4 text-sm">
                    <button
                        className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
                        onClick={() => setTab('code')}
                    >
                        Code
                    </button>
                </div>
                {/* Panel */}
                {tab === 'preview' ? (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
                        <div className="relative h-[400px] w-full">
                            <div className="absolute inset-0 grid place-items-center">
                                <Example2OntapButton>Button</Example2OntapButton>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
                            <button
                                type="button"
                                onClick={copy3}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code3>{Code3}</code3>
                        </pre>
                    </div>
                )}
            </div>

        </div>
    );
}

function OntapButton() {
    return (
        <span className='border-b-6 border-fg rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 3 }}
                whileTap={{ y: [0, 3] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-fg bg-fg text-bg font-medium px-4 py-1.5 text-sm"
            >
                Button
            </motion.button>
        </span>
    );
}


function Example1OntapButton() {
    return (
        <span className='border-b-6 border-[#886372] rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 3 }}
                whileTap={{ y: [0, 3] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-[#886372] bg-[#f9c4d2] text-[#886372] font-medium px-4 py-1.5 text-sm"
            >
                Button
            </motion.button>
        </span>
    );
}

function Example2OntapButton() {
    return (
        <span className='border-b-6 border-[#780000] rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: [0, 2] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-[#780000] bg-[#CD201F] text-white font-medium px-4 py-1.5 text-sm"
            >
                Subscribe
            </motion.button>
        </span>
    );
}