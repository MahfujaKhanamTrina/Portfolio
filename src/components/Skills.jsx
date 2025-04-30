import React from 'react';

// Import skill icons
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import boot from '../assets/boot.png';
import daisyui from '../assets/daisy.png';
import figma from '../assets/figma.png';



// Skill list
const skills = [
    { img: javascript, name: 'JavaScript' },
    { img: react, name: 'React' },
    { img: node, name: 'Node' },
    { img: mongo, name: 'MongoDB' },
    { img: python, name: 'Python' },
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
    { img: tailwind, name: 'Tailwind' },
    { img: boot, name: 'Bootstrap' },
    { img: daisyui, name: 'DaisyUI' },
    { img: figma, name: 'Figma' }
];

const Skills = () => {
    return (
        <section id='skills' className='w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative'>
            {/* Glass effect overlay */}
            <div className='absolute inset-0 bg-white/30 backdrop-blur-sm z-0'></div>

            {/* Container with max width */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

                {/* Section Title */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-black'>
                        My <span className='text-yellow-600'>Skills</span>
                    </h2>
                    <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto'>
                        Technologies I have worked with
                    </p>
                </div>

                {/* Grid: Responsive and fills width */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center p-5 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl border-1 border-yellow-100 transition-all duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-yellow-500 hover:scale-[1.04]'
                        >
                            {/* Hover Glow Background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>

                            {/* Skill Icon */}
                            <div className='mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6 group-hover:bg-yellow-50 transition-all duration-300'>
                                <img
                                    src={skill.img}
                                    alt={`${skill.name} Icon`}
                                    className='w-14 h-14 object-contain transition-all duration-300'
                                />
                            </div>

                            {/* Skill Name */}
                            <h3 className='text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200'>
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
