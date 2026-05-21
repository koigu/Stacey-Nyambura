import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const Link = ({ href, children }) => (
    <a
      href={href}
      className="text-dark hover:text-primary transition"
      onClick={(e) => {
        e.preventDefault();
        setMobileOpen(false);
        goTo(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow-lg z-50 ${scrolled ? 'shadow-xl' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">SN</div>

          <div className="hidden md:flex space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#resume">Resume</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
            type="button"
          >
            <i className="fas fa-bars text-2xl" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full px-4 py-4">
            <div className="space-y-2">
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#resume">Resume</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

