import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Page4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        let { isDesktop, isTablet, isMobile } = context.conditions;

        const sections = document.querySelectorAll(".animate-section");

        sections.forEach((section, index) => {
          if (isDesktop) {
            gsap.from(section, {
              x: index % 2 === 0 ? -200 : 200,
              opacity: 0,
              duration: 1.5,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
                toggleActions: "play play play reverse",
              },
            });
          } else if (isTablet) {
            gsap.from(section, {
              y: index % 2 === 0 ? -100 : 100,
              opacity: 0,
              duration: 1.2,
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 60%",
                scrub: true,
                toggleActions: "play none none reverse",
              },
            });
          } else if (isMobile) {
            gsap.from(section, {
              x: index % 2 === 0 ? -200 : 200,
              display: "none",
              scale: 0.8,
              opacity: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 100%",
                end: "top 40%",
                scrub: true,
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }
    );

    gsap.from("#projects-heading", {
      y: -50,
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#projects-heading",
        start: "top 85%",
        end: "top 65%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      id="experience"
      className="h-[200vh] lg:h-[100vh] w-screen bg-black text-white xsm:overflow-x-hidden xsm:pb-16"
    >
      <div className="h-[100%]  w-screen flex flex-col lg:flex-row">
        <div
          id="education"
          className="left h-[100vh] w-[100%] flex justify-center items-center bg-black"
        >
          <div className="h-[90%] w-[90%] flex flex-col gap-5 justify-center items-center">
            <div className="card h-[40%] w-[90%] border-[2px] border-violet-400 glowing-border rounded-lg flex flex-col justify-center items-center gap-10 p-5 animate-section">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-violet-400 text-3xl" />
                <h1 className="font-milk text-2xl lg:text-3xl">Education</h1>
              </div>
              <ul className="font-milk text-[10px] lg:text-[13px]">
                <li>
                  B.E. in Computer Engineering, K J Somaiya Institute of
                  Technology, Mumbai (2026) – 8.2 CGPA (present)
                </li>
                <li>XII (HSC), Abhishek Vidyalayam, Pune – 84% (2022)</li>
                <li>
                  X (CBSE), S.N.B.P International School, Pune – 89.6% (2020)
                </li>
              </ul>
            </div>

            <div className="card h-[40%] w-[90%] border-[2px] border-violet-400 glowing-border rounded-lg flex flex-col justify-center items-center gap-10 p-5 animate-section">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-violet-400 text-3xl" />
                <h1 className="font-milk text-2xl lg:text-3xl">Experience</h1>
              </div>
              <ul className="font-milk text-[10px] lg:text-[13px]">
                <li>
                  Full Stack Web Development Training Udemy (Sept 2023 –
                  Present)
                  <br />
                  Applied learned concepts to various real-world projects.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="right h-[100vh] w-[100%] flex justify-center items-center bg-black"
        >
          <div className="projects h-[90%] w-[90%] rounded-lg flex flex-col gap-5 justify-center items-center">
            <h1
              id="projects-heading"
              className="font-milk text-2xl lg:text-3xl"
            >
              Projects
            </h1>

            <a
              href="https://ietekjsit.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="card h-[40%] w-[90%] border-[2px] border-blue-400 glowing-border rounded-lg flex flex-col justify-center items-center gap-5 p-5 animate-section"
            >
              <h1 className="font-milk text-sm lg:text-xl">
                IETE RENAISSANCE WEBPAGE
              </h1>
              <ul className="font-milk text-[10px] lg:text-[13px]">
                <li>
                  Developed a responsive frontend for managing book records.
                </li>
                <li>
                  Designed user interfaces for multiple personas with
                  role-specific access.
                </li>
                <li>
                  Ensured compatibility across devices for seamless user
                  experience.
                </li>
              </ul>
              <div className="flex gap-3 mt-3">
                <SiTailwindcss className="text-blue-400 text-xl" />
                <FaHtml5 className="text-red-600 text-xl" />
              </div>
            </a>

            <a
              href="https://mini-store-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card h-[30%] w-[90%] border-[2px] border-blue-400 glowing-border rounded-lg flex flex-col justify-center items-center gap-5 p-5 animate-section"
            >
              <h1 className="font-milk text-sm lg:text-xl">
                MiniMart Delights (May 2024)
              </h1>
              <ul className="font-milk text-[10px] lg:text-[13px]">
                <li>
                  Built a responsive search engine handling data in JSON format.
                </li>
                <li>
                  Designed an intuitive interface for efficient data processing
                  and interaction.
                </li>
              </ul>
              <div className="flex gap-3 mt-3">
                <FaReact className="text-blue-400 text-xl" />
                <SiJavascript className="text-yellow-400 text-xl" />
                <FaHtml5 className="text-red-600 text-xl" />
              </div>
            </a>

            <a
              href="https://my-paytm-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card h-[30%] w-[90%] border-[2px] border-blue-400 glowing-border rounded-lg flex flex-col justify-center items-center gap-5 p-5 animate-section"
            >
              <h1 className="font-milk text-sm lg:text-xl">
                Paytm Clone (March 2024)
              </h1>
              <ul className="font-milk text-[10px] lg:text-[13px]">
                <li>
                  Created a modern dashboard inspired by Paytm using Tailwind
                  CSS.
                </li>
                <li>
                  Focused on replicating design and ensuring smooth navigation.
                </li>
              </ul>
              <div className="flex gap-3 mt-3">
                <FaReact className="text-blue-400 text-xl" />
                <SiTailwindcss className="text-blue-400 text-xl" />
                <FaCss3Alt className="text-blue-400 text-xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
