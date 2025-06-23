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
    <header className="bg-[#1d1a2b] text-white px-6 py-4 flex justify-between items-center fixed w-full z-20 top-0 shadow-md">
      <h2 className="text-xl font-bold font-sans">
        Aryan <span className="text-[rgb(113,113,205)]">Dewangan</span>
      </h2>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-10 font-bold text-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.name.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            className={`
              list-none cursor-pointer relative transition 
              hover:text-indigo-400
              after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
              after:bg-indigo-400 after:scale-x-0 hover:after:scale-x-100 
              after:origin-left after:transition-transform after:duration-300
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-[70px] left-0 w-full bg-[#1d1a2b] flex flex-col items-center py-6 space-y-6 text-xl font-bold md:hidden z-10 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className={`
                list-none cursor-pointer relative transition 
                hover:text-indigo-400
                after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                after:bg-indigo-400 after:scale-x-0 hover:after:scale-x-100 
                after:origin-left after:transition-transform after:duration-300
              `}
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
