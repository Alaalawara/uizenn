import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header"

export default function RootLayout() {

    return (
        <main className='w-full px-15'>
            <Header />
            <main>
                <Outlet /> {/* Only this changes per route */}
            </main>
        </main>
    );
}