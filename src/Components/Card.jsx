import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, img, tools, icons, traits }) => {
  let iconMap = icons.map((icon) => {
    return <img src={`${icon}`} alt="" className="card-icon" />;
  });

  console.log(traits);
  let traitsMap = traits.map((trait) => {
    return <img src={`${trait}`} alt="" />;
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      className="card-parent"
    >
      <img className="card-img" src={`${img}`} alt="" srcset="" />
      <div className="card-bottom">
        <div className="card-header">
          <div className="project-title">{title}</div>
          <div className="project-traits">{traitsMap}</div>
        </div>
        <div className="project-description">{description}</div>
        <div className="">
          <div className="card-end">
            <div className="card-icons">{iconMap}</div>
            <div className="card-links">
              <a href="">Github</a>
              <a href="">Live
              {/* <img src="imgs/live.svg" alt="" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
