import React, { useEffect, useRef } from "react";
import Page1 from "./pages/page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    const sections = appRef.current.querySelectorAll("section");

    sections.forEach((section) => {
      gsap.fromTo(
        "#technologies",
        {
          scale: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef}>
      <Header />
      <Page1 />
      <Page2 />
      <section id="technologies">
        <Page3 />
      </section>
      <Page4 />
      <section id="contact_me">
        <Page5 />
      </section>
    </div>
  );
};

export default App;
