import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

// Import project images
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
      "Matchmaking app with auth, profiles, horoscope match, photos, and Razorpay — Django + React.",
  },
  {
    image: DDC,
    title: "DDC Consultancy",
    description:
      "Consultancy site with modern services, forms, and responsive UI — built with React.",
  },
  {
    image: Gym,
    title: "Gym Management System",
    description:
      "Manage gyms with trainer schedules, attendance, and payments — Django + React stack.",
  },
  {
    image: DocVault,
    title: "DocVault",
    description:
      "Secure personal doc manager like DigiLocker with auth and encryption — React + Django.",
  },
  {
    image: Event,
    title: "Soni Blissful Events",
    description:
      "Book events with filters, inquiries, gallery and more — smooth, responsive design.",
  },
  {
    image: Servico,
    title: "Servico",
    description:
      "Find local service providers, book services, add reviews — full-stack Django + React app.",
  },
];

function Project() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative bg-[#f9f9ff] py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border shadow rounded-full hover:bg-blue-100 transition"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border shadow rounded-full hover:bg-blue-100 transition"
        >
          →
        </button>

        {/* Projects Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory hide-scrollbar px-2"
        >
          {projects.map(({ image, title, description }, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-[320px] snap-start bg-white rounded-2xl shadow transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-2xl"
                loading="lazy"
              />
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{description}</p>
                <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
