import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from './Image/myImg.JPG';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true });
  }, []);

  return (
    <section
      id="home"
      className="bg-[#1d1a2b] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20"
    >
      {/* ====== Text Section ====== */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Hello, <span className="text-indigo-400">I'm</span> Aryan Dewangan
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200">
          Full Stack Developer
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
          I build modern, high-performance web applications with clean code and intuitive user interfaces, prioritizing seamless user experiences and robust functionality.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1detbZdns3m8Rp1PpWBONk7PBXEEEhagg/view?usp=drive_link"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-indigo-400 hover:bg-indigo-500 transition-colors duration-200 text-white font-medium px-6 py-3 rounded-lg shadow-sm w-fit focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
            />
          </svg>
          Download Resume
        </a>
      </div>

      {/* ====== Image Section ====== */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
      >
        <div className="relative">
          <img
            src={Image1}
            alt="Aryan Dewangan"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-indigo-400 object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;