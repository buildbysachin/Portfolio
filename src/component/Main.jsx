import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  return (
    <div className=' p-4 m-5 text-[#432818]'>
      <h1 className='text-2xl font-extrabold'>Hi, I'm Sachin Mogra <br />
        I Build Modern Websites That Grow Businesses.</h1>
      <h3 className='text-lg'>Web Developer • UI Designer • Content Creator • Problem Solver</h3>
      <p className='mt-12 text-xl'>
        I'm a passionate self-taught web developer from Rajasthan, India.
        I create modern, responsive and fast websites that help businesses build a strong online presence.
        Alongside web development, I love creating content, learning new technologies and turning ideas into reality.
      </p>
      <div className='flex gap-4 p-3'>
        <button 
        className='px-4 py-2 text-xl rounded'
        onClick={()=>{
          navigate('/Project')
        }}
        >View My Work</button>
        <button 
        className='px-4 py-2 text-xl rounded'
        onClick={()=>{
          navigate('/Contact')
        }}
        >Contact Me</button>
      </div>
    </div>
  )
}

export default Main