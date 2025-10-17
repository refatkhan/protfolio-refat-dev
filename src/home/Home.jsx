import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Skills from '../sections/Skills';
import Education from '../sections/Education';

const Home = () => {
    return (
        <div className="relative min-h-screen w-full font-sans overflow-hidden bg-[#0c0c0c] flex flex-col">
            {/* ✅ Dotted Background behind entire page */}
            <div className="fixed inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

            {/* ✅ Foreground Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Education/>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
