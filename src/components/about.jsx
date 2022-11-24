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
      <h2 className="technologies">Technologies</h2>
      <div className="technologies-logo">
        <section className="carousel-slider">
          {tech.map((t, idx) => {
            return <img src={t.src} key={idx} />;
          })}
        </section>
      </div>
      <h2 className="educations">Education</h2>
      <p>Avion School</p>
      <p>Cebu Institute of Technology - University</p>
    </div>
  );
}

export default About;
