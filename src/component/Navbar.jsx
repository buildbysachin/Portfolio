import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-[#432818] text-[#FFE6A7] px-4 py-3'>
            <div className='w-13 h-13 flex gap-2 items-center'>
                <img className='h-full w-full rounded-full' src="src\assets\Zyloslogo.webp" alt="" />
                <h1 className='text-4xl font-bold'>Zylos</h1>
            </div>
            <div className=' text-2xl underline gap-7 flex items-center justify-between'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Skill'>Skills</Link>
                <Link to='/Service'>Service</Link>
                <Link to='/Project'>Project</Link>
                <Link to='/Contact'>Contact us</Link>
            </div>
        </div>
    )
}

export default Navbar