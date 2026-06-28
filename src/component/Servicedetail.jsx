import React from 'react'

const Servicedetail = ({ ServiceData }) => {
    return (
        <div>
            {ServiceData.map((elem) => {
                return (
                    <div className='text-[#432818] border-b-2 m-4'>
                        <h1 className='flex gap-1 text-4xl font-bold items-center'> {elem.Icon} {elem.service}</h1>
                        <p className='text-3xl font-light mb-3'>{elem.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Servicedetail