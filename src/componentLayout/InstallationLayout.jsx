import { useState } from "react";

export default function InstallationLayout() {
    const [copied, setCopied] = useState(false);
    const code = `npm i framer-motion tailwindcss`;
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };
    return (
        <div className="flex flex-col gap-4 items-start">
            <h3 className="font-medium tracking-tight text-xl">Installation</h3>
            <div className="rounded-lg border border-foreground w-full bg-gray-50 overflow-hidden">
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
                    <code>{code}</code>
                </pre>
            </div>

        </div>
    );
}