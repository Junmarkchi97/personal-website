import React from "react";
import "../styles/about.scss";

function about() {
  return (
    <div className="about-container">
      <h3>
        I'm<span>Junmark !</span>
      </h3>
      <h3>
        Creative and Responsible Web Developer based in Molave, Philippines. I help companies solve problems and develop websites with
        clean UI/UX.
      </h3>
      <p>
        My current techstack involves working with ReactJS and Rails.
      </p>
      <h3>
        Currently, I'm 
      </h3>
      <h2 className="technologies">Technologies</h2>
      <div className="technologies-logo">
        <i className="fa-brands fa-square-js"></i>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>
        <i className="fa-brands fa-npm"></i>
        <i className="fa-brands fa-github"></i>
      </div>
      <h2 className="educations">Education</h2>
      <p>Avion School</p>
      <p>Cebu Institute of Technology - University</p>
    </div>
  );
}

export default about;
