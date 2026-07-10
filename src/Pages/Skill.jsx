import React from 'react';
import { Code2, Wrench, GraduationCap } from 'lucide-react';

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-purple-400" size={28} />,
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Responsive Design", "Animations"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-blue-400" size={28} />,
      skills: ["VS Code", "Git", "GitHub"]
    },
    {
      title: "Learning",
      icon: <GraduationCap className="text-green-400" size={28} />,
      skills: ["Node.js", "Express.js", "MongoDB", "Next.js"]
    }
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <h2 className='text-4xl font-extrabold text-white mb-10 border-b pb-2 border-purple-500/35'>
        Skills & Technologies
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {skillCategories.map((category, index) => (
          <div key={index} className='bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/5 transition-all'>
            <div className='flex items-center gap-3 mb-4'>
              {category.icon}
              <h3 className='text-2xl font-bold text-white'>{category.title}</h3>
            </div>
            <ul className='flex flex-col gap-2.5 text-zinc-300 pl-2'>
              {category.skills.map((skill, idx) => (
                <li key={idx} className='flex items-center gap-2 text-base'>
                  <span className='w-1.5 h-1.5 rounded-full bg-purple-500'></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;