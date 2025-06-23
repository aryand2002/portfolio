import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Html from "./Image/html.webp";
import Css from "./Image/css.png";
import Java from "./Image/java.png";
import Javascript from "./Image/JavaScript.png";
import Laravel from "./Image/laravel.png";
import Php from "./Image/php.png";
import Mysql from "./Image/mysql.webp";
import Jquery from "./Image/jquery.png";
import C_logo from "./Image/C_Logo.png";
import ReactLogo from "./Image/React.webp";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const skills = [
    { src: Html, label: "HTML" },
    { src: Css, label: "CSS" },
    { src: Java, label: "JAVA" },
    { src: Javascript, label: "JAVASCRIPT" },
    { src: Laravel, label: "LARAVEL" },
    { src: Php, label: "PHP" },
    { src: Mysql, label: "MYSQL" },
    { src: Jquery, label: "JQUERY" },
    { src: C_logo, label: "C" },
    { src: ReactLogo, label: "REACT" },
  ];

  return (
    <section className="bg-[#1d1a2b] py-16 px-6 sm:px-12 lg:px-24" id="skills">
      <h2 className="text-center text-white text-4xl font-extrabold mb-14">
        TECH <span className="text-[rgb(113,113,205)]">STACK</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {skills.map(({ src, label }, idx) => (
          <div
            key={idx}
            tabIndex={0}
            data-aos="zoom-in"
            data-aos-delay={idx * 80}
            className="bg-gradient-to-br from-[#29253d] to-[#1d1a2b] rounded-2xl flex flex-col items-center justify-center p-6
                       shadow-md hover:shadow-xl hover:scale-105 transform transition
                       duration-300 cursor-default focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            <img src={src} alt={label} className="w-16 h-16 object-contain mb-4" />
            <p className="text-indigo-300 font-semibold tracking-wide text-sm text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
