import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Gym from "./myimage/gym.jpg";
import Mahtari_vandan from "./myimage/mahtari-vandan.webp";
import Spootify from "./myimage/spootify.jpg";
import Weather from "./myimage/weather.png";
import Matrimony from "./myimage/matrimony1.webp";
import DDC from "./myimage/ddc.avif";

const projects = [
  {
    image: Matrimony,
    title: "Matrimony Community App",
    description:
      "A platform designed to connect individuals from specific communities for matchmaking. Features include secure login, user profiles, horoscope matching, and interest-based suggestions to make finding the right life partner seamless and culturally relevant.",
  },
  {
    image: DDC,
    title: "DDC Consultancy",
    description:
      "A professional consultancy service website offering business solutions, project planning, digital transformation strategies, and government liaisoning. Built for responsiveness, clarity, and trust-building with clients.",
  },
  {
    image: Gym,
    title: "Gym Management System",
    description:
      "A full-featured gym management web app including member registration, trainer assignment, attendance tracking, and payment monitoring with notification support. Developed using Django and React.",
  },
  {
    image: Mahtari_vandan,
    title: "Mahtari Vandan Yojna",
    description:
      "Official government portal for Chhattisgarh's women welfare scheme. Offers beneficiaries monthly support, scheme info, application tracking, and real-time updates.",
  },
  {
    image: Spootify,
    title: "Spotify Clone",
    description:
      "A sleek UI replica of Spotify featuring artist lists, audio previews, playlist creation, and responsive music cards. Integrated with real APIs and clean animations.",
  },
  {
    image: Weather,
    title: "Weather Forecast App",
    description:
      "A minimalist weather app showing real-time temperature, humidity, and forecast data by city. Uses OpenWeather API with clean data visualization and location search.",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      className="bg-[#212436] py-16 px-6 sm:px-12 lg:px-24 min-h-screen"
      id="project"
    >
      <h2 className="text-4xl font-extrabold text-white mb-14 text-center">
        My <span className="text-[rgb(113,113,205)]">Projects</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ image, title, description }, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            className="bg-gradient-to-br from-[#2e2a44] to-[#1f1c33] rounded-3xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition duration-500 flex flex-col focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-indigo-300 mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
