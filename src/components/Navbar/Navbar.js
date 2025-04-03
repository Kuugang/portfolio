import { useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { projects, skills, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after navigation
    toggleNavList();
  };

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {skills.length ? (
          <li className="nav__list-item">
            <a href="#skills" onClick={smoothScroll} className="link link--nav">
              Skills
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={smoothScroll}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={smoothScroll}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
