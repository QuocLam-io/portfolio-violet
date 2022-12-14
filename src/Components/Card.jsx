import React from "react";

const Card = ({ index, title, description, img }) => {

console.log(img)

  return (
    <div className="card-parent">
      <div className="">{title}</div>
      <div className="">{description}</div>
      <div
        className=""
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Card;
