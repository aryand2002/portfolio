import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Skills', 'Project', 'Contact'];

  return (
    <header className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm text-gray-900 px-6 py-4 flex justify-between items-center">
      {/* Logo or Initials */}
      <h2 className="text-2xl font-bold font-sans tracking-tight text-blue-600">
        <span className="bg-blue-600 text-white px-2 py-1 rounded">AD</span>
      </h2>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-medium text-base">
        {navItems.map((name) => (
          <Link
            key={name}
            to={name.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer relative text-gray-700 hover:text-blue-600 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer group"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`bg-blue-600 h-0.5 w-6 rounded transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-[6px]' : ''
          }`}
        />
        <span
          className={`bg-blue-600 h-0.5 my-1 w-6 rounded transition-all duration-300 ${
            isOpen ? 'opacity-100 rotate-[-45deg] -translate-y-[6px]' : ''
          }`}
        />
        <span
          className={`bg-blue-600 h-0.5 w-6 rounded transition-all duration-300 ${
            isOpen ? 'hidden' : ''
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-6 space-y-5 text-base font-medium md:hidden shadow-md z-40">
          {navItems.map((name) => (
            <Link
              key={name}
              to={name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition"
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
