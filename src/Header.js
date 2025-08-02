import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Skills' },
    { name: 'Project' },
    { name: 'Contact' },
  ];

  return (
    <header className="bg-[#1d1a2b] text-white px-6 py-4 flex justify-between items-center fixed w-full z-20 top-0 shadow-sm">
      <h2 className="text-2xl font-semibold font-sans tracking-tight">
        Aryan <span className="text-indigo-400">Dewangan</span>
      </h2>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-medium text-base">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.name.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            className="
              relative cursor-pointer transition-colors duration-200 
              text-white hover:text-indigo-400
              after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] 
              after:bg-indigo-400 after:scale-x-0 hover:after:scale-x-100 
              after:origin-center after:transition-transform after:duration-200
              focus:outline-none focus:after:scale-x-100 focus:text-indigo-400
            "
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white rounded my-1.5 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-[72px] left-0 w-full bg-[#1d1a2b] flex flex-col items-center py-8 space-y-5 text-base font-medium md:hidden z-10 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="
                relative cursor-pointer transition-colors duration-200 
                text-white hover:text-indigo-400
                after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] 
                after:bg-indigo-400 after:scale-x-0 hover:after:scale-x-100 
                after:origin-center after:transition-transform after:duration-200
                focus:outline-none focus:after:scale-x-100 focus:text-indigo-400
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;