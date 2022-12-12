import React from "react";
import Merp from "../Components/Merp";

const Nav = () => {
  return (
    <div className="nav-parent">
      <div className="nav-top">
        <div className="logo">
          <Merp />
          <div className="logo-right"></div>
        </div>
        <div className="nav-menu"></div>
      </div>
      <div className="nav-bottom">
        <p>Hand-coded with love</p>
        <img src="imgs/hollow-heart.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Nav;
