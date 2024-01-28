import React from "react";
import Card from "./Card";
import './Home.css';
import Highlights from "./Highlights";
import Socials from "./Socials";

function Home() {
    return (
        <div className="home">
            <div className="first">
                <Highlights />
                <Card />
            </div>
            <div className="second">
                <Socials />
            </div>
        </div>
    )
}

export default Home;