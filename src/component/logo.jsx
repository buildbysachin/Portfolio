import React from 'react'

const Logo = () => {
  return (
    <div>
    <div className='flex justify-center py-4 '>
        <img className='rounded-full w-36 h-36 border-2 border-b-emerald-950' src="src\assets\Zyloslogo.webp" alt="" />
    </div>
    <div>
        <h1 className='text-4xl flex justify-center w-auto text-[#432818]'><i>Welcome on my website</i></h1>
    </div>
    </div>
  )
}

export default Logo