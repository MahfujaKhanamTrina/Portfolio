import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Independent University, Bangladesh (IUB)',
    duration: '2020 – 2024',
  }
];

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Maple Service Solution Ltd.',
    duration: 'May 2024 – August 2024',
  }
];

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full py-16 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold text-center text-black mb-8"
        >
          About <span className="text-yellow-600">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
I'm a frontend developer and designer with a computer science background. I enjoy turning ideas into clean, user-friendly websites using different tools. I focus on making designs that look good, work well on all devices, and truly help people. For me, it's about more than just code it's about creating digital experiences that feel smooth and solve real problems.




        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold text-yellow-700">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p><span className="italic">{edu.duration}</span></p>
              </div>
            ))}
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold text-yellow-700">{exp.role}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-gray-700 mt-2 italic">{exp.duration}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
