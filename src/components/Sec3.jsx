import { useEffect, useState } from "react";
import "./Sec3.css";
let firstTime = true;
const Sec3 = () => {
  const [yoffset, setYoffset] = useState(0);
  const scrollDownEvent = () => {
    setYoffset(window.scrollY);
    if (firstTime) {
      if (window.scrollY > 2000) {
        firstTime = false;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, []);
  let skillClass1 = yoffset > 2000 ? "skills1 movin-out" : "skills1";
  let skillClass2 = "skills2";
  if (yoffset > 2000) {
    skillClass2 = "skills2 movin-in";
  }
  let sb1Class = firstTime
    ? yoffset > 1700
      ? "b1 slide1"
      : "b1"
    : "b1 slide1";
  let sb2Class = firstTime
    ? yoffset > 1700
      ? "b1 slide2"
      : "b1"
    : "b1 slide2";

  let drop1Class = firstTime
    ? yoffset > 2002
      ? "b2 drop drop-type2"
      : "b2"
    : "b2 drop drop-type2";
  return (
    <div className="sec3">
      <div className="skill-heading">
        <h2>Skills</h2>
        <div className="levels-hor">
          <p>Beginner</p>
          <p>Moderate</p>
          <p>Advance</p>
        </div>
        <div
          className={skillClass1}
          style={{
            transition: "all 0.15s ease-in-out",
          }}
        >
          <div className="main-box1">
            <div className="hori">
              <div className={sb1Class}>
                <h3>HTML</h3>
              </div>
            </div>
            <div className="hori">
              <div className={sb1Class}>
                <div>
                  <h3 className="speh">CSS </h3>
                </div>
              </div>
            </div>
            <div className="hori">
              <div className={sb1Class}>
                {/* <h3>ReactJS</h3> */}
                <h3 className="speh">JavaScript</h3>
              </div>
            </div>
            <div className="hori">
              <div className={sb2Class}>
                <h3 className="speh">Git-version</h3>
                <h3 className="speh">Control</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className={skillClass2}
          style={{
            transform: `translateY(${-yoffset / 5}px)`,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <div className="levels-ver">
            <p>Beginner </p>
            <div style={{ maxWidth: "0px" }}>
              <p>Moderate</p>
            </div>
            <p>Advance</p>
          </div>
          <div className="ver">
            <div className={drop1Class}>Reactjs</div>
          </div>
          <div className="ver">
            <div className={drop1Class}>Redux</div>
          </div>
          {/* <div className="ver">
            <div className={drop1Class}></div>
          </div> */}
          <div className="ver">
            <div className={drop1Class}>Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
