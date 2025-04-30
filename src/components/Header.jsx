import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Mahfuja from '../assets/Mahfuja_Khanam.pdf';
import trina from '../assets/trina.png';

const Header = () => {
    const titles = ["Frontend Web Developer", "UI/UX Designer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='home' className='w-full py-2 bg-gradient-to-b from-gray-200/10 to-white relative'>
            <div className='absolute inset-0 bg-white/30 backdrop-blur-sm z-0'></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <section className='text-gray-500 body-font z-10'>
                    <div className='container mx-auto flex px-5 py-24 sm:py-12 md:flex-row flex-col items-center justify-between'>
                        {/* Left Section */}
                        <div className='relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-start text-left mb-12 md:mb-0'>
                            <h1 className='title-font sm:text-6xl text-4xl mt-4 mb-4 font-bold text-gray-900'>Hi! I'm</h1>
                            <h2 className='title-font sm:text-6xl text-4xl mt-4 mb-4 font-bold text-yellow-600'>Mahfuja Khanam</h2>
                               

                            {/* Animated Role Titles */}
                            <div className='h-12 overflow-hidden mt-4 mb-6'>
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={titles[index]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className='sm:text-3xl text-xl font-bold text-blue-950'
                                    >
                                        {titles[index]}
                                    </motion.h2>
                                </AnimatePresence>
                            </div>



                            {/* Social Icons with Brand Colors and Hover Effects */}
                            <div className='flex flex-col space-y-6 mb-6' aria-label='Social media Links'>
    <div className="flex space-x-4">
       <a href="https://www.facebook.com/mahfuzakhanom.trina/" aria-label="facebook">
        <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center group transition-all hover:bg-blue-100">
                                            <FaFacebookF className="w-7 h-7 text-blue-800 group-hover:text-blue-800 transition-colors duration-300" />
                                        </div>
                                    </a>
       <a href="https://www.instagram.com/___trinaaa__/" aria-label="instagram">
     <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center group transition-all hover:bg-pink-100">
                                            <FaInstagram className="w-7 h-7 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />
</div>
                                    </a>
    <a href="https://github.com/MahfujaKhanamTrina" aria-label="github">
    <div className="w-14 h-14 rounded-full border border-gray-400  flex items-center justify-center group transition-all hover:bg-gray-200">
                                            <FaGithub className="w-7 h-7 text-gray-900 group-hover:text-gray-700 transition-colors duration-300" />
  </div>
   </a>
     <a href="https://www.linkedin.com/in/mahfuja-khanam-1878bb243/" aria-label="linkedin">
       <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center group transition-all hover:bg-blue-100">
                                            <FaLinkedinIn className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                                        </div>
                                    </a>
                                </div>

                                {/* Action Buttons */}
                                <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4'>
    <a
        href={Mahfuja}
        download='Mahfuja_Khanam.pdf'
        className='inline-flex justify-center text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-full text-lg transition-all w-full sm:w-auto'
    >
        Download Resume
    </a>
    <a
        href="#contact"
        className='inline-flex justify-center text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-full text-lg transition-all w-full sm:w-auto'
    >
        Contact
    </a>
</div>

                            </div>
                        </div>

                        {/* Right Section: Profile Image */}
                        <div className='lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 flex justify-center'>
                            <img
                                src={trina}
                                alt="Mahfuja"
                                className='object-cover object-center rounded-full w-59 h-59 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-gray-400 shadow-xl'
                                loading='eager'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Header;
