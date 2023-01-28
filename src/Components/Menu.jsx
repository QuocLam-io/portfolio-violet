import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuOn, setMenuOn }) => {
  return (
    <div className="Menu">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <div 
      onClick={() => setMenuOn(!menuOn)}
      className="">X</div>
    </div>
  );
};

export default Menu;
