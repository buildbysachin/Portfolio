import React from 'react'
import logoImg from '../assets/Zyloslogo.webp'

const Logo = () => {
  return (
    <div className='bg-[]'>
    <div className='flex justify-center py-4 '>
        <img className='rounded-full w-36 h-36 border-2' src={logoImg} alt="logo" />
    </div>
    <div>
        <h1 className='text-4xl flex justify-center px-14 w-auto'><i>Welcome on my website</i></h1>
    </div>
    </div>
  )
}

export default Logo