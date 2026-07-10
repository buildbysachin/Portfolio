import React from 'react';

const About = () => {
    const timeline = [
        { year: "2023", title: "Video Production", desc: "Started learning advanced video editing and visual storytelling." },
        { year: "2024 - 2025", title: "Content & Strategy", desc: "Created growing YouTube channels and mastered audience psychology." },
        { year: "2026", title: "Web Engineering", desc: "Dived deep into Full-Stack development and built complex user interfaces." }
    ];

    return (
        <div className='max-w-4xl mx-auto px-4 py-12 text-zinc-300'>
            <h2 className='text-4xl font-extrabold text-white mb-6 border-b pb-2 border-purple-500/35'>About Me</h2>
            <div className='flex flex-col gap-5 text-lg leading-relaxed mb-12'>
                <p>Hello! I'm <span className='text-white font-semibold'>Sachin Jain</span>, a passionate web developer focused on transforming ideas into scalable, beautiful digital experiences.</p>
                <p>My tech journey is driven by genuine curiosity. Through continuous real-world practice and architecture design, I specialize in robust front-end ecosystems.</p>
                <p>Beyond code, my experience as a YouTube content creator and a critical problem solver gives me a unique edge in understanding both product logic and user psychology.</p>
                <blockquote className='border-l-4 border-purple-500 pl-4 italic text-zinc-400 my-2'>
                    "Consistency beats talent when talent doesn't stay consistent."
                </blockquote>
            </div>

            <h2 className='text-3xl font-bold text-white mb-8'>My Journey</h2>
            <div className='relative border-l border-zinc-800 ml-4 flex flex-col gap-8'>
                {timeline.map((item, index) => (
                    <div key={index} className='relative pl-6 group'>
                        <div className='absolute left-2 top-2 w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors'></div>
                        <span className='text-sm font-bold text-purple-400 tracking-wider'>{item.year}</span>
                        <h4 className='text-xl font-semibold text-white mt-0.5'>{item.title}</h4>
                        <p className='text-zinc-400 mt-1 text-base'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;