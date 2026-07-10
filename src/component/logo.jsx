import React from 'react';
import logoImg from '../assets/Zyloslogo.webp';

const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-16 pb-4 gap-4'>
      <div className='relative group'>
        {/* Glow effect behind logo */}
        <div className='absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
        <img 
          className='relative rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-zinc-800 group-hover:border-purple-500/80 transition-all duration-300 shadow-2xl' 
          src={logoImg} 
          alt="Zylos Logo Container" 
        />
      </div>
      <div>
        <h2 className='text-sm sm:text-base font-semibold tracking-widest text-zinc-500 uppercase px-4 text-center'>
          Welcome to my portfolio
        </h2>
      </div>
    </div>
  );
};

export default Logo;