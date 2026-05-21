import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Stacey Nyambura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

