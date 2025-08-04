import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from './Image/myImg.JPG';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <section
      id="home"
      className="bg-white text-gray-900 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-24"
    >
      {/* Text Section */}
      <div
        data-aos="fade-right"
        data-aos-delay="150"
        className="w-full md:w-1/2 flex flex-col gap-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight font-sans">
          Hello, <span className="text-blue-600">I'm</span> Aryan Dewangan
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
          Full Stack Developer
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
          I craft modern, high-performance web applications with clean code and intuitive user interfaces, delivering seamless experiences and robust functionality.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1detbZdns3m8Rp1PpWBONk7PBXEEEhagg/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md w-fit focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      {/* Image Section */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-60 blur-md"></div>
          <img
            src={Image1}
            alt="Aryan Dewangan"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
