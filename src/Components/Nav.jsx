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
          <div className="nav-menu-item">home</div>
          <div className="nav-menu-item">about</div>
          <div className="nav-menu-item">projects</div>
          <div className="nav-menu-item">contact</div>

          <div className="nav-menu-icons">
            <a href="">
              <img src="imgs/resume.svg" alt="Resume Button" />
            </a>

            <div>
              <a href="">
                <img src="imgs/github.svg" alt="Github Button" />
              </a>
              <a href="">
                <img src="imgs/linkedin.svg" alt="LinkedIn Button" />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <p>Hand-coded with love</p>
        <img src="imgs/hollow-heart.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Nav;
