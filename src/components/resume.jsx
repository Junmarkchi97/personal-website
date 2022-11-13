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
        href="https://docs.google.com/document/d/e/2PACX-1vRPBN0Eah0MDDBLH-J11n_RZ-A8lDJ4Tn9A0kqqEVeFkrx_bFQIuEOUQo24KqkZVKYRnt9SSKJe0x9p/pub"
        target="_blank"
      >
        Open resume on web
      </a>
    </div>
  );
}

export default resume;
