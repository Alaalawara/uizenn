import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';

const Code1 = `import { motion } from 'framer-motion';

function OntapButton() {
  return (
    <span className='border-b-6 border-black rounded-b-2xl'>
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

const Code4 = `npm i framer-motion tailwindcss`

export default function OnTapButtonPage() {
    const [copied, setCopied] = useState(false);
     const { setItems } = useToc();

  const hasInstallation = true;
  const hasUsage = true;
  const hasExamples = true;

  useEffect(() => {
    const list = [
      { id: "usage", label: "Usage" },
      { id: "installation", label: "Installation" },
      { id: "examples", label: "Examples" },
    ]
      .filter((s) =>
        (s.id === "usage" && hasUsage) ||
        (s.id === "installation" && hasInstallation) ||
        (s.id === "examples" && hasExamples)
      );
    setItems?.(list);
    return () => setItems?.([]);
  }, [setItems, hasInstallation, hasUsage, hasExamples]);


    const copy = async () => {
        try {
            await navigator.clipboard.writeText(Code4);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h2 className="font-bold tracking-tight text-2xl">On tap Button</h2>
                <p className="text-foreground">Interactive on tap button built with Framer Motion.</p>
            </div>

            <CodeLayout filename='OnTapButton.jsx' code={Code1}>
                <OntapButton>Button</OntapButton>
            </CodeLayout>

            <div id='installation' className="flex flex-col gap-4 items-start scroll-mt-24">
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
                        {Code4}
                    </pre>
                </div>
            </div>

            {/* example 1 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 1</h3>
            </div>

           <CodeLayout filename='OnTapButton.jsx' code={Code2}>
                <Example1OntapButton>Button</Example1OntapButton>
            </CodeLayout>


            {/* example 2 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 2</h3>
            </div>

            <CodeLayout filename='OnTapButton.jsx' code={Code3}>
                <Example2OntapButton>Button</Example2OntapButton>
            </CodeLayout>

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