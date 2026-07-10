import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Project = () => {
  const projectsData = [
    {
      title: "NOTES APP",
      url: "https://buildbysachin.github.io/REACT_NOTE/",
      desc: "A sleek and responsive notes-taking application built with React."
    },
    {
      title: "E-COMMERCE STORE",
      url: "https://buildbysachin.github.io/E-commerse-store/#/",
      desc: "A modern digital storefront featuring seamless product discovery."
    }
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <h2 className='text-4xl font-extrabold text-white mb-8 border-b pb-2 border-purple-500/35'>
        Featured Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projectsData.map((project, index) => (
          <div key={index} className='bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 flex flex-col justify-between'>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-zinc-400 text-sm mb-4'>{project.desc}</p>
              {/* Iframes can break on mobile layouts, standardizing space */}
              <div className='w-full h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative'>
                <iframe
                  className='w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity'
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className='p-6 pt-0'>
              <a
                className='flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium w-full rounded-lg py-2.5 transition-colors'
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;