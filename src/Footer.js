import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-3">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4">
          {[
            {
              href: "https://github.com/aryand2002",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/aryan-dewangan-985513212",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "mailto:aryandew7368@gmail.com",
              icon: <FaEnvelope />,
              label: "Email",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1d1d1d] hover:bg-indigo-500 text-gray-300 hover:text-white transition-all duration-300 shadow hover:shadow-indigo-500/50"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
