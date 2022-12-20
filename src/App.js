import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
