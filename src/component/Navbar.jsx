import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextAlignJustify, X } from 'lucide-react';

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
    return (
        <nav>
            <div className='flex justify-between bg-[#432818] text-[#FFE6A7] px-4 py-3'>
                <div className='w-13 h-13 flex gap-2 items-center'>
                    <img className='h-full w-full rounded-full' src="https://raw.githubusercontent.com/zylos-ai/.github/master/assets/logo.png" alt="" />
                    <h1 className='text-4xl font-bold'>Zylos</h1>
                </div>
                <div className='hidden text-2xl underline gap-7 md:flex items-center justify-between'>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Skill'>Skills</Link>
                    <Link to='/Service'>Service</Link>
                    <Link to='/Project'>Project</Link>
                    <Link to='/Contact'>Contact us</Link>
                </div>
                <div className='md:hidden flex'>
                    <button onClick={() => { setIsopen(!isopen) }}>
                        {isopen ? <X /> : <TextAlignJustify />}
                    </button>
                </div>
            </div>
            {isopen && (
                <div className='md:hidden flex flex-col p-4 gap-3 underline'>
                    <Link to='/' onClick={()=> setIsopen(false)}>Home</Link>
                    <Link to='/About' onClick={()=> setIsopen(false)} >About</Link>
                    <Link to='/Skill' onClick={()=> setIsopen(false)}>Skill</Link>
                    <Link to='/Service' onClick={()=> setIsopen(false)}>Service</Link>
                    <Link to='/Project' onClick={()=> setIsopen(false)}>Project</Link>
                    <Link to='/Contact' onClick={()=> setIsopen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar