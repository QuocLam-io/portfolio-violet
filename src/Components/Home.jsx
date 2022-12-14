import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Card from "./Card";
import data from "../data.json";

const Home = () => {
  // const typedRef = useRef();

  // useEffect(() => {
  //   const typed = new Typed(typedRef.current, {
  //     strings: [
  //       "Fullstack Developer,",
  //       "Continuous Learner,",
  //       "Cat Dad,",
  //       "Fried Chicken Enthusiast",
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     backDelay: 1500,
  //     loop: true,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);


console.log(data)

  return (
    <div className="home-parent">
      <div className="home-name">
        <div className="name-titles">
          <p>Hey, I'm</p>
          <p>Quoc Lam 👋🏻</p>
          <div>
            {/* <span ref={typedRef}></span> */}
            <span>
              Fullstack Developer <span>|</span>
            </span>
          </div>
        </div>
        <div className="name-icons">
          <img src="imgs/icons/html.svg" alt="" />
          <img src="imgs/icons/css.svg" alt="" />
          <img src="imgs/icons/js.svg" alt="" />
          <img src="imgs/icons/mongodb.svg" alt="" />
          <img src="imgs/icons/express.svg" alt="" />
          <img src="imgs/icons/react.svg" alt="" />
          <img src="imgs/icons/nodejs.svg" alt="" />
          <img src="imgs/icons/framer-motion.svg" alt="" />
          <img src="imgs/icons/sass.svg" alt="" />
          <img src="imgs/icons/redux.svg" alt="" />
          <img src="imgs/icons/python.svg" alt="" />
          <img src="imgs/icons/postsql.svg" alt="" />
        </div>
      </div>
      <div className="my-projects">
        <div className="project-header">
          <p>My Projects</p>
          <img
            className="filter-btn"
            src="imgs/filter-buttons/all.svg"
            alt="All Button"
          />
          <div className="divider"></div>
          <div className="filter-carousel">
            <img className="filter-btn" src="imgs/filter-buttons/btn-html.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-css.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-js.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-mongodb.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-express.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-react.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-nodejs.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-redux.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-sass.svg" alt="" />
            {/* <img className="filter-btn" src="imgs/filter-buttons/btn-python.svg" alt="" />
            <img className="filter-btn" src="imgs/filter-buttons/btn-postsql.svg" alt="" /> */}
            <img className="filter-btn" src="imgs/filter-buttons/btn-framer-motion.svg" alt="" />

          </div>
        </div>
        <div className="project-body">
          {/* <div className="positive-place card"></div>
          <div className="macro-daddy card"></div>
          <div className="astro-boi card"></div>
          <div className="greasy-spoon card"></div> */}


        </div>
      </div>
    </div>
  );
};

export default Home;
