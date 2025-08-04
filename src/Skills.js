import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    {
      src: Html,
      label: "HTML",
      desc: "Semantic, SEO-friendly structure and layouts.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      src: Css,
      label: "CSS",
      desc: "Responsive styling with animations and transitions.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      src: Javascript,
      label: "JavaScript",
      desc: "Dynamic logic, DOM manipulation, APIs.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      src: ReactLogo,
      label: "React",
      desc: "Modern component-based architecture and hooks.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      src: Tailwind,
      label: "Tailwind CSS",
      desc: "Utility-first CSS framework for rapid UI building.",
      color: "from-teal-500 to-green-400",
    },
    {
      src: Mysql,
      label: "MySQL",
      desc: "Structured database design and queries.",
      color: "from-yellow-500 to-green-400",
    },
    {
      src: Python,
      label: "Python",
      desc: "Backend scripting and automation with Django basics.",
      color: "from-purple-500 to-pink-400",
    },
    {
      src: Git,
      label: "Git",
      desc: "Version control and collaborative development.",
      color: "from-gray-600 to-black",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white py-24 px-6 sm:px-12 lg:px-24 text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start md:items-center">
        
        {/* === Left: Intro Text === */}
        <div data-aos="fade-right" className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="block">The <span className="text-blue-600">technologies</span></span>
            <span className="block">I work confidently with</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I specialize in crafting modern web apps using tools that ensure performance, scalability, and maintainability.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            From frontend UI design to backend logic and database handling, these are the technologies I’ve used across 6+ real-world projects.
          </p>
        </div>

        {/* === Right: Skill Cards === */}
        <div data-aos="fade-left" className="flex flex-col gap-6">
          {skills.map(({ src, label, desc, color }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}
              >
                <img
                  src={src}
                  alt={label}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {label}
                </h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
