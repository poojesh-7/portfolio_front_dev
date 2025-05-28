import { useState, useEffect } from "react";

import "./App.css";
import Sec1 from "./components/Sec1";
import Sec22 from "./components/Sec22";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Bg from "./components/Bg";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import Loading from "./components/Loading";
function App() {
  const [show, setShow] = useState(true);
  const [y, setY] = useState(0);
  const getY = () => {
    setY(window.scrollY);
  };

  const setShowFn = () => {
    setShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFn();
    }, 3000);
    window.addEventListener("scroll", getY);
    return () => {
      clearTimeout(setShowFn);
      window.removeEventListener("scroll", getY);
    };
  }, []);
  return (
    <>
      {show ? (
        <Loading />
      ) : (
        <>
          <Navigation />
          <Bg y={y} />
          <StatusBar y={y} />
          <Sec1 />
          <Sec22 y={y} />
          <Sec3 />
          <Sec4 />
          <Sec5 />
        </>
      )}
    </>
  );
}

export default App;
