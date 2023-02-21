import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuOn, setMenuOn }) => {
  return (
    <div className="Menu">
      <img onClick={() => setMenuOn(!menuOn)} src="imgs/close.svg" alt="" />
      <Link onClick={() => setMenuOn(!menuOn)} to="/">
        home
      </Link>
      <Link onClick={() => setMenuOn(!menuOn)} to="/about">
        about
      </Link>
      {/* <Link to="/contact">contact</Link> */}
    </div>
  );
};

export default Menu;
