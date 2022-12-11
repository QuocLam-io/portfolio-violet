import React from "react";
import Merp from "../Components/Merp";

const Nav = () => {
  return (
    <div className="nav-parent">
      <div className="nav-top">
        <div className="logo">
          <Merp />
        </div>
        <div className="nav-menu"></div>
      </div>
      <div className="nav-bottom">Hand-coded with love</div>
    </div>
  );
};

export default Nav;
