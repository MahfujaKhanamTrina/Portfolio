import React, { useState } from 'react';
import portfolio from '../assets/portfolio.png';
import paribahan from '../assets/Paribahan.png';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = [
  {
    id: 1,
    title: 'Weather Forecasting App',
    description: 'Weather forecasting project using React and APIs.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/MahfujaKhanamTrina/Weather-Forecast/tree/main/Weather-Forecasting-main',
    demo: 'https://mahfujakhanamtrina.github.io/Weather-Forecast/Weather-Forecasting-main/',
    image: portfolio,
  },
  {
    id: 2,
    title: 'P-Paribahan',
    description: 'Weather forecasting project using React and APIs.',
    technologies: ['HTML', 'DaisyUi', 'TailwindCss', 'JavaScript'],
    github: 'https://github.com/MahfujaKhanamTrina/P-Paribahan',
    demo: 'https://mahfujakhanamtrina.github.io/P-Paribahan/',
    image: paribahan,
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Weather forecasting project using React and APIs.',
    technologies: ['React', 'NodeJs', 'MongoDB', 'TailwindCss'],
    github: 'https://github.com/MahfujaKhanamTrina/Weather-Forecast/tree/main/Weather-Forecasting-main',
    demo: 'https://mahfujakhanamtrina.github.io/Weather-Forecast/Weather-Forecasting-main/',
    image: portfolio,
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Weather forecasting project using React and APIs.',
    technologies: ['React', 'NodeJs', 'MongoDB', 'TailwindCss'],
    github: 'https://github.com/MahfujaKhanamTrina/Weather-Forecast/tree/main/Weather-Forecasting-main',
    demo: 'https://mahfujakhanamtrina.github.io/Weather-Forecast/Weather-Forecasting-main/',
    image: portfolio,
  },
];

const Project = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const projectPerPage = 3;
  const totalPages = Math.ceil(Projects.length / projectPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const visibleProjects = Projects.slice(
    currentPage * projectPerPage,
    currentPage * projectPerPage + projectPerPage
  );

  return (
    <section id='projects' className='w-full py-8 sm:px-8 relative bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Title */}
        <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold text-black'>
                        My <span className='text-yellow-600'>Projects</span>
                    </h2>
          <p className='text-black mt-2 max-w-2xl mx-auto'>
            Explore some of my recent works showcasing skills in full-stack development.
          </p>
        </div>

        {/* Arrows and Projects */}
        <div className='relative'>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10'
          >
            <FiChevronLeft className='text-gray-700 text-xl' />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10'
          >
            <FiChevronRight className='text-gray-700 text-xl' />
          </button>

          {/* Project Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='h-48 bg-gray-200 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>

                <div className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>{project.title}</h3>
                  <p className='text-gray-600 text-sm mb-4'>{project.description}</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
  {project.technologies.map((tech, index) => (
    <span
      key={index}
      className='px-3 py-1 bg-yellow-600 text-gray-200 text-xs rounded-full cursor-default hover:bg-yellow-700 transition-colors duration-300 ease-in-out'
    >
      {tech}
    </span>
  ))}
</div>


                  <div className='flex space-x-4 '>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'
                    >
                      <FiGithub className='mr-2' /> Code
                    </a>

                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'
                    >
                      <FiExternalLink className='mr-2' /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center mt-8 space-x-2'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
