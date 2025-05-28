import { useState } from "react";
import "./Navigation.css";
// import CV from "../assets/cv.png";
const Navigation = () => {
  const [show, setShow] = useState(false);
  const onOpen = () => {
    setShow((prev) => !prev);
  };
  const onClose = () => {
    setShow(false);
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToAbout = () => {
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  };
  const scrollToSkills = () => {
    window.scrollTo({
      top: 1720,
      behavior: "smooth",
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: 2724,
      behavior: "smooth",
    });
  };
  const scrollToContactMe = () => {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  };

  const arr = [
    { name: "Home", click: scrollToHome },
    { name: "About", click: scrollToAbout },
    { name: "Skills", click: scrollToSkills },
    { name: "Projects", click: scrollToProjects },
    { name: "Contact Me", click: scrollToContactMe },
  ];

  const navLinks = arr.map((link) => (
    <div key={link.name} onClick={link.click}>
      <div onClick={onClose} className="nav_link">
        <p className="link_name">{link.name}</p>
        <div className="slider"></div>
      </div>
    </div>
  ));

  let showLinks = "plus";
  let navLinksClass = "navLinks";
  if (show) {
    showLinks = "plus tilt";
    navLinksClass = "navLinks navLinks-Slide";
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo"></div>
      </nav>
      <div className="navbox_holder">
        <div className="navbox">
          <button onClick={onOpen} className={showLinks}></button>
        </div>
        <div className={navLinksClass}>{navLinks}</div>
      </div>
    </div>
  );
};

export default Navigation;
