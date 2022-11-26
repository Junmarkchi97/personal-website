import React, { useState, useRef, useEffect } from "react";
import "../styles/about.scss";

function About() {
  const aboutContainer = useRef(null);
  const posts = useRef([]);
  const [tech, setTech] = useState([
    // { src: "technologies/bootstrap.png" },
    // { src: "technologies/canva.png" },
    // { src: "technologies/git.png" },
    // { src: "technologies/insomnia.png" },
    { src: "technologies/tailwind.png" },
    { src: "technologies/javascript.png" },
    { src: "technologies/typescript.png" },
    { src: "technologies/react.png" },
    { src: "technologies/html.png" },
    { src: "technologies/css.png" },
    { src: "technologies/sass.png" },
    // { src: "technologies/mysql.png" },
    // { src: "technologies/netlify.png" },
    // { src: "technologies/node.png" },
    // { src: "technologies/postgresql.png" },
    // { src: "technologies/postman.png" },
    { src: "technologies/rails.png" },
    { src: "technologies/ruby.png" },
    { src: "technologies/github.png" },
    // { src: "technologies/vscode.png" },
  ]);

  useEffect(() => {
    // aboutContainer.current.scrollTop(0);
  }, []);

  const handleOnScrollAbout = () => {
    const scrollValue = aboutContainer.current.scrollTop;
    const maxVal =
      aboutContainer.current.scrollHeight - aboutContainer.current.clientHeight;

    if (scrollValue <= maxVal * 0.5) {
      posts.current[0].style.opacity = "1";
      posts.current[1].style.opacity = "0.4";
      posts.current[2].style.opacity = "0.4";
    } else if (scrollValue <= maxVal * 0.95 && scrollValue >= maxVal * 0.5) {
      posts.current[0].style.opacity = "0.4";
      posts.current[1].style.opacity = "1";
      posts.current[2].style.opacity = "0.4";
    } else {
      posts.current[0].style.opacity = "0.4";
      posts.current[1].style.opacity = "0.4";
      posts.current[2].style.opacity = "1";
    }
  };

  return (
    <div
      className="about-container"
      ref={aboutContainer}
      onScroll={handleOnScrollAbout}
    >
      <div className="container about-intro">
        <h3>
          Hello, I'm<span>Junmark !</span>
        </h3>
        <h3>
          Creative and Responsible Web Developer based in Philippines. I help
          clients develop websites from the ground up with clean UI/UX.
        </h3>
      </div>
      <div className="container technology-container">
        <h2 className="technology-title">Technologies</h2>
        <div className="technologies-logo">
          <section className="carousel-slider">
            <div className="image-container">
              {tech.map((t, idx) => {
                return <img src={t.src} key={idx} />;
              })}
            </div>
            <div className="image-container">
              {tech.map((t, idx) => {
                return <img src={t.src} key={idx} />;
              })}
            </div>
          </section>
        </div>
      </div>
      <div className="container timeline-container">
        <h2 className="timeline-title">Timeline</h2>
        <div className="current" ref={(e) => (posts.current[0] = e)}>
          <div className="current-date">Currently</div>
          <div className="current-info">
            <div className="current-caption">
              Exploring ThreeJS and Iterating this website and previous
              projects.
            </div>
            <div className="current-post">
              <div className="post-header">
                <div className="header-profile">
                  <a
                    href="https://www.linkedin.com/posts/junmarkchi_threejs-learningeveryday-activity-6994239516475617280-U1nv?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                  >
                    <img src="profile.jpg" />
                  </a>
                  <div className="profile-details">
                    <span>Junmark Chi</span>
                    <span>Web Developer | ReactJS | Ruby on Rails</span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/posts/junmarkchi_threejs-learningeveryday-activity-6994239516475617280-U1nv?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <p className="post-caption">
                I just started my journey into learning Three.js. I've always
                been curious about how those excellent 3D websites are made....
              </p>
              <img src="post/current.png" className="post-image" />
              <div className="post-footer"></div>
            </div>
          </div>
        </div>
        <div className="avion" ref={(e) => (posts.current[1] = e)}>
          <div className="avion-date">
            <p>7 Months</p>
            <p>March - October</p>
            <p>2022</p>
          </div>
          <div className="avion-info">
            <div className="avion-caption">
              Finished a Full-Stack Web Development Course from Avion School
              Bootcamp
            </div>
            <div className="avion-post">
              <div className="post-header">
                <div className="header-profile">
                  <a
                    href="https://www.linkedin.com/posts/junmarkchi_webdevelopment-fullstackdeveloper-bootcamp-activity-6992478042619031552-kdtL?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                  >
                    <img src="profile.jpg" />
                  </a>
                  <div className="profile-details">
                    <span>Junmark Chi</span>
                    <span>Web Developer | ReactJS | Ruby on Rails</span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/posts/junmarkchi_webdevelopment-fullstackdeveloper-bootcamp-activity-6992478042619031552-kdtL?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <p className="post-caption">
                I'm happy to share that I've obtained a Certificate of
                Completion for Full Stack Web Development from Avion School!
              </p>
              <img src="post/avion.jpg" className="post-image" />
              <div className="post-footer"></div>
            </div>
          </div>
        </div>
        <div className="cit" ref={(e) => (posts.current[2] = e)}>
          <div className="cit-date">
            <p>5 Years</p>
            <p>2014 - 2019</p>
          </div>
          <div className="cit-info">
            <div className="cit-caption">
              Graduated from college with a BS Electrical Engineering Diploma
              from Cebu Institute of Technology-University
            </div>
            <div className="cit-post">
              <div className="post-header">
                <div className="header-profile">
                  <img src="school.png" />
                  <div className="profile-details">
                    <span>Cebu Institute of Technology-University</span>
                    <span>A top academic institution continuously...</span>
                  </div>
                </div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <img src="post/cit.jpg" className="post-image" />
              <div className="post-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
