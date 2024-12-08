import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiGreensock } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  useEffect(() => {
    gsap.from(".box", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 2,
      scrollTrigger: {
        trigger: ".tech",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });

    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      let x, y;

      if (e.type === "mousemove") {
        x = e.clientX - 80;
        y = e.clientY - 80;
      } else if (e.type === "touchmove") {
        x = e.touches[0].clientX - 20;
        y = e.touches[0].clientY - 80;
      }

      gsap.to(cursor, {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const showCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveCursor);
    window.addEventListener("touchstart", showCursor);
    window.addEventListener("touchend", hideCursor);

    const techSection = document.querySelector(".page3");

    techSection.addEventListener("mouseenter", showCursor);
    techSection.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", moveCursor);
      window.removeEventListener("touchstart", showCursor);
      window.removeEventListener("touchend", hideCursor);
      techSection.removeEventListener("mouseenter", showCursor);
      techSection.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  const techWithIcons = [
    { name: "html", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "react js", icon: <FaReact className="text-blue-400 text-2xl" /> },
    {
      name: "tailwind",
      icon: <SiTailwindcss className="text-teal-400 text-2xl" />,
    },
    { name: "figma", icon: <FaFigma className="text-pink-500 text-2xl" /> },
    { name: "canva", icon: <SiCanva className="text-blue-500 text-2xl" /> },
    {
      name: "bootstrap",
      icon: <FaBootstrap className="text-purple-600 text-2xl" />,
    },
    { name: "css", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    {
      name: "javascript",
      icon: <FaJsSquare className="text-yellow-400 text-2xl" />,
    },
  ];

  return (
    <div
      id="technologies"
      className="page3  relative py-20 h-[100vh] flex flex-col justify-center items-center bg-black text-white font-milk mt-40"
    >
      <div
        id="cursor"
        className="fixed top-0 left-0 w-16 h-16  rounded-full pointer-events-none z-50 cursor-blend"
        style={{ transform: "translate(-50%, -50%)", scale: 0 }}
      ></div>
      <h1 className="text-center text-6xl md:text-8xl font-bold mb-12 font-milk xsm:text-3xl">
        TECHNOLOGIES
      </h1>
      <div
        id="technologies"
        className="flex flex-wrap justify-center w-[90%] md:w-[60%] gap-4 md:gap-6 tech"
      >
        {techWithIcons.map((tech, index) => (
          <div
            key={index}
            className="box bg-gray-800 text-center w-28 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 xsm:w-[45%] flex flex-col items-center gap-2"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
