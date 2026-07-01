import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Project = () => {
  return (
    <div className='flex flex-col gap-1 px-2'>
      <h1 className='flex bg-amber-950 font-bold rounded  text-[#fdffff] w-56 py-1 text-4xl mt-3 items-center justify-center'>Notes</h1>
      <iframe
        className='w-56'
        src="https://buildbysachin.github.io/REACT_NOTE/"
        frameborder="0"></iframe>
      <a
        className='flex bg-[#6f1d1b]  text-[#fdffff] font-bold w-56 rounded px-2 py-1'
        href="https://buildbysachin.github.io/REACT_NOTE/"
      > Go redirect <ArrowUpRight />
      </a>
    </div>
  )
}

export default Project