import { useEffect, useState } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';

export default function JobUiCardPage() {
    const { setItems } = useToc();

    const hasUsage = true;
    const hasExample = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "examples", label: "Example" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "example" && hasExample)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasUsage, hasExample]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Job UI Card</h2>
                <p className="text-foreground">
                    Displays a Job Ui like card or a component that looks like a card.
                </p>
            </div>

            <CodeLayout filename='Card.jsx' code={code}>
                <Card />
            </CodeLayout>

            {/* example 1 */}
            <div id='examples' className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Example 1</h3>
            </div>

            <CodeLayout filename='Card.jsx' code={code1}>
                <Card1 />
            </CodeLayout>

        </div>
    );
}

const code = `function Card() {
    const [isSave, setIsSave] = useState(false);

    const handleClick = () => {
        setIsSave(prev => !prev);
    };

    return (
        <div className='p-4 bg-foreground/20 rounded-3xl shadow-xl lg:w-1/2'>
            <div className='flex flex-col gap-2'>
                <span className='flex flex-row gap-1 justify-between items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s' alt='img' height={32} width={32} className='rounded-full' />

                    <button onClick={handleClick} className='bg-foreground/40 text-sm rounded-lg font-medium hover:bg-foreground cursor-pointer p-2 flex flex-row gap-1 items-center'>
                        {isSave ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2v13.5a.5.5 0 0 0 .777.416L8 13.101l5.223 2.815A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                        )}
                    </button>
                </span>

                <span className='flex flex-col gap-1 pt-2'>
                    <span className='flex flex-row gap-2 items-center'>
                        <p className='text-base font-medium'>Apple</p>
                        <p className='text-xs'>2 days ago</p>
                    </span>
                    <span className='text-lg font-semibold'>UI Designer</span>
                    <span className='flex flex-row gap-2'>
                        <button className='bg-foreground/40 text-xs font-medium rounded-lg p-1 text-black'>
                            Full Time
                        </button>
                        <button className='bg-foreground/40 text-xs font-medium rounded-lg p-1 text-black'>
                            Flexible Schedule
                        </button>
                    </span>
                </span>
            </div>

            <div className='flex flex-row justify-between pt-4 mt-15 py-2 border-t border-foreground/30'>
                <span className='flex flex-col'>
                    <p className='text-base font-medium'> $69-6969k</p>
                    <p className='text-xs'>Pune, India</p>
                </span>
                <button className='bg-black text-sm hover:bg-black/70 cursor-pointer px-2 rounded-lg text-white'>
                    Apply now
                </button>
            </div>
        </div>
    )
}
`;

const code1 = `function Card1() {
    const [isSave, setIsSave] = useState(false);

    const handleClick = () => {
        setIsSave(prev => !prev);
    };

    return (
        <div className='p-4 bg-black/30 backdrop-blur-sm rounded-3xl shadow-xl lg:w-1/2'>
            <div className='flex flex-col gap-2'>
                <span className='flex flex-row gap-1 justify-between items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s' height={32} width={32} className='rounded-full' />
                    <button onClick={handleClick} className='bg-white/30 text-sm rounded-lg font-medium hover:bg-white/70 cursor-pointer p-2 flex flex-row gap-1 items-center'>
                        {isSave ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2v13.5a.5.5 0 0 0 .777.416L8 13.101l5.223 2.815A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                        )}
                    </button>
                </span>

                <span className='flex flex-col gap-1 pt-2'>
                    <span className='flex flex-row gap-2 items-center'>
                        <p className='text-base font-medium'>Vercel</p>
                        <p className='text-xs'>7 days ago</p>
                    </span>
                    <span className='text-lg font-semibold'>Frontend Engineer</span>
                    <span className='flex flex-row gap-2'>
                        <button className='bg-white/30 text-xs font-medium rounded-lg p-1 text-black'>
                            Full Time
                        </button>
                        <button className='bg-white/30 text-xs font-medium rounded-lg p-1 text-black'>
                            Hybrid Model
                        </button>
                    </span>
                </span>
            </div>

            <div className='flex flex-row justify-between pt-4 mt-15 py-2 border-t border-foreground/30'>
                <span className='flex flex-col'>
                    <p className='text-base font-medium'> $77-777k</p>
                    <p className='text-xs'>Mumbai, India</p>
                </span>
                <button className='bg-black text-sm hover:bg-black/70 cursor-pointer px-2 rounded-lg text-white'>
                    Apply now
                </button>
            </div>
        </div>
    )
}
`;


