import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Zyloslogo.webp';

const Navbar = () => {
    const [isopen, setIsopen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/About' },
        { name: 'Skills', path: '/Skill' },
        { name: 'Services', path: '/Service' },
        { name: 'Projects', path: '/Project' },
        { name: 'Contact Us', path: '/Contact' }
    ];

    return (
        <nav className='sticky top-0 z-50 w-full bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/80 text-white px-6 py-3 transition-all'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* Logo Section */}
                <Link to='/' className='flex gap-3 items-center hover:opacity-90 transition-opacity'>
                    <div className='w-10 h-10'>
                        <img className='h-full w-full rounded-full object-cover border border-purple-500/50' src={logoImg} alt="Zylos Logo" />
                    </div>
                    <span className='text-2xl font-black tracking-wider bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent'>Zylos</span>
                </Link>

                {/* Desktop Links */}
                <div className='hidden lg:flex items-center gap-8 font-medium text-base'>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                className={`transition-all duration-200 hover:text-purple-400 relative py-1 ${isActive ? 'text-purple-500 font-semibold' : 'text-zinc-300'}`}
                            >
                                {link.name}
                                {isActive && <span className='absolute bottom-0 left-0 w-full h-2 bg-purple-500 rounded-full'></span>}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className='lg:hidden flex items-center'>
                    <button 
                        onClick={() => setIsopen(!isopen)}
                        className='p-1 text-zinc-300 hover:text-white transition-colors'
                        aria-label="Toggle Menu"
                    >
                        {isopen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isopen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 flex flex-col p-6 gap-4 font-medium shadow-xl animate-fade-in'>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path} 
                            to={link.path} 
                            onClick={() => setIsopen(false)}
                            className={`text-lg py-1 border-b border-zinc-900/50 ${location.pathname === link.path ? 'text-purple-400' : 'text-zinc-400'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;