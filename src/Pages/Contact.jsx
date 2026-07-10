import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12 text-zinc-300'>
        <h2 className='font-extrabold text-4xl text-white mb-8 border-b pb-2 border-purple-500/35'>Contact US</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
            <div className='bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-start gap-4'>
                <Mail className='text-purple-400 shrink-0 mt-1' size={20} />
                <div>
                    <h4 className='font-bold text-white mb-1'>Email</h4>
                    <a href="mailto:buildbysachin@gmail.com" className='text-sm hover:underline break-all'>buildbysachin@gmail.com</a>
                </div>
            </div>
            <div className='bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-start gap-4'>
                <Phone className='text-purple-400 shrink-0 mt-1' size={20} />
                <div>
                    <h4 className='font-bold text-white mb-1'>Phone</h4>
                    <p className='text-sm'>+91 7878127106</p>
                    <span className='text-xs text-zinc-500'>(WhatsApp Only)</span>
                </div>
            </div>
            <div className='bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-start gap-4'>
                <MapPin className='text-purple-400 shrink-0 mt-1' size={20} />
                <div>
                    <h4 className='font-bold text-white mb-1'>Location</h4>
                    <p className='text-sm leading-snug'>Bhawani Mandi, Jhalawar, Rajasthan, India</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;