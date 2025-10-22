import { code } from 'framer-motion/client';
import { useState } from 'react';

const code1 = `function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-[var(--fg)] rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-xl'>
                    <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold '>Web Design</h3>
                    <p >Crafs engaging, user friendly websites.</p>
                    </span>
                    <span className='grid grid-cols-2 gap-1'>
                        <p className='px-1 bg-blue-400  rounded-full text-center font-medium'>Landing Page</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>Website</p>
                        <p className='px-1 bg-blue-400 rounded-full text-center font-medium'>One Page</p>
                    </span>
                </span>
                <span  className='px-2 flex flex-row justify-between'>
                    <p className='text-[var(--bg)] text-xl font-medium'>Explore</p>
                     <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='fill-[var(--bg)]'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                     </p>
                </span>
            </div>
    )
}`;

const code2 = ` function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-green-900 rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-green-300 gap-6 rounded-xl'>
                    <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-green-900'>Web Design</h3>
                    <p className='text-green-800'>Crafs engaging, user friendly websites.</p>
                    </span>
                    <span className='grid grid-cols-2 gap-1'>
                        <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Landing Page</p>
                        <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Website</p>
                        <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>One Page</p>
                    </span>
                </span>
                <span  className='px-2 flex flex-row justify-between'>
                    <p className='text-xl font-medium text-white'>Explore</p>
                     <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                     </p>
                </span>
            </div>
    )
}
`
const code3 = `function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-red-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-red-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-red-900'>Developers</h3>
                    <p className='text-red-800'>Builds functional and scalable solutions.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Web Applications</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Mobile Apps</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Database</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Add-ons</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}
`
const code4 = `function StackCard() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-purple-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-purple-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-purple-900'>Copywriting</h3>
                    <p className='text-purple-800'>Delivers persuasive and creative content.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Big Posts</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Video Scripts</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Sales Pages</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Slogans</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}`

const code5 = `function StackCard() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-neutral-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-neutral-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-neutral-900'>Elon Musk</h3>
                    <p className='text-neutral-800'>Businessman and former Senior Advisor to the President of the United States.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Tesla</p>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Space X</p>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Grok</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}`

export default function StackCardsPage() {
    const [tab, setTab] = useState('preview');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
        }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start justify-between">
                <h2 className="font-bold tracking-tight">Stack Cards</h2>
                <p className="text-foreground">
                    Displays a beautiful cards - simple, sleek.
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
                                <StackCard1 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code>{code1}</code>
                        </pre>
                    </div>
                )}
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
                                <StackCard2 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code>{code2}</code>
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
                                <StackCard3 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code3>{code3}</code3>
                        </pre>
                    </div>
                )}
            </div>

            {/* example 3 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 3</h3>
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
                                <StackCard4 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code4>{code4}</code4>
                        </pre>
                    </div>
                )}
            </div>

            {/* example 4 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 4</h3>
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
                                <StackCard5 />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] bg-secondary overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none]">
                        <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
                            <span className="text-xs font-medium text-foreground">stackcard.jsx</span>
                            <button
                                type="button"
                                onClick={copy}
                                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
                            <code5>{code5}</code5>
                        </pre>
                    </div>
                )}
            </div>

        </div>

    );
}


//actual code
function StackCard1() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-blue-900 rounded-xl max-w-[270px]'>
            <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-blue-900'>Web Design</h3>
                    <p className='text-blue-800'>Crafts engaging, user friendly websites.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-blue-400 border-2 border-blue-900 text-blue-900 rounded-full text-center font-medium'>Landing Page</p>
                    <p className='px-1 bg-blue-400 border-2 border-blue-900 text-blue-900 rounded-full text-center font-medium'>Website</p>
                    <p className='px-1 bg-blue-400 border-2 border-blue-900 text-blue-900 rounded-full text-center font-medium'>One Page</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}


function StackCard2() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-green-900 rounded-xl max-w-[270px]'>
            <span className='px-2 py-6 flex flex-col bg-green-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-green-900'>Graphic Design</h3>
                    <p className='text-green-800'>Creates impactful visuals and branding.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Packaging</p>
                    <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Brand Identity</p>
                    <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Illustrations</p>
                    <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Logo</p>
                    <p className='px-1 bg-green-400 border-2 border-green-900 text-green-900 rounded-full text-center font-medium'>Signage</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}


function StackCard3() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-red-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-red-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-red-900'>Developers</h3>
                    <p className='text-red-800'>Builds functional and scalable solutions.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Web Applications</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Mobile Apps</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Database</p>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Add-ons</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}


function StackCard4() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-purple-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-purple-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-purple-900'>Copywriting</h3>
                    <p className='text-purple-800'>Delivers persuasive and creative content.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Big Posts</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Video Scripts</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Sales Pages</p>
                    <p className='px-1 bg-purple-400 border-2 border-purple-900 text-purple-900 rounded-full text-center font-medium'>Slogans</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}


function StackCard5() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-neutral-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-neutral-300 gap-6 rounded-xl'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-neutral-900'>Elon Musk</h3>
                    <p className='text-neutral-800'>Businessman and former Senior Advisor to the President of the United States.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Tesla</p>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Space X</p>
                    <p className='px-1 bg-neutral-400 border-2 border-neutral-900 text-neutral-900 rounded-full text-center font-medium'>Grok</p>
                </span>
            </span>
            <span className='px-2 flex flex-row justify-between'>
                <p className='text-xl font-medium text-white'>Explore</p>
                <p className='text-[var(--bg)] text-xl font-medium cursor-pointer hover:scale-120'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffffff'><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                </p>
            </span>
        </div>
    )
}