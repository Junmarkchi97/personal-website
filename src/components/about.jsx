import React, { useState } from "react";
import "../styles/about.scss";

function About() {
  const [tech, setTech] = useState([
    { src: "technologies/bootstrap.png" },
    { src: "technologies/canva.png" },
    { src: "technologies/css.png" },
    { src: "technologies/git.png" },
    { src: "technologies/github.png" },
    { src: "technologies/html.png" },
    { src: "technologies/insomnia.png" },
    { src: "technologies/javascript.png" },
    { src: "technologies/mysql.png" },
    { src: "technologies/netlify.png" },
    { src: "technologies/node.png" },
    { src: "technologies/postgresql.png" },
    { src: "technologies/postman.png" },
    { src: "technologies/rails.png" },
    { src: "technologies/react.png" },
    { src: "technologies/ruby.png" },
    { src: "technologies/sass.png" },
    { src: "technologies/tailwind.png" },
    { src: "technologies/typescript.png" },
    { src: "technologies/vscode.png" },
  ]);

  return (
    <div className="about-container">
      <h3>
        I'm<span>Junmark !</span>
      </h3>
      <h3>
        Creative and Responsible Web Developer based in Philippines. I help
        clients develop websites from the ground up.
      </h3>
      <h2 className="technology-title">Technologies</h2>
      <div className="technologies-logo">
        <section className="carousel-slider">
          {tech.map((t, idx) => {
            return <img src={t.src} key={idx} />;
          })}
        </section>
      </div>
      <div className="timeline-container">
        <h2 className="timeline-title">Timeline</h2>
        <div className="current">
          <div className="current-date">Currently</div>
          <div className="current-info">
            <div>
              Currently exploring ThreeJS and Iterating on this website and
              previous projects.
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
                  <i class="fa-brands fa-linkedin"></i>
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
        <div className="avion">
          <div className="avion-date">
            <p>7 Months</p>
            <p>March - October</p>
            <p>2022</p>
          </div>
          <div className="avion-info">
            <div>
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
                  <i class="fa-brands fa-linkedin"></i>
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
        <div className="cit">
          <div className="cit-date">
            <p>5 Years</p>
            <p>2014 - 2019</p>
          </div>
          <div className="cit-info">
            <div>
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
                <i class="fa-brands fa-linkedin"></i>
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
