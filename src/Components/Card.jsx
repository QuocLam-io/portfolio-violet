import React from "react";
import { motion } from "framer-motion";

const Card = ({ index, title, description, img, tools, icons }) => {
  let iconMap = icons.map((icon, index) => {
    return <img key={index} src={`${icon}`} alt="" className="card-icon" />;
  });

  console.log(icons);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="card-parent"
    >
      <img className="card-img" src={`${img}`} alt="" srcset="" />
      <div className="">{title}</div>
      <div className="">{description}</div>
      <div className="">
        <div className="card-icons">{iconMap}</div>
        <div className="card-links"></div>
      </div>
    </motion.div>
  );
};

export default Card;
