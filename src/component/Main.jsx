import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className='max-w-4xl mx-auto px-6 py-16 text-center lg:text-left flex flex-col gap-6'>
      <h1 className='text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight'>
        Hi, I'm <span className='bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent'>Sachin Jain</span> <br />
        I Build Modern Websites That Grow Businesses.
      </h1>
      
      <div className='flex flex-wrap justify-center lg:justify-start gap-2 text-sm sm:text-base font-medium text-purple-400 bg-purple-950/30 border border-purple-900/40 w-fit px-4 py-1.5 rounded-full mx-auto lg:mx-0'>
        <span>Web Developer</span> • <span>UI Designer</span> • <span>Content Creator</span> • <span>Problem Solver</span>
      </div>

      <p className='mt-4 text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0'>
        I'm a passionate self-taught web developer from Rajasthan, India. 
        I create modern, responsive, and blazing-fast websites that help businesses build a rock-solid online presence and turn ideas into reality.
      </p>

      <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6'>
        <button 
          className='flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 active:scale-98 rounded-xl transition-all shadow-lg shadow-purple-600/20'
          onClick={() => navigate('/Project')}
        >
          View My Work <ArrowRight size={18} />
        </button>
        <button 
          className='flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 active:scale-98 rounded-xl transition-all'
          onClick={() => navigate('/Contact')}
        >
          Contact Me <MessageSquare size={18} />
        </button>
      </div>
    </div>
  );
};

export default Main;