import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Placeholder image imports (replace with actual paths in your project)
import Html from "./Image/html.webp";
import Css from "./Image/css.png";
import Javascript from "./Image/JavaScript.png";
import Mysql from "./Image/mysql.webp";
import ReactLogo from "./Image/React.webp";
import Tailwind from "./Image/Tailwind_CSS_Logo.svg.png";
import Python from "./Image/python_logo_icon_168886.webp";
import Git from "./Image/github.png";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-quad", once: true });
  }, []);

  const skills = [
    { src: Html, label: "HTML" },
    { src: Css, label: "CSS" },
    { src: Javascript, label: "JavaScript" },
    { src: Mysql, label: "MySQL" },
    { src: ReactLogo, label: "React" },
    { src: Tailwind, label: "Tailwind CSS" },
    { src: Python, label: "Python" },
    { src: Git, label: "Git" },
  ];

  return (
    <section className="bg-[#1d1a2b] py-20 px-6 sm:px-12 lg:px-24" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center tracking-tight">
          Tech <span className="text-indigo-400">Stack</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ src, label }, idx) => (
            <div
              key={idx}
              tabIndex={0}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-[#29253d] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <img src={src} alt={label} className="w-16 h-16 object-contain mb-4" />
                <p className="text-white font-medium text-sm tracking-wide text-center">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;