import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-4">Stacey Nyambura</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A passionate Full-Stack Developer and Computer Science student at JKUAT with expertise
              in building end-to-end web applications. I specialize in creating scalable solutions
              using modern technologies like React, Python, FastAPI, and MongoDB.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey combines academic excellence with practical software development experience,
              demonstrated through deployed projects like Checkmate SaaS platform and machine learning
              research in healthcare analytics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-dark">Name:</p>
                <p className="text-gray-600">Stacey Nyambura</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Email:</p>
                <p className="text-gray-600">[your-email@domain.com]</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Location:</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Education:</p>
                <p className="text-gray-600">JKUAT BSc Computer Science</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <p className="text-gray-500">[Your Photo Here]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
