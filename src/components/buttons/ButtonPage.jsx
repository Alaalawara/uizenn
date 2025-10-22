// src/pages/components/ButtonPage.jsx
import { useState } from 'react';
import React, { forwardRef } from 'react';

const code = `import React from 'react';

export default function Example() {
  return (
    <button
      className='inline-flex cursor-pointer items-center justify-center rounded-md bg-black px-4 py-2 text-white text-lg font-semibold shadow-sm hover:bg-black/80'
    >
      Button
    </button>
  );
}
`;

export default function ButtonPage() {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            // no-op; clipboard may be blocked
        }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start justify-between">
                <h2 className="font-bold tracking-tight">Simple Button</h2>
                <p className="text-foreground">
                    Displays a button or a component that looks like a button.
                </p>
            </div>


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
                </div>

                {/* Panel */}
                {tab === 'preview' ? (
                    <div className="rounded-lg border border-foreground max-w-[800px]">
                        <div className="relative h-[420px] w-full">
                            <div className="absolute inset-0 grid place-items-center">
                                <Button>Button</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] bg-secondary overflow-hidden">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">button.jsx</span>
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
        </div>

    );
}


const Button = forwardRef(function Button(
    { as: Comp = 'button', className = '', children = 'Button', ...props },
    ref
) {
    const base ='inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-lg font-semibold shadow-sm ' +
    'bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-90';
    return (
        <Comp ref={ref} className={`${base} ${className}`} {...props}>
            {children}
        </Comp>
    );
});