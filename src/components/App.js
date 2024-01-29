import React from "react";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import AboutMe from "./about/AboutMe";
import Projects from "./projects/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutMe />}/>
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
