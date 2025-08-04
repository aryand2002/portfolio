import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaPalette, FaServer } from 'react-icons/fa';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#f9f9ff] text-gray-900 py-24 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* === Left: Service Cards === */}
        <div data-aos="fade-right" className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
            <div className="bg-blue-600 text-white p-3 rounded-full text-xl">
              <FaLaptopCode />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Website Design</h4>
              <p className="text-gray-600 text-sm">
                Clean, responsive layouts using React, HTML, Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
            <div className="bg-pink-500 text-white p-3 rounded-full text-xl">
              <FaPalette />
            </div>
            <div>
              <h4 className="text-lg font-semibold">UI/UX Design</h4>
              <p className="text-gray-600 text-sm">
                Beautiful, user-friendly interfaces with modern design systems.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
            <div className="bg-green-600 text-white p-3 rounded-full text-xl">
              <FaServer />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Web Hosting</h4>
              <p className="text-gray-600 text-sm">
                Hosting your site on Vercel, Netlify, or traditional servers.
              </p>
            </div>
          </div>
        </div>

        {/* === Right: What I Do Text === */}
        <div data-aos="fade-left" className="flex flex-col gap-6 text-start">
          <h3 className="text-xl font-semibold text-blue-600 uppercase tracking-wide">
            What I Do
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            I'm a full stack developer
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I specialize in building scalable and responsive websites with clean code and creative user interfaces. With a strong command of both frontend and backend technologies, I love building complete digital experiences.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            So far, I’ve completed <span className="font-semibold text-blue-600">6 real-world projects</span>, including portfolio sites, dynamic web apps, and client-based dashboards — focusing on performance and great design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
