import React, { useEffect, useMemo, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";

export default function CodeLayout({
    children,
    onRefresh,
    language = "jsx",
    code,
    enableRefresh = false,
    filename = "sample.jsx",
}) {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const codeRef = useRef(null);

    const doRefresh = async () => {
        if (onRefresh) {
            onRefresh();
        } else {
            setRefreshKey((k) => k + 1);
        }
    };
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
        }
    };

    const previewContent =
        typeof children === "function" ? children({ refreshKey }) : children;

    // prism
    const normalizedCode = useMemo(() => (code ?? "").replace(/\r\n?/g, "\n"), [code]);

    // Highlight again when theme changes
    useEffect(() => {
        const ro = new MutationObserver(() => {
            if (codeRef.current) Prism.highlightElement(codeRef.current);
        });
        ro.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => ro.disconnect();
    }, []);


    return (
        <div className='flex flex-col gap-4'>

            <div className="flex flex-row justify-between gap-4 text-sm">
                <span className='grid grid-cols-2 gap-2'>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-foreground'}`}
                        onClick={() => setTab('code')}
                    >
                        Code
                    </button>
                </span>
                <span>
                    {enableRefresh && (
                        <button
                            onClick={doRefresh}
                            type="button"
                            aria-label="Replay animation"
                            title="Replay animation"
                            className="cursor-pointer"
                        >
                            <span className='text-foreground hover:dark:text-[var(--fg)]'>Refresh</span>
                        </button>
                    )}
                </span>
            </div>


            {tab === "preview" ? (
                <div className="rounded-lg border border-foreground w-full">
                    <div className="relative min-h-[420px] w-full overflow-y-auto max-h-[calc(100vh-6rem)]">
                        <div className="absolute inset-0 p-2 grid place-items-center">
                            {onRefresh ? (
                                previewContent
                            ) : enableRefresh ? (
                                <div key={refreshKey}>{previewContent}</div>
                            ) : (
                                previewContent
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border border-foreground min-h-[420px] w-full bg-foreground/15 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                        <span className="text-xs font-medium text-foreground">{filename}</span>
                        <button
                            type="button"
                            onClick={copy}
                            className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <pre className={`code-block language-${language} line-numbers}w-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-3 text-sm text-[var(--fg)] dark:text-[var(--fg)]`}>
                        <code ref={codeRef} className={`language-${language}`}>{code}</code>
                    </pre>
                </div>
            )}
            <PrismCss />
        </div>
    );
}

function PrismCss() {
    return (
        <style>{`
.code-block {
  margin: 0;
  max-height: 60vh;
  overflow: auto;
  background:--color-foreground;
  color: var(--code-fg, var(--fg, #2e3440));
  font-size: 13px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  line-height: 1.65;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1rem 0.2rem 1rem 1rem;
  position:relative;
}

/* Prism token colors using variables */
:root {
  --token-comment: #6b7280;
  --token-punc: #94a3b8;
  --token-op: #ef4444;
  --token-num: #f59e0b;
  --token-str: #22c55e;
  --token-fn: #06b6d4;
  --token-kw: #8b5cf6;
  --token-cls: #eab308;
  --token-prop: #60a5fa;
  --token-tag: #f43f5e;
  --code-bg: #f8fafc;
  --code-fg: #232a32;
}
[data-theme=dark] {
  --token-comment: #7d90a0;
  --token-punc: #bcd0ea;
  --token-op: #fb7185;
  --token-num: #fbbf24;
  --token-str: #34d399;
  --token-fn: #22d3ee;
  --token-kw: #a78bfa;
  --token-cls: #fde047;
  --token-prop: #93c5fd;
  --token-tag: #fb7185;
  --code-bg: #161c27;
  --code-fg: #e8e8fa;
}

/* Prism tokens */
.token.comment { color: var(--token-comment); font-style: italic; }
.token.punctuation { color: var(--token-punc); }
.token.operator { color: var(--token-op); }
.token.number { color: var(--token-num); }
.token.string, .token.char { color: var(--token-str); }
.token.function { color: var(--token-fn); }
.token.keyword { color: var(--token-kw); }
.token.class-name { color: var(--token-cls); }
.token.property { color: var(--token-prop); }
.token.tag { color: var(--token-tag); }
.token.boolean { color: var(--token-num); }
.token.attr-name { color: var(--token-prop); }
.token.attr-value { color: var(--token-str); }
.token.regex { color: var(--token-op); }
.token.important, .token.bold { font-weight: 600; }
.token.italic { font-style: italic; }

/* Line numbers: no JS/plugin needed! */
.line-numbers {
  counter-reset: linenumbers;
}
.line-numbers .token {
  display: block;
  padding-left: 0.6rem;
  position: relative;
}
.line-numbers .token:before {
  counter-increment: linenumbers;
  content: counter(linenumbers);
  position: absolute;
  left: -2.3rem;
  top: 0;
  color: #aaa9;
  width: 1.9rem;
  text-align: right;
  font-size: 0.99em;
  opacity: .64;
  user-select: none;
  pointer-events: none;
}

/* Scrollbars lighter */
.code-block::-webkit-scrollbar { height: 10px; width: 10px; }
.code-block::-webkit-scrollbar-thumb {
  background: #c0c5d3;
  border-radius: 6px;
}
[data-theme=dark] .code-block::-webkit-scrollbar-thumb {
  background: #393e59;
}

/* Selection color */
.code-block ::selection { background: #7cbcff60; }
[data-theme=dark] .code-block ::selection { background: #0ea5e980; }
    `}</style>
    );
}