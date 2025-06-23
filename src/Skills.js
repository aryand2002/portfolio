<<<<<<< HEAD
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
  ];

  return (
    <section className="bg-[#1d1a2b] py-12 px-6 sm:px-12 lg:px-20" id="skills">
      <h2 className="text-center text-white text-3xl font-extrabold mb-12">
        TECH <span className="text-[rgb(113,113,205)]">STACK</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {skills.map(({ src, label }, idx) => (
          <div
            key={idx}
            tabIndex={0}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-[#212436] rounded-xl flex flex-col items-center justify-center p-6
                       shadow-md hover:shadow-2xl hover:scale-105 transform transition
                       duration-300 cursor-default focus:outline-none focus:ring-4 focus:ring-[rgb(113,113,205)]"
          >
            <img src={src} alt={label} className="w-14 h-14 object-contain mb-3" />
            <p className="text-white font-semibold tracking-wide">{label}</p>
        </div>
        ))}
    </div>
    </section>
  );
}

export default Skills;
=======
import React from 'react'
import './Skills.css'
import Html from './Image/html.webp'
import Css from './Image/css.png'
import Java from './Image/java.png'
import Javascript from './Image/JavaScript.png'
import Laravel from './Image/laravel.png'
import Php from './Image/php.png'
import Mysql from './Image/mysql.webp'
import Jquery from './Image/jquery.png'
import C_logo from './Image/C_Logo.png'

function skills() {
  return (
    <div>
        <div className="container3">
        <div className='tech-stack'>TECH STACK</div>
        <div className="grid-container">
            <div className="grid">
                <img src={Html} />
                <p>HTML</p>
            </div>
            <div className="grid">
                <img src={Css} />
                <p>CSS</p>
            </div>
            <div className="grid">
                <img src={Java} />
                <p>JAVA</p>
            </div>
            <div className="grid">
                <img src={Javascript} />
                <p>JAVASCRIPT</p>
            </div>
            <div className="grid">
                <img src={Laravel} />
                <p>LARAVEL</p>
            </div>
            <div className="grid">
                <img src={Php} />
                <p>PHP</p>
            </div>
            <div className="grid">
                <img src={Mysql} />
                <p>MYSQL</p>
            </div>
            <div className="grid">
                <img src={Jquery} />
                <p>JQUERY</p>
            </div>
            <div className="grid" id='javagrid'>
                <img src={C_logo} />
                <p>C</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default skills
>>>>>>> 64ed7a1abf1b5cbe73fe4b7c8a747ddeb91f09d4
