import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Project = () => {
  return (
    <div className='flex flex-col gap-1 px-2'>
      <div className='flex gap-4 p-3'>
        <div className='border-2'>
          <h1 className='flex bg-amber-950 font-bold rounded  text-[#fdffff] w-full py-1 text-4xl items-center justify-center'>Notes</h1>
          <iframe
            className='w-65'
            src="https://buildbysachin.github.io/REACT_NOTE/"
            frameborder="0"></iframe>
          <a
            className='flex bg-[#6f1d1b]  text-[#fdffff] font-bold w-full rounded px-2 py-1'
            href="https://buildbysachin.github.io/REACT_NOTE/"
          > Go redirect <ArrowUpRight />
          </a>
        </div>
        <div className='border-2'>
          <h1 className='flex bg-amber-950 font-bold rounded  text-[#fdffff] w-full py-1 text-4xl items-center justify-center'>E-commerse-store</h1>
          <iframe
            className='w-78'
            src="https://buildbysachin.github.io/E-commerse-store/#/"
            frameborder="0"></iframe>
          <a
            className='flex bg-[#6f1d1b]  text-[#fdffff] font-bold w-full rounded px-2 py-1'
            href="https://buildbysachin.github.io/E-commerse-store/#/"
          > Go redirect <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project