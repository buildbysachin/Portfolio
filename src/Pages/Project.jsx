import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Project = () => {
  return (
    <div className='flex flex-col gap-1 px-2'>
      <div className='flex gap-4 flex-wrap p-3'>
        <div className='border-2'>
          <h1 className='flex bg-white font-extrabold rounded  text-[#111111] w-full py-1 text-4xl items-center justify-center'>NOTES</h1>
          <iframe
            className='w-65 h-50'
            src="https://buildbysachin.github.io/REACT_NOTE/"
            frameborder="0"></iframe>
          <a
            className='flex bg-black  text-[#ffffff] font-bold w-full rounded px-2 py-1'
            href="https://buildbysachin.github.io/REACT_NOTE/"
          > Go redirect <ArrowUpRight />
          </a>
        </div>
        <div>
          <h1 className='flex font-bold rounded  text-[#ffffff] w-full text-4xl items-center justify-center'>E-commerse-store</h1>
          <iframe
            className='w-78 h-54'
            src="https://buildbysachin.github.io/E-commerse-store/#/"
            frameborder="0"></iframe>
          <a
            className='flex bg-[#000000]  text-[#fdffff] font-bold w-full rounded px-2 py-1'
            href="https://buildbysachin.github.io/E-commerse-store/#/"
          > Go redirect <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project