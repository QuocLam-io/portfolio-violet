import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, img, tools, icons, traits, links }) => {
  let iconMap = icons.map((icon) => {
    return <img src={`${icon}`} alt="" className="card-icon" />;
  });

  // console.log(traits);
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
      <a href={links[0]} target="blank">
        <img className="card-img" src={`${img}`} alt="" srcset="" />
      </a>
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
              {links.length === 3 ? (
                <div className="github">
                  <a target="blank" href={links[1]}>
                    Github FE
                  </a>{" "}
                  <span>|</span>
                  <a target="blank" href={links[2]}>
                    BE
                  </a>{" "}
                  <span>|</span>
                </div>
              ) : (
                <div className="github">
                  <a target="blank" href={links[1]}>
                    Github
                  </a>{" "}
                  <span>|</span>
                </div>
              )}
              <a href={links[0]} target="blank">
                Live
                <img src="imgs/live.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
