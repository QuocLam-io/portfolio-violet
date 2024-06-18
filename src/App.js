import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBottom from "./Components/NavBottom";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuOn, setMenuOn] = useState(false);
  // const [sample, setSample] = useState(true);

  const resumeURL =
    "https://drive.google.com/file/d/17Hb9pu6C5NGrA0t-ChpEvhThRS3q3B9q/view";
    
    

  return (
    <div className="App">
      <Nav menuOn={menuOn} setMenuOn={setMenuOn} resumeURL={resumeURL} />
      {menuOn && <Menu setMenuOn={setMenuOn} menuOn={menuOn} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <NavBottom menuOn={menuOn} resumeURL={resumeURL} />
    </div>
  );
}

export default App;
