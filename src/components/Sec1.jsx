// import { useEffect, useRef, useState } from "react";
import "./Sec1.css"; // Make sure to include your CSS here

const Sec1 = () => {
  // const [toggle, setToggle] = useState(false);
  // const headingRefs = useRef([]);

  // useEffect(() => {
  //   const observerEl = document.querySelector(".tbgf");

  //   const handleAnimationIteration = () => {
  //     setToggle((prev) => !prev);
  //   };

  //   observerEl.addEventListener("animationiteration", handleAnimationIteration);

  //   return () => {
  //     observerEl.removeEventListener(
  //       "animationiteration",
  //       handleAnimationIteration
  //     );
  //   };
  // }, []);

  // const text1 = toggle ? "I'm A" : "Hello !";
  // const text2 = toggle ? "Web" : "I'm";
  // const text3 = toggle ? "Developer" : "Poojesh";

  return (
    <div className="sec1">
      <div>
        <div className="first_txt">
          <div className="spec_txt">
            <div className="tbgf" />
            <div className="tbg1">
              <h1
                className="heading"
                // ref={(el) => (headingRefs.current[0] = el)}
              >
                Hello!
                {/* {text1} */}
              </h1>
            </div>
          </div>

          <div className="spec_txt">
            <div className="tbgs" />
            <div className="tbg2">
              <h1
                className="heading"
                // ref={(el) => (headingRefs.current[1] = el)}
              >
                I&apos;m
                {/* {text2} */}
              </h1>
            </div>
          </div>

          <div className="spec_txt">
            <div className="tbgt" />
            <div className="tbg3">
              <h1
                className="heading"
                // ref={(el) => (headingRefs.current[2] = el)}
              >
                {/* {text3} */}
                Poojesh ,
              </h1>
            </div>
          </div>
        </div>
        <div className="second_txt">
          <div className="spec_txt1">
            <div className="tbgf2" />
            <div className="tbg12">
              <h1
                className="heading1"
                // ref={(el) => (headingRefs.current[0] = el)}
              >
                I&apos;m A{/* {text1} */}
              </h1>
            </div>
          </div>

          <div className="spec_txt1">
            <div className="tbgs2" />
            <div className="tbg22">
              <h1
                className="heading1"
                // ref={(el) => (headingRefs.current[1] = el)}
              >
                Web
                {/* {text2} */}
              </h1>
            </div>
          </div>

          <div className="spec_txt1">
            <div className="tbgt2" />
            <div className="tbg32">
              <h1
                className="heading1"
                // ref={(el) => (headingRefs.current[2] = el)}
              >
                {/* {text3} */}
                Developer .
              </h1>
            </div>
          </div>
        </div>
        <p className="express_txt">
          Specialized in developing high-quality, professional websites with a
          focus on performance, usability, and modern design standards.
        </p>
      </div>
    </div>
  );
};

export default Sec1;
