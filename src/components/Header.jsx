import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Works", id: "works" },
    { name: "Technologies", id: "technologies" },
    { name: "Experience", id: "experience" },
    { name: "Contact Me", id: "contact_me" },
  ];

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        menuItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="relative">
      <nav className="h-[10%] w-full flex justify-between items-center text-white z-10 md:p-10 absolute p-8 lg:p-6">
        <button
          className="border-2 text-[10px] md:text-xs lg:text-[11px] h-[30px] md:h-[35px] w-[80px] md:w-[100px] border-white p-1 rounded-3xl transition-all duration-700 ease-in-out hover:h-[35px] hover:w-[90px] md:hover:h-[40px] md:hover:w-[110px] hover:bg-white hover:text-black"
          onClick={() => scrollToSection("contact_me")}
        >
          Hire me
        </button>
        <i
          className="ri-menu-3-line p-2 md:p-4 text-lg md:text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        ></i>
      </nav>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full bg-white flex flex-col items-center justify-center translate-x-full z-20"
      >
        <i
          className="ri-close-line text-3xl cursor-pointer absolute top-6 left-80 lg:top-10 lg:left-[95%]"
          onClick={() => setMenuOpen(false)}
        ></i>
        <ul className="text-lg md:text-xl w-full px-4 font-milk absolute">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="relative group py-2 px-4 w-full text-center cursor-pointer overflow-hidden"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="absolute inset-0 bg-yellow-300 text-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
