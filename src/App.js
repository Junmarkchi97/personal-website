import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";

function App() {
  const app = useRef(null);
  const introName = useRef(null);
  const introTitle = useRef(null);
  const introContainer = useRef(null);
  const nav = useRef(null);
  const body = useRef(null);
  const scrollTracker = useRef(null);
  const cursor = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      introName.current.style.transform = "translateY(-30px)";

      setTimeout(() => {
        introContainer.current.style.height = "15%";
        introContainer.current.style.scale = "0.8";
        introTitle.current.style.color = "gray";
        nav.current.style.opacity = "1";
      }, 1800);
    }, 1500);
  }, []);

  const mouseLeaveHandler = () => {
    cursor.current.style.opacity = "0";
  };

  const mouseEnterHandler = () => {
    cursor.current.style.opacity = "1";
  };

  const moustEnterBody = (e) => {
    // cursor.current.style.scale = "1.5";
  };

  return (
    <div
      id="app"
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      ref={app}
    >
      {/* <i className="fa-solid fa-arrow-pointer" ref={cursor}></i> */}
      <div className="intro-container" ref={introContainer}>
        <div className="intro-name" ref={introName}>
          JUNMARK CHI
        </div>
        <div className="intro-title" ref={introTitle}>
          WEB DEVELOPER
        </div>
      </div>
      <div className="body" ref={body} onMouseEnter={moustEnterBody}>
        <div className="work-container">
          <div className="project1 grid-column-span-2"></div>
          <div className="project2"></div>
          <div className="project3"></div>
          <div className="project4 grid-column-span-2"></div>
          <div className="project5"></div>
          <div className="project6"></div>
          <div className="project7"></div>
        </div>
      </div>
      <div className="scroll-tracker" ref={scrollTracker}></div>
      <div className="nav">
        <div className="nav-container" ref={nav}>
          <a className="nav-link">Projects</a>
          <a className="nav-link">Education</a>
          <a className="nav-link">Contact</a>
          <a className="nav-link">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default App;
