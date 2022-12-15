import React from "react";
import Merp from "../Components/Merp";

const Nav = () => {
  return (
    <div className="nav-parent">
      <div className="nav-top">
        <div className="logo">
          <Merp />
          <div className="logo-right">
            <div className="">Quoc</div>
            <div className="">Software Engineer</div>
          </div>
        </div>
        <div className="nav-menu">
          <a href="" alt="" className="nav-menu-item">
            home
          </a>
          <a href="" alt="" className="nav-menu-item">
            about
          </a>
          <a href="" alt="" className="nav-menu-item">
            projects
          </a>
          <a href="" alt="" className="nav-menu-item">
            contact
          </a>

          <div className="nav-menu-icons">
            <a 
            target="blank"
            href="https://drive.google.com/file/d/1eE17fs9PG9PK43dH9hFreuecMyLa6TAj/view?usp=sharing">
              <img src="imgs/resume.svg" alt="Resume Button" />
            </a>

            <div>
              <a href="https://github.com/QuocLam-io"
                target="blank">
                <img src="imgs/github.svg" alt="Github Button" />
              </a>
              <a href="https://www.linkedin.com/in/lam-quoc/" target="#">
                <img src="imgs/linkedin.svg" alt="LinkedIn Button" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <p>Hand-coded with love</p>
        <img
       
          src="imgs/hollow-heart.svg"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Nav;
