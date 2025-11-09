import React from 'react';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Jomo Kenyatta University of Agriculture & Technology (JKUAT)",
      period: "2021 - 2025 (Expected)",
      details: ["Provisional GPA: 3.01 (Second Class Upper Division)", "Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning"]
    }
  ];

  const experience = [
    {
      role: "Full-Stack Developer & Founder",
      company: "Checkmate SaaS Platform",
      period: "2024 - Present",
      details: [
        "Designed and deployed full-stack sales performance tracking application",
        "Implemented role-based access control and real-time analytics",
        "Managed complete product lifecycle from concept to production deployment"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Resume</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                <p className="text-secondary font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/stacey-nyambura-cv.pdf"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition inline-flex items-center gap-2"
          >
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
