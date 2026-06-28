import React from 'react'
import Servicedetail from '../component/Servicedetail';
import { Globe, Zap, Palette, Smartphone, ShoppingCart } from 'lucide-react';

const Service = () => {
    const ServiceData = [
        {
            Icon: <Globe />,
            service: 'Website Development',
            description: 'Modern Responsive Websites'
        },
        {
            Icon: <Zap />,
            service: 'Landing Pages',
            description: 'High converting landing pages for businesses'
        },
        {
            Icon: <Palette />,
            service: 'UI Design',
            description: 'Clean and attractive interfaces'
        },
        {
            Icon: <Smartphone />,
            service: 'Portfolio Websites',
            description: 'Personal portfolios for students and professionals'
        },
        {
            Icon: <ShoppingCart />,
            service: 'Business Websites',
            description: 'Website for local shops and businesses'
        }
    ]
    return (
        <div>
            <Servicedetail ServiceData={ServiceData} />
            <div className='text-[#432818] p-5 '>
                <h1 className='font-bold text-5xl'>Why Choose Me?</h1>
                <ul className='text-3xl flex flex-col gap-5 m-5'>
                    <li>✅ Clean Code</li>
                    <li>✅ Responsive Design</li>
                    <li>✅ Fast Delivery</li>
                    <li>✅ SEO Friendly</li>
                    <li>✅ Modern UI</li>
                    <li>✅ Mobile First</li>
                    <li>✅ Continuous Support</li>
                </ul>
            </div>
        </div>
    )
}

export default Service