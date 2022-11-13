import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";
import Contact from "./components/contact.jsx";
import Resume from "./components/resume.jsx";
import About from "./components/about.jsx";

function App() {
  const app = useRef(null);
  const viewProjectCursor = useRef(null);
  const introName = useRef(null);
  const introTitle = useRef(null);
  const introContainer = useRef(null);
  const nav = useRef(null);
  const navRef = useRef([]);
  const wrapperRef = useRef([]);
  const projectRef = useRef([]);
  const projectWrapper = useRef(null);
  const projectContainer = useRef(null);
  const projectShadeTop = useRef(null);
  const projectShadeBottom = useRef(null);
  const aboutWrapper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(
    activeIndex + 1 <= wrapperRef.current.length - 1 ? activeIndex + 1 : 0
  );

  const [projects, setProjects] = useState([
    { id: "1", class: "project project1 grid-column-span-2" },
    { id: "2", class: "project project2" },
    { id: "3", class: "project project3" },
    { id: "4", class: "project project4 grid-column-span-2" },
    { id: "5", class: "project project5" },
    { id: "6", class: "project project6" },
    { id: "7", class: "project project7" },
    { id: "8", class: "project project8 grid-column-span-2" },
  ]);

  const [navs, setNavs] = useState(["Projects", "About", "Contact", "Resume"]);

  useEffect(() => {
    setTimeout(() => {
      introName.current.style.transform = "translateY(-25px)";

      setTimeout(() => {
        introContainer.current.style.height = "10%";
        introContainer.current.style.scale = "0.7";
        introTitle.current.style.color = "gray";
        nav.current.style.opacity = "1";
        app.current.dataset.clickedNav = 0;
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
    app.current.dataset.clickedNav = e.target.id;
  };

  const handleOnScrollProjects = () => {
    const scrollValue = projectContainer.current.scrollTop;
    const scrollMaxValue = projectContainer.current.scrollHeight;

    if (scrollValue === 0) {
      projectShadeTop.current.style.opacity = "0";
      projectShadeBottom.current.style.opacity = "1";
    } else {
      projectShadeTop.current.style.opacity = "1";
      projectShadeBottom.current.style.opacity = "0";
    }
  };

  const handleOnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = e.target.id;
  };

  const handleOnUnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = null;
  };

  const handleProjectClick = (e) => {
    // e.target.classList.add("selected")
    console.log(e.target);
  };

  const handleProjectMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    viewProjectCursor.current.style.opacity = "1";
    app.current.style.cursor = "none";
    viewProjectCursor.current.style.transform = `translate(${x - 48}px,${
      y - 16
    }px)`;
  };

  const handleProjectMouseLeave = (e) => {
    viewProjectCursor.current.style.opacity = "0";
    app.current.style.cursor = "default";
  };

  return (
    <div id="app" ref={app}>
      <div className="view-project-cursor" ref={viewProjectCursor}>
        View Project
      </div>
      <div className="intro-container" ref={introContainer}>
        <div className="intro-name" ref={introName}>
          JUNMARK <span>CHI</span>
        </div>
        <div className="intro-title" ref={introTitle}>
          FULL-STACK DEVELOPER
        </div>
      </div>
      <div
        className="wrapper project-wrapper"
        ref={(e) => (wrapperRef.current[0] = e)}
      >
        <div className="project-shade-top" ref={projectShadeTop}></div>
        <div
          className="project-container"
          onScroll={handleOnScrollProjects}
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
                data-selected="false"
                onClick={(e) => handleProjectClick(e)}
                onMouseMove={(e) => handleProjectMouseMove(e)}
                onMouseLeave={handleProjectMouseLeave}
              >
                <div className="project-border"></div>
                <div className="project-content"></div>
              </div>
            );
          })}
        </div>
        <div className="project-shade-bottom" ref={projectShadeBottom}></div>
      </div>
      <div
        className="wrapper about-wrapper"
        ref={(e) => (wrapperRef.current[1] = e)}
      >
        <About />
        
      </div>
      <div
        className="wrapper contact-wrapper"
        ref={(e) => (wrapperRef.current[2] = e)}
      >
        <Contact />
      </div>
      <div
        className="wrapper resume-wrapper"
        // ref={(e) => (wrapperRef.current[3] = e)}
      >
        <Resume />
      </div>
      {/* <div className="scroll-tracker" ref={scrollTracker}></div> */}
      <div className="nav">
        <div className="nav-container" ref={nav}>
          {navs.map((nav, index) => {
            return (
              <div
                id={index}
                key={index}
                className="nav-link"
                onClick={(e) => handleOnClickNav(e)}
                onMouseEnter={(e) => handleOnHoverNav(e)}
                onMouseLeave={(e) => handleOnUnHoverNav(e)}
                ref={(e) => (navRef[index] = e)}
              >
                {nav}
              </div>
            );
          })}
          <div className="social-links">
            <a href="https://github.com/Junmarkchi97" target="_blank" id="4">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/junmarkchi/"
              target="_blank"
              id="5"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="hover-dot"></div>
          <div className="clicked"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
