import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { js_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 fixed top-0 bg-primary`}
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
          <img src={js_logo} alt="logo" className="w-14 h-14 object-contain" />
          <div class="ml-2">
            <p>Janko</p>
            <p>Seremak</p>
          </div>
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

        {/* Mobile Navigation 34:07 */}
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
