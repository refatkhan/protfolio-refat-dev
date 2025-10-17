import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../sections/Footer';

const MainLayout = () => {
    return (
        <div className="relative min-h-screen w-full font-sans overflow-hidden bg-[#0c0c0c]">
            {/* ✅ Global dotted background behind everything */}
            <div className="fixed inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

            {/* ✅ Foreground content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />  {/* Now the navbar sits above the dotted background */}
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
