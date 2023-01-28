import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <Link to="/" className="nav-menu-item">
        home
      </Link>
      <Link to="/about" className="nav-menu-item">
        about
      </Link>
      {/* <Link to="/contact" className="nav-menu-item">
            contact
          </Link> */}
    </div>
  );
};

export default Menu;
