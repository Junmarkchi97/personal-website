import React from "react";
import "../styles/resume.scss";

function resume() {
  return (
    <div className="resume-container">
      <button className="resume-download">
        <i className="fa-solid fa-download"></i>
        <span>Download Resume</span>
      </button>
      <h6>OR</h6>
      <a
        href="https://drive.google.com/file/d/1Yx7b89xh5c9q3ONWMV72HiUGrh6MgyCO/view?usp=sharing"
        target="_blank"
      >
        Open resume on web
      </a>
    </div>
  );
}

export default resume;
