import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Page2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#boldtext h1", {
      y: "-100%",
      ease: "expo.inOut",
      stagger: 2,
    });

    gsap.to("#boldtext h1", {
      delay: 2,
      y: "-200%",
      ease: "expo.inOut",
      stagger: 2,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-text",
        start: "30% center",
        end: "-20% 20%",
        scrub: true,
      },
    });

    timeline
      .to(".works-text", {
        scale: 0.5,
        duration: 4,
      })
      .to(".works-text", {
        y: "-90%",
        duration: 4,
      })
      .to("#page2", {
        duration: 2,
      });
  }, []);

  return (
    <div id="works" className="h-[100%] w-screen justify-center items-center ">
      <div className="text-[180px] text-white opacity-25 absolute top-[-150px] left-[300px] font-bat xsm:h-0  xsm:w-0 ">
        <div className="h-[100vh] w-screen flex justify-center items-center xsm:hidden  xsm:h-0  xsm:w-0 ">
          <div
            id="boldtext"
            className="w-[42%] h-[30%] absolute overflow-hidden xsm:hidden  xsm:h-0  xsm:w-0 "
          >
            <h1 className="absolute top-[200px]">IMPACTFUL</h1>
            <h1 className="absolute top-[200px]">DESIGN</h1>
            <h1 className="absolute top-[200px]">LEADS</h1>
            <h1 className="absolute top-[200px]">BETTER</h1>
            <h1 className="absolute top-[200px]">DEVELOPMENT</h1>
          </div>
        </div>
      </div>

      <div className="h-[100%] w-screen flex justify-center xsm:mt-40">
        <h1
          className="works-text font-milk lg:text-[180px] xsm:text-[80px] absolute z-10 mt-[200px]"
          style={{ WebkitTextStroke: "2px #000000" }}
        >
          works
        </h1>
        <div className="h-[100%] w-screen flex lg:flex-row flex-wrap lg:justify-between lg:items-center xsm:flex-col xsm:justify-center xsm:items-center lg:px-60 xsm:px-0 xsm:gap-10 lg:mt-[200px]">
          <a
            href="https://my-paytm-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-slate-300 hover:border-black border-2 lg:h-[80vh] xsm:h-[50vh] lg:w-[30vw] xsm:w-[60vw] rounded-lg bg-white lg:transform lg:-rotate-10 xsm:transform-none lg:origin-bottom-right lg:opacity-70 xsm:opacity-90 hover:opacity-100 hover:scale-105 lg:hover:rotate-[0deg] lg:transition-transform duration-300"
          >
            <img
              src={image}
              className="h-[100%] w-[100%] object-cover rounded-lg"
              alt="Work 1"
            />
          </a>
          <a
            href="https://mini-store-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-slate-300 hover:border-black border-2 lg:h-[80vh] xsm:h-[50vh] lg:w-[30vw] xsm:w-[60vw] rounded-lg bg-white lg:transform lg:rotate-10 xsm:transform-none lg:origin-bottom-left lg:opacity-80 hover:opacity-100 hover:scale-105 lg:hover:rotate-[0deg] lg:transition-transform duration-300"
          >
            <img
              src={image2}
              className="h-[100%] w-[100%] object-cover rounded-lg"
              alt="Work 2"
            />
          </a>
          <a
            href="https://ietekjsit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-slate-300 hover:border-black border-2 lg:h-[80vh] xsm:h-[50vh] lg:w-[30vw] xsm:w-[60vw] rounded-lg bg-white lg:transform lg:-rotate-10 xsm:transform-none lg:origin-bottom-right lg:opacity-70 xsm:opacity-90 hover:opacity-100 hover:scale-105 lg:hover:rotate-[0deg] lg:transition-transform duration-300"
          >
            <img
              src={image3}
              className="h-[100%] w-[100%] object-cover rounded-lg"
              alt="Work 3"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="group border-slate-300 hover:border-black border-2 lg:h-[80vh] xsm:h-[50vh] lg:w-[30vw] xsm:w-[60vw] rounded-lg bg-white lg:transform lg:rotate-10 xsm:transform-none lg:origin-bottom-left lg:opacity-80 hover:opacity-100 hover:scale-105 lg:hover:rotate-[0deg] lg:transition-transform duration-300"
          >
            <h1 className="h-[100%] w-[100%] flex justify-center items-center font-milk hover:scale-150 hover:transition-all duration-500">
              UPCOMING WORK...
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page2;
