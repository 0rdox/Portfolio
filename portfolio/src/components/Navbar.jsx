import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { js_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 z-20 fixed top-0 duration-500 ease-in-out ${
        transparent ? "bg-primary" : "backdrop-blur-sm bg-red-500 bg-opacity-40"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={js_logo} alt="logo" className="w-10 h-10 object-contain" />
          {/* <div class="ml-2">
            <p>Janko</p>
            <p>Seremak</p>
          </div> */}
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                onClick={() => {
                  setActive(link.title);
                }}
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }
                hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <button class="bg-purple-500 py-2 px-3">Github</button>
        {/* Mobile Navigation 34:07 */}
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

// no background, on scroll make translucent and blurry behind
