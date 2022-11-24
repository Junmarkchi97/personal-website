import React from "react";
import "../styles/resume.scss";

function resume() {
  return (
    <div className="resume-container">
      <a href="\Junmark Chi Resume.pdf" download="" className="resume-download">
        <i className="fa-solid fa-download"></i>
        <span>Download Resume</span>
      </a>
      <h6>OR</h6>
      <a
        className="new-tab"
        href="https://docs.google.com/document/d/e/2PACX-1vQh887q6qwAvGJvgE6eFVcD5vTMZOSB64uEIAK-wH5ecvQImyhkT2bm-aRju6IsfysQYKv42SCee6pi/pub"
        target="_blank"
      >
        Open resume on web
      </a>
    </div>
  );
}

export default resume;
