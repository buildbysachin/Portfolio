import React from 'react';
import Servicedetail from '../component/Servicedetail';
import { Globe, Zap, Palette, Smartphone, ShoppingCart, CheckCircle2 } from 'lucide-react';

const Service = () => {
    const ServiceData = [
        { Icon: <Globe />, service: 'Website Development', description: 'Modern Responsive Websites' },
        { Icon: <Zap />, service: 'Landing Pages', description: 'High converting landing pages for businesses' },
        { Icon: <Palette />, service: 'UI Design', description: 'Clean and attractive interfaces' },
        { Icon: <Smartphone />, service: 'Portfolio Websites', description: 'Personal portfolios for students and professionals' },
        { Icon: <ShoppingCart />, service: 'Business Websites', description: 'Website for local shops and businesses' }
    ];

    const advantages = [
        "Clean Code", "Responsive Design", "Fast Delivery", 
        "SEO Friendly", "Modern UI", "Mobile First", "Continuous Support"
    ];

    return (
        <div className='max-w-6xl mx-auto px-4 py-12'>
            <Servicedetail ServiceData={ServiceData} />
            
            <div className='mt-16 bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800'>
                <h2 className='font-extrabold text-4xl text-white mb-6'>Why Choose Me?</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {advantages.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 text-zinc-300 text-lg py-2'>
                            <CheckCircle2 className='text-emerald-400 shrink-0' size={22} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;