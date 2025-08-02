import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1d1a2b] text-gray-300 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Aryan Dewangan
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/aryand2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 text-2xl transition-colors duration-200 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-dewangan-985513212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 text-2xl transition-colors duration-200 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="text-gray-300 text-2xl transition-colors duration-200 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;