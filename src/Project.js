import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import District from "./myimage/district.jpg";
import Gym from "./myimage/gym.jpg";
import Mahtari_vandan from "./myimage/mahtari-vandan.webp";
import Spootify from "./myimage/spootify.jpg";
import Weather from "./myimage/weather.png";
import Youtube from "./myimage/youtube.jpg";

const projects = [
  {
    image: District,
    title: "District Website",
    description:
      "Gariaband District, one of the nine newly formed districts of Chhattisgarh, was officially established on January 1, 2012, after being carved out of Raipur district. With its headquarters in Gariaband town, the district is bordered by Dhamtari and Mahasamund districts and spans an area of 5,822.861 sq. km, rich in natural resources.",
  },
  {
    image: Gym,
    title: "Gym",
    description:
      'A "gym" may include or describe adjacent open air areas as well. In Western countries, "gyms" often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestling, and with equipment and machines used for physical development training, or to do exercises.',
  },
  {
    image: Mahtari_vandan,
    title: "Mahtari Vandan Yojna",
    description:
      "The Mahtari Vandana Yojana is a scheme by the Chhattisgarh government to help women become financially independent, improve their health and nutrition, and strengthen their role in the family. The scheme provides a monthly financial assistance of ₹1,000 to eligible married women.",
  },
  {
    image: Spootify,
    title: "Spootify",
    description:
      "Spotify’s mission is to unlock the potential of human creativity by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it. Spotify’s platform revolutionized music listening forever when we launched in 2008.",
  },
  {
    image: Weather,
    title: "Weather",
    description:
      "A weather app project can involve collecting and analyzing weather data, and displaying it to users in a way that is easy to access. Some objectives of a weather app project might include: Providing accurate weather data, Displaying weather by city, Offering quick access to forecasts and other weather factors, and Covering cities worldwide.",
  },
  {
    image: Youtube,
    title: "Youtube",
    description:
      "YouTube is an American social media and online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal. Headquartered in San Bruno, California, United States, it is the second-most visited website in the world, after Google Search. In January 2024, YouTube had more than 2.7 billion monthly active users.",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-[#212436] py-12 px-6 sm:px-12 lg:px-20" id="project">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        My <span className="text-[rgb(113,113,205)]">Projects</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ image, title, description }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-[#1d1a2b] rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden focus:outline-none focus:ring-4 focus:ring-[rgb(113,113,205)]"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-gray-300 text-sm tracking-wide line-clamp-5">
                {description}
              </p>
            </div>
          </article>
        ))}
        </div>
    </section>
  );
}

export default Project;

