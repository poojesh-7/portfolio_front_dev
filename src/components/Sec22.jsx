import { useState, useEffect } from "react";
import "./Sec22.css";
let firstTime1 = true;
let firstTime2 = true;
let firstTime3 = true;
let firstTime4 = true;
const Sec22 = () => {
  const [y, setY] = useState(0);
  const scrollDownEvent = () => {
    setY(window.scrollY);
    if (firstTime1) {
      if (window.scrollY > 520) {
        firstTime1 = false;
      }
    }
    if (firstTime2) {
      if (window.scrollY > 600) {
        firstTime2 = false;
      }
    }
    if (firstTime3) {
      if (window.scrollY > 820) {
        firstTime3 = false;
      }
    }
    if (firstTime4) {
      if (window.scrollY > 970) {
        firstTime4 = false;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, []);
  console.log(y);
  let lw1 = firstTime1
    ? y >= 520
      ? "list_wrapper lw1 first_move"
      : "list_wrapper lw1"
    : "list_wrapper lw1 first_move";
  let lw2 = firstTime2
    ? y > 600
      ? "list_wrapper lw2 second_move"
      : "list_wrapper lw2"
    : "list_wrapper lw2 second_move";
  let lw3 = firstTime3
    ? y > 820
      ? "list_wrapper lw1 first_move"
      : "list_wrapper lw1"
    : "list_wrapper lw1 first_move";
  let lw4 = firstTime4
    ? y > 970
      ? "list_wrapper lw2 second_move"
      : "list_wrapper lw2"
    : "list_wrapper lw2 second_move";
  return (
    <div className="sec2">
      <h1 className="about-heading">About</h1>
      <p className="about-me">
        Hi, I&apos;m Poojesh K. S.<br></br>A passionate and persistent web
        developer based in Bengaluru, currently pursuing a career in frontend
        development with a focus on JavaScript, HTML, CSS, React.js, Figma, and
        version control using Git.<br></br>
      </p>
      <div className={lw1}>
        <div className="corner_line"></div>
        <div className="bottom_line"></div>
        <b className="cat-heading">Technical Skills</b>
        <ul className="list">
          <li>Frontend development with HTML, CSS, JavaScript, React.js</li>
          <li>Responsive design and cross-browser compatibility</li>
          <li>UI/UX design and wireframing using Figma</li>
          <li>Version control and collaboration using Git</li>
        </ul>
      </div>
      <div className={lw2}>
        <div className="corner_line2"></div>
        <div className="bottom_line2"></div>
        <div className="inner">
          <b className="cat-heading">Core Strengths</b>
          <ul className="list">
            <li>Problem-solving</li>
            <li>Continuous learning</li>
            <li>UI/UX thinking</li>
            <li>Team collaboration</li>
          </ul>
        </div>
      </div>
      <div className={lw3}>
        <div className="corner_line"></div>
        <div className="bottom_line"></div>
        <div className="inner">
          <b className="cat-heading ">Certificates</b>
          <ul className="list">
            <li>JavaScript</li>
            <li>React,Redux</li>
          </ul>
        </div>
      </div>
      <div className={lw4}>
        <div className="corner_line2"></div>
        <div className="bottom_line2"></div>
        <div className="inner">
          <b className="cat-heading">Interests</b>
          <ul className="list">
            <li>Crafting Circuits for Fun</li>
            <li>Physical Fitness & Wellness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sec22;
