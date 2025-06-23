import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from './Image/myImg.JPG';



function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

    return (
    <section
      id="Home"
      className="bg-[#1d1a2b] text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20"
    >
      {/* ====== Text Section ====== */}
      <div
        data-aos="fade-up"
        className="w-full md:w-1/2 flex flex-col gap-5"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hello,&nbsp;
          <span className="text-[rgb(113,113,205)]">I'm</span> Aryan Dewangan
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-2 tracking-wide leading-relaxed max-w-md">
          I craft modern web applications with optimized, clean code and engaging user interfaces. I focus on performance, design, and user experience.
        </p>

        {/* Resume Button */}
        <a
          href="myresume.pdf"
          download
          className="mt-6 inline-flex items-center gap-3 bg-[rgb(113,113,205)] hover:bg-indigo-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-md shadow-lg w-fit"
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
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
      >
        <div className="relative group">
          <img
            src={Image1}
            alt="Aryan Dewangan"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-[rgb(113,113,205)] object-cover shadow-xl group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-[rgb(113,113,205)] opacity-0 group-hover:opacity-10 transition duration-300"></div>
            </div>
      </div>
    </section>
  );
}

export default Home;

