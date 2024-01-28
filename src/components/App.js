import React from "react";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import AboutMe from "./about/AboutMe";

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
    </div>
  );
}

export default App;
