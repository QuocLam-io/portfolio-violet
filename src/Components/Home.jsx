import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

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

  return (
    <div className="home-parent">
      <div className="home-name">
        <div className="name-titles">
          <p>Hey, I'm</p>
          <p>Quoc Lam 👋🏻</p>
          <div>
            {/* <span ref={typedRef}></span> */}
            <span>Fullstack Developer</span>
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
          <p>Add Redux</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
