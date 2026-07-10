import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full border-t border-zinc-900 bg-zinc-950 text-zinc-500 flex justify-center py-4 text-sm font-medium'>
            <p>© {new Date().getFullYear()} • Made with <span className='text-red-500 animate-pulse'>❤️</span> by Sachin Mogra</p>
        </footer>
    );
};

export default Footer;