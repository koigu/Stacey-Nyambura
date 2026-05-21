import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:grid md:grid-cols-2 px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 bg-light"
    >
      <div className="flex items-center justify-start md:justify-center px-4 order-2 md:order-1">
        <div className="text-left md:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 md:mb-8">
            Hey There!
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-2">
            I'm Stacey Nyambura
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3">
            Full-Stack Developer | Machine Learning Enthusiast | Data Analyst
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-8">
            Building scalable web applications and intelligent solutions with Python, React, and modern cloud
            technologies
          </p>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-800 transition shadow-lg text-sm sm:text-base"
            >
              Hire Me
            </a>
            <a
              href="#resume"
              className="border border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary hover:text-white transition text-sm sm:text-base"
            >
              View Resume
            </a>
            <a
              href="#about"
              className="border border-gray-600 text-gray-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-600 hover:text-white transition text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
        <div
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-full md:h-full bg-cover bg-center rounded-full md:rounded-none shadow-lg"
          style={{ backgroundImage: "url('./my profile.jpg')" }}
        />
        <div className="absolute inset-0 md:absolute md:inset-0 bg-white bg-opacity-40 md:bg-white md:bg-opacity-40 rounded-full md:rounded-none" />
      </div>
    </section>
  );
};

export default Hero;

