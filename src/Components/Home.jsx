import React, { useEffect, useState } from "react";
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
        title={card.title}
        description={card.description}
        img={card.img}
        tools={card.tools}
        icons={card.icons}
        traits={card.traits}
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
          <motion.img
            whileHover={{ scale: 1.5 }}
            style={{
              background: activeTools === "" && "rgba(255, 255, 255, 0.25)",
            }}
            className="filter-btn"
            src="imgs/filter-buttons/all.svg"
            alt="All Button"
            onClick={() => {
              setActiveTools("");
            }}
          />
          <div className="divider"></div>
          <div className="filter-carousel">
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
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
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
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
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "CSS" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-css.svg"
              alt=""
              onClick={() => {
                setActiveTools("CSS");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background: activeTools === "JS" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-js.svg"
              alt=""
              onClick={() => {
                setActiveTools("JS");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "MongoDB" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-mongodb.svg"
              alt=""
              onClick={() => {
                setActiveTools("MongoDB");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "Express" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-express.svg"
              alt=""
              onClick={() => {
                setActiveTools("Express");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "React" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-react.svg"
              alt=""
              onClick={() => {
                setActiveTools("React");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "NodeJS" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-nodejs.svg"
              alt=""
              onClick={() => {
                setActiveTools("NodeJS");
              }}
            />
            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "Sass" && "rgba(255, 255, 255, 0.25)",
              }}
              className="filter-btn"
              src="imgs/filter-buttons/btn-sass.svg"
              alt=""
              onClick={() => {
                setActiveTools("Sass");
              }}
            />

            <motion.img
              whileHover={{ scale: 1.3 }}
              style={{
                background:
                  activeTools === "Framer Motion" &&
                  "rgba(255, 255, 255, 0.25)",
              }}
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
