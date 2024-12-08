import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Tilttext = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const textCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };

        const mouseX = e.clientX - textCenter.x;
        const mouseY = e.clientY - textCenter.y;

        setMousePosition({ x: mouseX, y: mouseY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const rotation = {
      x: -(mousePosition.y / window.innerHeight) * 80,
      y: (mousePosition.x / window.innerWidth) * 80,
    };

    gsap.to(textRef.current, {
      rotationX: rotation.x,
      rotationY: rotation.y,
      ease: "elastic.out(1, 0.4)",
      duration: 5,
    });
  }, [mousePosition]);

  return (
    <div
      ref={textRef}
      className=" changingtext cursor-default inline-block text-center sm:absolute sm:top-64 sm:flex sm:flex-col sm:justify-center  items-center xsm:absolute xsm:top-64  xsm:w-[80%] lg:w-[50%] md:w-[50%] "
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl leading-[60px] md:leading-[80px] lg:leading-[90px] sm:text-8xl xsm:text-5xl">
        VEDANT HUNDARE
      </h1>
      <h1 className="text-xl md:text-2xl xsm:text-3xl">
        I am a{" "}
        <span
          className="text-2xl md:text-4xl text-black"
          style={{ WebkitTextStroke: "1.2px white" }}
        >
          darkmode developer
        </span>
      </h1>
    </div>
  );
};

export default Tilttext;
