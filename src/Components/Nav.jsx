import React from "react";
import { Link } from "react-router-dom";
import Merp from "../Components/Merp";
import Menu from "../Components/Menu";

const Nav = ({ menuOn, setMenuOn, resumeURL }) => {


  return (
    <div className="nav-parent">
      <div className="nav-top">
      {/* {menuOn && <Menu setMenuOn={setMenuOn} menuOn={menuOn} />} */}

        <Link to="/" className="logo">
          <Merp />
          <div className="logo-right">
            <div className="">Quoc</div>
            <div className="">Software Engineer</div>
          </div>
          <div
            className={`hamburger
          ${menuOn && "menu-active"}`}
            onClick={() => setMenuOn(!menuOn)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-menu-item">
            home
          </Link>
          <Link to="/about" className="nav-menu-item">
            about
          </Link>


          <div className="nav-menu-icons">
            <a target="blank" href={resumeURL}>
              <img src="imgs/resume.svg" alt="Resume Button" />
            </a>

            <div>
              <a href="https://github.com/QuocLam-io" target="blank">
                <img src="imgs/github.svg" alt="Github Button" />
              </a>
              <a href="https://www.linkedin.com/in/lam-quoc/" target="#">
                <img src="imgs/linkedin.svg" alt="LinkedIn Button" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* {menuOn && <Menu/>} */}
      <div className="nav-bottom">
        <p>Hand-coded with love</p>
        <img src="imgs/hollow-heart.svg" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Nav;
