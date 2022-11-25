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
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="current">
          <div className="current-date">Currently</div>
          <div className="current-info">
            <div>
              Currently studying ThreeJS and Iterating on this website and
              previous projects.
            </div>
            <div className="current-post"></div>
          </div>
        </div>
        <div className="avion">
          <div className="avion-date">
            <p>7 Months</p>
            <p>March - October</p>
            <p>2022</p>
          </div>
          <div className="avion-info">
            Full-Stack Web Development - Avion School
          </div>
        </div>
        <div className="cit">
          <div className="cit-date">
            <p>5 Years</p>
          </div>
          <div className="cit-info">
            BS Electrical Engineering - Cebu Institute of Technology-University
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
