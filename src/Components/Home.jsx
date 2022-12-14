import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import Card from "./Card";
import data from "../data.json";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [activeTools, setActiveTools] = useState("");

  useEffect(() => {
    if (activeTools === "") {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((project) => {
      return project.tools.includes(activeTools);
    });
    setFilteredData(filtered);
  }, [activeTools]);

  const cardMap = filteredData.map((card, index) => {
    return (
      <Card
        index={index}
        title={card.title}
        description={card.description}
        img={card.img}
        tools={card.tools}
        icons={card.icons}
      />
    );
  });

  return (
    <div className="home-parent">
      <div className="home-name">
        <div className="name-titles">
          <p>Hey, I'm</p>
          <p>Quoc Lam 👋🏻</p>
          <div>
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
            onClick={() => {
              setActiveTools("");
            }}
          />
          <div className="divider"></div>
          <div className="filter-carousel">
            <img
              style={{
                borderRadius: "100px",
                background:
                  activeTools === "Redux" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-redux.svg"
              alt=""
              onClick={() => {
                setActiveTools("Redux");
              }}
            />
            <img
              style={{
                borderRadius: "100px",
                background:
                  activeTools === "HTML" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-html.svg"
              alt=""
              onClick={() => {
                setActiveTools("HTML");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-css.svg"
              alt=""
              onClick={() => {
                setActiveTools("CSS");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-js.svg"
              alt=""
              onClick={() => {
                setActiveTools("JS");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-mongodb.svg"
              alt=""
              onClick={() => {
                setActiveTools("MongoDB");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-express.svg"
              alt=""
              onClick={() => {
                setActiveTools("Express");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-react.svg"
              alt=""
              onClick={() => {
                setActiveTools("React");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-nodejs.svg"
              alt=""
              onClick={() => {
                setActiveTools("NodeJS");
              }}
            />
            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-sass.svg"
              alt=""
              onClick={() => {
                setActiveTools("Sass");
              }}
            />

            <img
              className="filter-btn"
              src="imgs/filter-buttons/btn-framer-motion.svg"
              alt=""
              onClick={() => {
                setActiveTools("Framer Motion");
              }}
            />
          </div>
        </div>
        <motion.div layout className="project-body">
          <AnimatePresence>{cardMap}</AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
