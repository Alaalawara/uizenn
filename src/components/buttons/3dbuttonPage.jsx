// src/pages/components/ThreedButtonPage.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const code = `import { motion } from 'framer-motion';

export default function Threedbutton() {
  return (
    <div className="perspective-[1000px] flex items-center justify-center w-full h-[420px]">
      <motion.button
        whileHover={{
          rotateX: -25,
          rotateY: 10,
          boxShadow: '0px 2px 5px rgba(8,112,184,0.7)',
          y: -10,
        }}
        style={{ translateZ: 100 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="group relative bg-black text-white px-4 py-2 rounded-lg text-2xl font-medium transition-shadow duration-200 cursor-pointer"
      >
        <span className="text-neutral-300 transition-colors duration-300 group-hover:text-cyan-400">
          Button
        </span>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[2px] w-3/4
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent
          opacity-0 group-hover:opacity-100"></span>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[2px] w-3/4
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent
          blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150"></span>
      </motion.button>
    </div>
  );
}
`;

export default function ThreedButtonPage() {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start">
                <h2 className="font-bold tracking-tight text-2xl">3D Button</h2>
                <p className="text-foreground">Interactive 3D hover/tap button built with Framer Motion.</p>
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
                    <div className="rounded-lg border border-foreground max-w-[800px]">
                        <div className="relative h-[420px] w-full">
                            <div className="absolute inset-0 grid place-items-center perspective-[1000px]">
                                <motion.button
                                    whileHover={{
                                        rotateX: -25,
                                        rotateY: 10,
                                        boxShadow: '0px 2px 5px rgba(8,112,184,0.7)',
                                        y: -10,
                                    }}
                                    style={{ translateZ: 100 }}
                                    whileTap={{ y: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="group relative bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-90 px-4 py-2 rounded-lg text-2xl font-medium transition-shadow duration-200 cursor-pointer"
                                >
                                    <span className="transition-colors duration-300 group-hover:text-cyan-400">
                                        Button
                                    </span>

                                    <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[2px] w-3/4 
                                          bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100"></span>

                                    <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[2px] w-3/4 
                    bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
                    blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150"></span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code>{code}</code>
                        </pre>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Installation</h3>
                <div className="rounded-lg border border-foreground max-w-[800px] w-[800px] bg-gray-50 overflow-hidden">
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
        </div>
    );
}
