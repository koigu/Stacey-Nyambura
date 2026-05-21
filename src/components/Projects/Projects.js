import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="bg-primary h-48 flex items-center justify-center">
              <i className="fas fa-chart-line text-6xl text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-dark mb-2">
                Checkmate – Sales Performance Tracker
              </h3>
              <p className="text-gray-600 mb-4">
                Built a full-stack SaaS dashboard that tracks sales performance in real time for teams with role-based
                access and analytics.
              </p>
              <ul className="text-gray-700 mb-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Implemented JWT authentication and role-based access (admin/manager/staff).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Designed interactive KPI views (pipeline performance, team trends) for faster decision-making.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>
                    <strong>Impact:</strong> Reduced manual reporting time by ~80% for a client team of 25+ users.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-secondary text-dark px-3 py-1 rounded-full text-sm">FastAPI</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-highlight text-white px-3 py-1 rounded-full text-sm">JWT</span>
                <span className="bg-orange text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">Tableau</span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/koigu/Employee-SPT"
                  className="text-primary hover:text-secondary transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" /> Code
                </a>
                <a
                  href="https://employee-spt.vercel.app/"
                  className="text-primary hover:text-secondary transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="bg-accent h-48 flex items-center justify-center">
              <i className="fas fa-brain text-6xl text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-dark mb-2">Alcohol Relapse Prediction – ML Model</h3>
              <p className="text-gray-600 mb-4">
                Delivered a working research prototype for relapse risk prediction using data preprocessing, model
                training, and evaluation.
              </p>

              <ul className="text-gray-700 mb-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>
                    Cleaned and preprocessed a real-world dataset (missing values, outliers, and class imbalance handling).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>
                    Trained and compared predictive models, focusing on stable generalisation using standard evaluation
                    metrics.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>
                    <strong>Outcome:</strong> Delivered a working model with balanced precision and recall suitable for a
                    research prototype.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-secondary text-dark px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-orange text-white px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                <span className="bg-highlight text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">Feature Engineering</span>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-accent hover:text-highlight transition"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-github" /> Code
                </a>
                <a
                  href="/Improving Treatment Outcomes_ A Machine Learning-Based Relapse Prediction System.docx"
                  className="text-accent hover:text-highlight transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt" /> Research Paper
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/koigu/"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" /> View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

