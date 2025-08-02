import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import Gym from "./Image/gym.jpg";
import DocVault from "./Image/docvault.jpg";
import Event from "./Image/event.webp";
import Servico from "./Image/servico.avif";
import Matrimony from "./myimage/matrimony1.webp";
import DDC from "./myimage/ddc.avif";

const projects = [
  {
    image: Matrimony,
    title: "Matrimony & Community App",
    description:
      "A matchmaking platform with JWT auth, detailed profiles, horoscope match, photo uploads, and Razorpay integration — built using Django & React.",
  },
  {
    image: DDC,
    title: "DDC Consultancy",
    description:
      "Business consultancy website with service listings, digital strategy info, contact forms, and responsive layout — built for clarity and trust.",
  },
  {
    image: Gym,
    title: "Gym Management System",
    description:
      "Web app for gym registration, trainer scheduling, attendance tracking, and payment reminders. Built with Django backend and React frontend.",
  },
  {
    image: DocVault,
    title: "DocVault - Document Manager",
    description:
      "Secure cloud-like storage system for personal docs. Features encryption, user auth, and organized file handling. Inspired by DigiLocker.",
  },
  {
    image: Event,
    title: "Soni Blissful Events",
    description:
      "Event booking platform with service filters, inquiry form, gallery, and mobile responsiveness. Designed for a local event company.",
  },
  {
    image: Servico,
    title: "Servico - Local Services App",
    description:
      "App that connects users to nearby service providers with booking, reviews, and category filters. Built with Django + React stack.",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-gray-950 py-24 px-6 sm:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14 text-center tracking-tight">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ image, title, description }, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-gradient-to-b from-white/5 to-white/10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {description}
                </p>
                <div className="mt-4">
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
