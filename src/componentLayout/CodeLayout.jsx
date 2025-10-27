import { useState } from 'react';

export default function CodeLayout({
    children,
    onRefresh,
    code,
    enableRefresh = false,
    filename = "sample.jsx",
}) {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

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

    return (
        <div className='flex flex-col gap-4'>
            {/* Tabs */}
              <div className="flex items-center gap-4 text-sm">
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
                {enableRefresh && (
                    <button
                        onClick={doRefresh}
                        type="button"
                        aria-label="Replay animation"
                        title="Replay animation"
                        className="ml-137 cursor-pointer"
                    >
                        <span className='text-foreground hover:dark:text-[var(--fg)]'>Refresh</span>
                    </button>
                )}
            </div>


            {tab === "preview" ? (
                <div className="rounded-lg border border-foreground max-w-[800px]">
                    <div className="relative h-[420px] w-full">
                        <div className="absolute inset-0 grid place-items-center">
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
                    <div className="rounded-lg border border-foreground min-h-[400px] max-w-[800px] w-[800px] bg-secondary overflow-hidden">
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
                    <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                        <code>{code}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}
