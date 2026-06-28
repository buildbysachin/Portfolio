import React from 'react'

const About = () => {
    return (
        <div className='p-5 text-[#432818]'>
            <h1 className='text-5xl font-bold'>About Me</h1>
            <div className='flex flex-col gap-7 text-xl mt-7'>
                <p>Hello! I'm Sachin Mogra, a passionate web developer who enjoys transforming ideas into beautiful digital experiences.</p>
                <p>My journey started with curiosity and a laptop. I learned web development through continuous practice, experimentation, and building real-world projects.</p>
                <p>Apart from coding, I have experience creating YouTube content, solving mathematical problems, and constantly improving my skills.</p>
                <p>I believe that consistency beats talent when talent doesn't stay consistent.</p>
            </div>
            <h1 className='text-5xl font-bold mt-4'>My Journey</h1>
            <h2 className='text-4xl font-600 px-2 py-3'>Timeline</h2>
            <div className='flex'>
                <div className=' px-5'>
                    <h3 className='text-3xl'>2023</h3>
                    <p className='text-xl'>Started learning video editing</p>
                </div>
                <div className=' px-5'>
                    <h3 className='text-3xl'>2024 & 25</h3>
                    <p className='text-xl'>Created YouTube channels and learned audience psychology</p>
                </div>
                <div className=' px-5'>
                    <h3 className='text-3xl'>2026</h3>
                    <p className='text-xl'>Started learning Web Development</p>
                    <p className='text-xl' >Built my first responsive websites</p>
                </div>
            </div>
        </div>
    )
}

export default About