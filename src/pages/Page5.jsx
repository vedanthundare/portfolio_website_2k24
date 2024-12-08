import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";

const Page5 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".contact-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#page5",
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="Contact_Me"
      className="h-[100vh] w-screen bg-black flex flex-col justify-center items-center font-mono text-slate-600 lg:p-4 p-8"
    >
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center text-white tracking-wider font-milk">
        Get in Touch
      </h1>

      <div className="flex flex-col  justify-center items-start lg:w-[90%] lg:h-[50%] p-4 w-full sm:w-[80%] rounded-md">
        <a
          href="https://www.instagram.com/_vibewithvedant_/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item relative lg:px-5 lg:py-2 lg:h-[30%] flex items-center gap-3 sm:gap-4 hover:text-pink-800 transition-colors duration-300 w-full lg:border-b-2 pb-5 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <FaInstagram size={30} className="sm:text-2xl z-10" />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words z-10">
            Instagram
          </span>
        </a>

        <a
          href="mailto:vedanthundare8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item relative lg:px-5 lg:py-2 lg:h-[30%] flex items-center gap-3 sm:gap-4 hover:text-red-700 transition-colors duration-300 w-full lg:border-b-2 pb-5 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <FaEnvelope size={30} className="sm:text-2xl z-10" />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words z-10">
            vedanthundare8@gmail.com
          </span>
        </a>

        <a
          href="tel:+917400173303"
          className="contact-item relative lg:px-5 lg:py-2 lg:h-[30%] flex items-center gap-3 sm:gap-4 hover:text-green-800 transition-colors duration-300 w-full lg:border-b-2 pb-5 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <FaPhoneAlt size={30} className="sm:text-2xl z-10" />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words z-10">
            +91-7400173303
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/vedant-hundare-47898a252/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item relative lg:px-5 lg:py-2 lg:h-[30%] flex items-center gap-3 sm:gap-4 hover:text-blue-600 transition-colors duration-300 w-full lg:border-b-2 pb-5 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <FaLinkedin size={30} className="sm:text-2xl z-10" />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl break-words z-10">
            LinkedIn
          </span>
        </a>
      </div>

      <footer className="mt-6 sm:mt-12 text-center text-white">
        <p>
          Feel free to tweak or enhance the design and layout for a visually
          appealing experience!
        </p>
      </footer>
    </div>
  );
};

export default Page5;
