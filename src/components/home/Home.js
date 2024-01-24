import React from "react";
import Card from "./Card";
import './Home.css';
import Highlights from "./Highlights";

function Home() {
    return (
        <div className="home">
            <Highlights />
            <Card />
        </div>
    )
}

export default Home;