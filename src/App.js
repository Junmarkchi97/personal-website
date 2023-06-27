import React, { useEffect, useRef } from 'react';
import './styles/app.scss';
import Contact from './components/contact.jsx';
import Resume from './components/resume.jsx';
import About from './components/about.jsx';

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

  const projects = [
    {
      id: '1',
      class: 'project project1 grid-column-span-2',
      src: 'gif/bukidmarkets.gif',
      alt: 'bukidmarkets gif',
    },
    {
      id: '2',
      class: 'project project2',
      src: 'gif/aviom.gif',
      alt: 'avion gif',
    },
    {
      id: '3',
      class: 'project project3',
      src: 'gif/tictactoe.gif',
      alt: 'tictactoe gif',
    },
    {
      id: '4',
      class: 'project project4 grid-column-span-2',
      src: 'gif/momentum.gif',
      alt: 'momentum gif',
    },
    {
      id: '5',
      class: 'project project5',
      src: 'gif/boknoy.gif',
      alt: 'boknoy gif',
    },
    {
      id: '6',
      class: 'project project6',
      src: 'gif/chess.gif',
      alt: 'chess gif',
    },
    {
      id: '7',
      class: 'project project7',
      src: 'gif/jackson.gif',
      alt: 'jackson gif',
    },
    {
      id: '8',
      class: 'project project8 grid-column-span-2',
      src: 'gif/slack.gif',
      alt: 'slack gif',
    },
  ];

  const navs = ['About', 'Projects', 'Contact', 'Resume'];

  useEffect(() => {
    setTimeout(() => {
      introName.current.style.transform = 'translateY(-25px)';

      setTimeout(() => {
        introContainer.current.style.height = '6%';
        introContainer.current.style.scale = '0.75';
        introTitle.current.style.color = 'gray';
        nav.current.style.opacity = '1';
        app.current.dataset.clickedNav = 0;
        introName.current.style.transform = 'translateY(-10px)';
        introTitle.current.style.transform = 'translateY(15px)';
      }, 1800);
    }, 1500);
  }, []);

  const handleOnMouseMoveProject = (e) => {
    projectRef.current.forEach((project) => {
      const rect = project.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      project.style.setProperty('--mouse-x', `${x}px`);
      project.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  const handleOnClickNav = (e) => {
    nav.current.dataset.activeIndex = e.target.id;
    app.current.dataset.clickedNav = e.target.id;
  };

  const handleOnScrollProjects = () => {
    const scrollValue = projectContainer.current.scrollTop;
    // const scrollMaxValue = projectContainer.current.scrollHeight;

    if (scrollValue === 0) {
      projectShadeTop.current.style.opacity = '0';
      projectShadeBottom.current.style.opacity = '1';
    } else {
      projectShadeTop.current.style.opacity = '1';
      projectShadeBottom.current.style.opacity = '0';
    }
  };

  const handleOnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = e.target.id;
  };

  const handleOnUnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = null;
  };

  const handleProjectClick = (e) => {
    projectWrapper.current.toggleAttribute('clicked');
  };

  const handleProjectMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    viewProjectCursor.current.style.opacity = '1';
    app.current.style.cursor = 'pointer';
    viewProjectCursor.current.style.transform = `translate(${x - 48}px,${
      y - 30
    }px)`;
  };

  const handleProjectMouseLeave = (e) => {
    viewProjectCursor.current.style.opacity = '0';
    app.current.style.cursor = 'default';
  };

  const handleClickHeader = (e) => {
    nav.current.dataset.activeIndex = 0;
    app.current.dataset.clickedNav = 0;
  };

  return (
    <div id='app' ref={app}>
      <span className='view-project-cursor' ref={viewProjectCursor}>
        View Project
      </span>

      <section className='intro-container' ref={introContainer}>
        <div className='intro-name' ref={introName} onClick={handleClickHeader}>
          JUNMARK <span>CHI</span>
        </div>
        <div
          className='intro-title'
          ref={introTitle}
          onClick={handleClickHeader}
        >
          SOFTWARE DEVELOPER
        </div>
      </section>

      {/* ABOUT */}
      <section
        className='wrapper about-wrapper'
        ref={(e) => (wrapperRef.current[1] = e)}
      >
        <About />
      </section>

      {/* PROJECTS */}
      <section className='wrapper project-wrapper' ref={projectWrapper}>
        <div className='project-shade-top' ref={projectShadeTop}></div>
        <div
          className='project-container'
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
                data-selected='false'
                onClick={(e) => handleProjectClick(e)}
                onMouseMove={(e) => handleProjectMouseMove(e)}
                onMouseLeave={handleProjectMouseLeave}
              >
                <div className='project-border'></div>
                <div className='project-content'>
                  {/* <img className="gif" src={project.src} alt={project.alt} /> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className='project-shade-bottom' ref={projectShadeBottom}></div>
      </section>

      {/* CONTACT */}
      <section
        className='wrapper contact-wrapper'
        ref={(e) => (wrapperRef.current[2] = e)}
      >
        <Contact />
      </section>

      {/* RESUME */}
      <section
        className='wrapper resume-wrapper'
        // ref={(e) => (wrapperRef.current[3] = e)}
      >
        <Resume />
      </section>

      {/* <div className="scroll-tracker" ref={scrollTracker}></div> */}

      <section className='nav'>
        <div className='nav-container' ref={nav}>
          {navs.map((nav, index) => {
            return (
              <div
                id={index}
                key={index}
                className='nav-link'
                onClick={(e) => handleOnClickNav(e)}
                onMouseEnter={(e) => handleOnHoverNav(e)}
                onMouseLeave={(e) => handleOnUnHoverNav(e)}
                ref={(e) => (navRef[index] = e)}
              >
                {nav}
              </div>
            );
          })}
          <div className='social-links'>
            <a
              href='https://github.com/Junmarkchi97'
              target='_blank'
              rel='noreferrer'
              id='4'
              aria-label='github'
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/junmarkchi/'
              target='_blank'
              rel='noreferrer'
              id='5'
              aria-label='linkedin'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>
          <div className='hover-dot'></div>
          <div className='clicked'></div>
        </div>
      </section>
    </div>
  );
}

export default App;
