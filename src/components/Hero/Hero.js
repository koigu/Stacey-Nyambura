import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-blue-50 px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-dark mb-4"
        >
          Stacey Nyambura
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-4"
        >
          Full-Stack Developer & Machine Learning Enthusiast
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Building scalable web applications and intelligent solutions with Python, React, and modern cloud technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg">
            Hire Me
          </a>
          <a href="#projects" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
            View Projects
          </a>
          <a href="#resume" className="border border-gray-600 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-600 hover:text-white transition">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