function Card() {
    const [isSave, setIsSave] = useState(false);

    const handleClick = () => {
        setIsSave(prev => !prev);
    };

    return (
        <div className='p-4 bg-foreground/20 rounded-3xl shadow-xl lg:w-1/2'>
            <div className='flex flex-col gap-2'>
                <span className='flex flex-row gap-1 justify-between items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s' alt='img' height={32} width={32} className='rounded-full' />

                    <button onClick={handleClick} className='bg-foreground/40 text-sm rounded-lg font-medium hover:bg-foreground cursor-pointer p-2 flex flex-row gap-1 items-center'>
                        {isSave ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2v13.5a.5.5 0 0 0 .777.416L8 13.101l5.223 2.815A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                        )}
                    </button>
                </span>

                <span className='flex flex-col gap-1 pt-2'>
                    <span className='flex flex-row gap-2 items-center'>
                        <p className='text-base font-medium'>Apple</p>
                        <p className='text-xs'>2 days ago</p>
                    </span>
                    <span className='text-lg font-semibold'>UI Designer</span>
                    <span className='flex flex-row gap-2'>
                        <button className='bg-foreground/40 text-xs font-medium rounded-lg p-1 text-black'>
                            Full Time
                        </button>
                        <button className='bg-foreground/40 text-xs font-medium rounded-lg p-1 text-black'>
                            Flexible Schedule
                        </button>
                    </span>
                </span>
            </div>

            <div className='flex flex-row justify-between pt-4 mt-15 py-2 border-t border-foreground/30'>
                <span className='flex flex-col'>
                    <p className='text-base font-medium'> $69-6969k</p>
                    <p className='text-xs'>Pune, India</p>
                </span>
                <button className='bg-black text-sm hover:bg-black/70 cursor-pointer px-2 rounded-lg text-white'>
                    Apply now
                </button>
            </div>
        </div>
    )
}

function Card1() {
    const [isSave, setIsSave] = useState(false);

    const handleClick = () => {
        setIsSave(prev => !prev);
    };

    return (
        <div className='p-4 bg-black/30 backdrop-blur-sm rounded-3xl shadow-xl lg:w-1/2'>
            <div className='flex flex-col gap-2'>
                <span className='flex flex-row gap-1 justify-between items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s' height={32} width={32} className='rounded-full' />
                    <button onClick={handleClick} className='bg-white/30 text-sm rounded-lg font-medium hover:bg-white/70 cursor-pointer p-2 flex flex-row gap-1 items-center'>
                        {isSave ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2v13.5a.5.5 0 0 0 .777.416L8 13.101l5.223 2.815A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                        )}
                    </button>
                </span>

                <span className='flex flex-col gap-1 pt-2'>
                    <span className='flex flex-row gap-2 items-center'>
                        <p className='text-base font-medium'>Vercel</p>
                        <p className='text-xs'>7 days ago</p>
                    </span>
                    <span className='text-lg font-semibold'>Frontend Engineer</span>
                    <span className='flex flex-row gap-2'>
                        <button className='bg-white/30 text-xs font-medium rounded-lg p-1 text-black'>
                            Full Time
                        </button>
                        <button className='bg-white/30 text-xs font-medium rounded-lg p-1 text-black'>
                            Hybrid Model
                        </button>
                    </span>
                </span>
            </div>

            <div className='flex flex-row justify-between pt-4 mt-15 py-2 border-t border-foreground/30'>
                <span className='flex flex-col'>
                    <p className='text-base font-medium'> $77-777k</p>
                    <p className='text-xs'>Mumbai, India</p>
                </span>
                <button className='bg-black text-sm hover:bg-black/70 cursor-pointer px-2 rounded-lg text-white'>
                    Apply now
                </button>
            </div>
        </div>
    )
}
