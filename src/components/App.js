import React from "react";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
