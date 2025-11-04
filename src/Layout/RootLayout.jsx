import { Outlet } from 'react-router-dom';
import Header from "../components/Header"

export default function RootLayout() {

    return (
        <main className='w-full px-4 lg:px-15'>
            <Header />
            <main>
                <Outlet />
            </main>
        </main>
    );
}