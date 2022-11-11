import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";

function App() {
  const app = useRef(null);
  const introName = useRef(null);
  const introTitle = useRef(null);
  const introContainer = useRef(null);
  const projectRef = useRef([]);
  const navRef = useRef([]);
  const nav = useRef(null);
  const body = useRef(null);
  const projectContainer = useRef(null);
  const scrollTracker = useRef(null);

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

  const [navs, setNavs] = useState([
    "Projects",
    "Education",
    "Contact",
    "Resume",
  ]);

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

  const handleOnMouseMoveProject = (e) => {
    projectRef.current.map((project) => {
      const rect = project.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      project.style.setProperty("--mouse-x", `${x}px`);
      project.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const handleOnClickNav = (e) => {
    nav.current.dataset.activeIndex = e.target.id;
    console.log(e.target.id);
  };

  return (
    <div id="app" ref={app}>
      <div className="intro-container" ref={introContainer}>
        <div className="intro-name" ref={introName}>
          JUNMARK CHI
        </div>
        <div className="intro-title" ref={introTitle}>
          WEB DEVELOPER
        </div>
      </div>
      <div className="body" ref={body}>
        <div
          className="project-container"
          ref={projectContainer}
          onMouseMove={(e) => handleOnMouseMoveProject(e)}
        >
          {projects.map((project, index) => {
            return (
              <div
                data-id={project.id}
                className={project.class}
                key={index}
                ref={(e) => (projectRef.current[index] = e)}
              >
                <div className="project-border"></div>
                <div className="project-content"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="scroll-tracker" ref={scrollTracker}></div>
      <div className="nav">
        <div className="nav-container" ref={nav}>
          {navs.map((nav, index) => {
            return (
              <a
                id={index}
                key={index}
                className="nav-link"
                onClick={(e) => handleOnClickNav(e)}
                ref={(e) => (navRef[index] = e)}
              >
                {nav}
              </a>
            );
          })}
          <div className="hover"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
