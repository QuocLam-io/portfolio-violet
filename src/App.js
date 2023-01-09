import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBottom from "./Components/NavBottom";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";

function App() {

  const [menuOn, setMenuOn] = useState(false);

  return (
    <div className="App">
      <Nav 
      menuOn={menuOn}
      setMenuOn={setMenuOn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Menu /> */}
      <NavBottom />
    </div>
  );
}

export default App;
