import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image1 from './Image/myImg.JPG';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#212436] text-white py-24 px-6 md:px-20 lg:px-32 min-h-screen flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="flex-shrink-0"
      >
        <img
          src={Image1}
          alt="Aryan Dewangan"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-indigo-400 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      <div data-aos="fade-left" data-aos-delay="200" className="max-w-xl flex flex-col gap-6">
        <h3 className="text-xl font-medium tracking-wide uppercase text-indigo-400">
          My <span className="text-indigo-400">Intro</span>
        </h3>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
          About Me
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
          I'm a passionate full-stack developer with a focus on building high-performance web applications. My expertise lies in combining technical proficiency with creative problem-solving to deliver seamless user experiences.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
          With a strong foundation in modern web technologies, I excel at tackling complex challenges and delivering projects that meet high standards. I value collaboration, continuous learning, and efficient project execution.
        </p>

        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/aryand2002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white text-3xl transition-colors duration-200 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-dewangan-985513212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white text-3xl transition-colors duration-200 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;