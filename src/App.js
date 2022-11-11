import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";

function App() {
  const app = useRef(null);
  const introName = useRef(null);
  const introTitle = useRef(null);
  const introContainer = useRef(null);
  const projectRef = useRef([]);
  const nav = useRef(null);
  const body = useRef(null);
  const projectContainer = useRef(null);
  const scrollTracker = useRef(null);
  // const cursor = useRef(null);
  const [projects, setProjects] = useState([
    { id: "1", class: "project project1 grid-column-span-2", selected: false },
    { id: "2", class: "project project2", selected: false },
    { id: "3", class: "project project3", selected: false },
    { id: "4", class: "project project4 grid-column-span-2", selected: false },
    { id: "5", class: "project project5", selected: false },
    { id: "6", class: "project project6", selected: false },
    { id: "7", class: "project project7", selected: false },
    { id: "8", class: "project project8 grid-column-span-2", selected: false },
  ]);

  useEffect(() => {
    setTimeout(() => {
      introName.current.style.transform = "translateY(-30px)";

      setTimeout(() => {
        introContainer.current.style.height = "15%";
        introContainer.current.style.scale = "0.8";
        introTitle.current.style.color = "gray";
        nav.current.style.opacity = "1";

        // setTimeout(() => {
        //   projectContainer.current.style.opacity = "1";
        // }, 800);
      }, 1800);
    }, 1500);
  }, []);

  // const mouseLeaveHandler = () => {
  //   cursor.current.style.opacity = "0";
  // };

  // const mouseEnterHandler = () => {
  //   cursor.current.style.opacity = "1";
  // };

  const moustEnterBody = (e) => {
    // cursor.current.style.scale = "1.5";
  };

  const handleOnMouseMove = (e) => {
    // const { currentTarget: target } = e;
    projectRef.current.map((project) => {
      const rect = project.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      project.style.setProperty("--mouse-x", `${x}px`);
      project.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div
      id="app"
      // onMouseLeave={mouseLeaveHandler}
      // onMouseEnter={mouseEnterHandler}
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
        <div
          className="project-container"
          ref={projectContainer}
          onMouseMove={(e) => handleOnMouseMove(e)}
        >
          {projects.map((project, index) => {
            return (
              <div
                data-id={project.id}
                className={project.class}
                key={index}
                ref={e => projectRef.current[index] = e}
              >
                <div className="project-border"></div>
                <div className="project-content"></div>
              </div>
            );
          })}
          {/* <div className="project project1 grid-column-span-2"></div>
          <div className="project project2"></div>
          <div className="project project3"></div>
          <div className="project project4 grid-column-span-2"></div>
          <div className="project project5"></div>
          <div className="project project6"></div>
          <div className="project project7"></div>
          <div className="project project8 grid-column-span-2"></div> */}
        </div>
      </div>
      <div className="scroll-tracker" ref={scrollTracker}></div>
      <div className="nav">
        <div className="nav-container" ref={nav}>
          <a className="nav-link">Projects</a>
          <a className="nav-link">Education</a>
          <a className="nav-link">Contact</a>
          <a className="nav-link">Resume</a>
          <div className="hover"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
