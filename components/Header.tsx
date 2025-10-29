import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(window.location.hash || '#/home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveRoute(window.location.hash || '#/home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { href: '#/home', label: 'Home' },
    { href: '#/services', label: 'Services' },
    { href: '#/about', label: 'About Us' },
    { href: '#/contact', label: 'Contact' },
  ];

  const getLinkClass = (href: string) => {
    const baseClasses = 'pb-1 border-b-2 transition-colors duration-300';
    if (activeRoute === href) {
      return `${baseClasses} font-semibold border-white`;
    }
    return `${baseClasses} border-transparent hover:border-blue-200`;
  };

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo className="text-white" />
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </a>
          ))}
          <a
            href="#/contact"
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Request a Consultation
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={getLinkClass(link.href)}>
                {link.label}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 w-11/12 text-center"
            >
              Request a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
