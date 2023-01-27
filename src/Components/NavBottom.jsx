import React from "react";

const NavBottom = ({resumeURL, menuOn}) => {
  return (
    <div className="nav-bottom-parent"
    {...menuOn && {style: {background: "rgba(0, 3, 77, 0.8)", borderTop: "none"}}}
    >
      {/* <div> */}
      <a href="https://github.com/QuocLam-io" target="blank">
        <img src="imgs/github.svg" alt="Github Button" />
      </a>
      <a
        className="nb-resume"
        target="blank"
        href={resumeURL}
      >
        {/* <div className="nb-resume"> */}
        <p>RESUME</p>
        <img src="imgs/resume-nb.svg" alt="" srcset="" />
        {/* </div> */}
      </a>
      <a href="https://www.linkedin.com/in/lam-quoc/" target="#">
        <img src="imgs/linkedin.svg" alt="LinkedIn Button" />
      </a>
      {/* </div> */}
    </div>
  );
};

export default NavBottom;
