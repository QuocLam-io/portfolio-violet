import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuOn, setMenuOn }) => {
  return (
    <div className="Menu">
      <img onClick={() => setMenuOn(!menuOn)} src="imgs/close.svg" alt="" />
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Menu;
