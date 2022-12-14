import React from "react";

const Card = ({ index, title, description, img, tools, icons }) => {

let iconMap = icons.map((icon, index) => {
    return (
      <img
        key={index}
        src={`${icon}`}
        alt=""
        className="card-icon"
      />
    );
})

console.log(icons)

  return (
    <div className="card-parent">
      <img className="card-img" src={`${img}`} alt="" srcset="" />
      <div className="">{title}</div>
      <div className="">{description}</div>
      <div className="">{iconMap}</div>
    </div>
  );
};

export default Card;
