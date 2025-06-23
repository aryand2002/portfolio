import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image1 from './Image/myImg.JPG';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#212436] text-white py-24 px-6 md:px-20 lg:px-32 min-h-screen flex flex-col md:flex-row items-center md:items-start gap-16"
    >
      <div
        data-aos="fade-right"
        className="flex-shrink-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 p-1 rounded-full shadow-lg"
      >
        <img
          src={Image1}
          alt="Aryan Dewangan"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#1d1a2b] shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div data-aos="fade-left" className="max-w-xl flex flex-col gap-8">
        <h3 className="text-2xl font-extrabold tracking-wide uppercase text-indigo-400">
          My <span className="text-pink-400">Intro</span>
        </h3>
        <h2 className="text-5xl font-bold leading-tight text-white">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
          I'm a dedicated full-stack developer with a passion for technology and problem-solving. My work reflects a blend
          of technical expertise, creative problem-solving, and strong communication skills. I thrive on tackling multiple
          challenges, applying the latest web development trends, and delivering projects to high standards.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
          I have a proven track record of successful projects, where I've honed my skills in modern web development
          techniques. I'm always eager to learn and adapt, and I value effective teamwork and time management.
        </p>

        <div className="flex gap-8 mt-2">
          <a
            href="https://github.com/aryand2002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white text-4xl transform hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dewangan-985513212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white text-4xl transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
