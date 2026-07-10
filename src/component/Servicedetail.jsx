import React from 'react';

const Servicedetail = ({ ServiceData }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-2'>
            {ServiceData.map((elem, index) => {
                return (
                    <div key={index} className='bg-zinc-950/40 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition-all flex flex-col gap-2'>
                        <div className='flex gap-3 text-white text-xl font-bold items-center'> 
                            <span className='p-2 bg-purple-950/50 rounded-lg text-purple-400 border border-purple-900/30'>
                                {elem.Icon}
                            </span> 
                            <h3>{elem.service}</h3>
                        </div>
                        <p className='text-zinc-400 font-normal text-sm sm:text-base leading-relaxed pl-1'>
                            {elem.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Servicedetail;