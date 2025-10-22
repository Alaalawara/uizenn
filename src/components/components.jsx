import { Link } from 'react-router-dom';

function Components() {

    return (
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold tracking-tight'>Components</h2>
            <p>Here you can find all the components available in the library.<br /> We are working on adding more components.</p>
            <div className='grid grid-cols-4 gap-10'>
                <Link hre to="/components/buttons/button" className='font-bold text-base w-fit px-2 py-1 rounded-lg hover:underline underline-offset-4'>
                    Buttons
                </Link>
                <Link hre to="/components/badge" className='font-bold text-base w-fit px-2 py-1 rounded-lg hover:underline underline-offset-4'>
                    Badge
                </Link>
                <Link hre to="/components/cards/simplecard" className='font-bold text-base w-fit px-2 py-1 rounded-lg hover:underline underline-offset-4'>
                    Cards
                </Link>
                <Link hre to="/" className='font-bold text-base w-fit px-2 py-1 rounded-lg hover:underline underline-offset-4'>
                    Font
                </Link>
            </div>
        </div>
    );
}

export default Components;