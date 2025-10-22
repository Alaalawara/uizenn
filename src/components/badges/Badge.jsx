// src/pages/components/ButtonPage.jsx
import { useState } from 'react';
import React, { forwardRef } from 'react';

const code = `function SimpleBadge() {
    return (
        <section className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[var(--fg)] text-[var(--bg)] font-semibold'>
                    Intern
                </span>
                <span className='px-2 rounded-lg border border-foreground text-[var(--fg)] font-semibold'>
                    Outline
                </span>
                <span className='px-2 rounded-lg bg-secondary text-solidtext font-semibold'>
                    Employee
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[#8ecae6] text-[#023e8a] flex flex-row font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#023e8a"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                    Announcement
                </span>
                <span className='px-2 rounded-lg bg-[#de8787] text-[#570000] font-semibold'>
                    999
                </span>
                <span className='px-2 rounded-lg bg-[#e9ecef] text-[#343a40] font-semibold'>
                    New
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[#e0aaff] flex flex-row font-semibold text-[#3c096c]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3c096c"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" /></svg>
                    Files
                </span>
                <span className='px-2 rounded-lg bg-[#edf6f9] text-[#006d77] font-semibold flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#006d77"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    Recent
                </span>
                <span className='px-2 rounded-lg bg-[#ffe169] text-[#76520e] font-semibold flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#76520e"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                    Stars
                </span>
            </div>
        </section>
    )
}
`;

export default function BadgePage() {
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
                <h2 className="font-bold tracking-tight">Simple Badge</h2>
                <p className="text-foreground">
                    Displays a badge or a component that looks like a badge.
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
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
                        <div className="relative h-[420px] w-full flex justify-center items-center">
                            <div className="">
                                <SimpleBadge />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-hidden">
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


function SimpleBadge() {
    return (
        <section className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[var(--fg)] text-[var(--bg)] font-semibold'>
                    Intern
                </span>
                <span className='px-2 rounded-lg border border-foreground text-[var(--fg)] font-semibold'>
                    Outline
                </span>
                <span className='px-2 rounded-lg bg-secondary text-solidtext font-semibold'>
                    Employee
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[#8ecae6] text-[#023e8a] flex flex-row font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#023e8a"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>
                    Announcement
                </span>
                <span className='px-2 rounded-lg bg-[#de8787] text-[#570000] font-semibold'>
                    999
                </span>
                <span className='px-2 rounded-lg bg-[#e9ecef] text-[#343a40] font-semibold'>
                    New
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <span className='px-2 rounded-lg bg-[#e0aaff] flex flex-row font-semibold text-[#3c096c]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3c096c"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" /></svg>
                    Files
                </span>
                <span className='px-2 rounded-lg bg-[#edf6f9] text-[#006d77] font-semibold flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#006d77"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    Recent
                </span>
                <span className='px-2 rounded-lg bg-[#ffe169] text-[#76520e] font-semibold flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#76520e"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                    Stars
                </span>
            </div>
        </section>
    )
}