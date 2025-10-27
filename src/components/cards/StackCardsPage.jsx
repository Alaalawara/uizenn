import { useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";

const Code1 = `function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-[var(--fg)] rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-lg'>
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

const Code2 = ` function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-green-900 rounded-xl max-w-[270px]'>
                <span className='px-2 py-6 flex flex-col bg-green-300 gap-6 rounded-lg'>
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
const Code3 = `function StackCard() {
    return (
            <div className='p-2 flex flex-col gap-2 bg-red-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-red-300 gap-6 rounded-lg'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-red-900'>Developers</h3>
                    <p className='text-red-800'>Builds functional and scalable solutions.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Web</p>
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
const Code4 = `function StackCard() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-purple-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-purple-300 gap-6 rounded-lg'>
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

const Code5 = `function StackCard() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-neutral-900 rounded-xl max-w-[320px]'>
            <span className='px-2 py-6 flex flex-col bg-neutral-300 gap-6 rounded-lg'>
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
    const { setItems } = useToc();

    const hasUsage = true;
    const hasExamples = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "examples", label: "Examples" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "examples" && hasExamples)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasUsage, hasExamples]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Stack Cards</h2>
                <p className="text-foreground">
                    Displays a beautiful cards - simple, sleek.
                </p>
            </div>

            <CodeLayout filename='StackCard.jsx' code={Code1}>
                <StackCard1 />
            </CodeLayout>

            {/* example 1 */}
            <div id="examples" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 1</h3>
            </div>

            <CodeLayout filename='StackCard.jsx' code={Code2}>
                <StackCard2 />
            </CodeLayout>

            {/* example 2 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 2</h3>
            </div>

            <CodeLayout filename='StackCard.jsx' code={Code3}>
                <StackCard3 />
            </CodeLayout>

            {/* example 3 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 3</h3>
            </div>

            <CodeLayout filename='StackCard.jsx' code={Code4}>
                <StackCard4 />
            </CodeLayout>

            {/* example 4 */}
            <div className="flex flex-col gap-4 items-start">
                <h3 className="font-medium tracking-tight text-xl">Example 4</h3>
            </div>

            <CodeLayout filename='StackCard.jsx' code={Code5}>
                <StackCard5 />
            </CodeLayout>

        </div>

    );
}

//actual code
function StackCard1() {
    return (
        <div className='p-2 flex flex-col gap-2 bg-blue-900 rounded-xl max-w-[270px]'>
            <span className='px-2 py-6 flex flex-col bg-blue-300 gap-6 rounded-lg'>
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
            <span className='px-2 py-6 flex flex-col bg-green-300 gap-6 rounded-lg'>
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
            <span className='px-2 py-6 flex flex-col bg-red-300 gap-6 rounded-lg'>
                <span className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-red-900'>Developers</h3>
                    <p className='text-red-800'>Builds functional and scalable solutions.</p>
                </span>
                <span className='grid grid-cols-2 gap-1'>
                    <p className='px-1 bg-red-400 border-2 border-red-900 text-red-900 rounded-full text-center font-medium'>Web</p>
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
            <span className='px-2 py-6 flex flex-col bg-purple-300 gap-6 rounded-lg'>
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
            <span className='px-2 py-6 flex flex-col bg-neutral-300 gap-6 rounded-lg'>
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