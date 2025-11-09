import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-gray-600">[your-email@domain.com]</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <p className="text-gray-600">[Your Phone Number]</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Location</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-dark mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="[Your LinkedIn]" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="[Your GitHub]" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-dark mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-dark mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-dark mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
