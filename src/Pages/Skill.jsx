import React from 'react'

const Skill = () => {
    return (
        <div className='flex flex-col gap-4 p-5 text-[#432818]'>
            <h1 className='text-4xl'>Use attractive cards</h1>
            <div className='flex justify-between text-2xl'>
                <div>
                    <h1 className='text-5xl font-bold'>Frontend</h1>
                    <ul className='flex flex-col gap-2 list-disc px-10'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Talwind css</li>
                        <li>React</li>
                        <li>Responsive Design</li>
                        <li>Animations</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-5xl font-bold'>Tool</h1>
                    <ul className='flex flex-col gap-2 list-disc px-10'>
                        <li>vs code</li>
                        <li>Git</li>
                        <li>Git hub</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-5xl font-bold'>Learning</h1>
                    <ul className='flex flex-col gap-2 list-disc px-10'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Next.js</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill