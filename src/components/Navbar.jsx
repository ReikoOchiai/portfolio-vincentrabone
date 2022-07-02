import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import "../styles/navbar.scss";

function Navbar() {
  const dropdownRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(dropdownRef.current.contains(e.target));

      if (
        dropdownRef.current !== null &&
        dropdownRef.current.contains(e.target) // if its not true, then run setToggle(false)
      ) {
        setToggle(!toggle);
      }
    };
    if (toggle) {
      window.addEventListener("click", pageClickEvent);
    }

  }, [toggle]);

  return (
    <nav className="inline-flex shadow-md w-screen">
      <div className="w-20 mr-auto my-auto align-middle">
        <img src="/img/logo.png" alt="Logo" />
      </div>

      <ul className="inline-flex cursor-pointer sm:hidden">
        <li className="list-item">About</li>
        <li className="list-item">Testimonials</li>
        <li className="list-item">Contact</li>
      </ul>

      {/*Dropdown menu*/}
      <div className="menu-container">
        <HiMenuAlt2
          size={35}
          onClick={() => setToggle(!toggle)}
          className="menu-trigger md:invisible"
        />
        <div ref={dropdownRef} className={`menu ${toggle ? "active" : ""}`}>
          {toggle && (
            <ul>
              <li>About</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
