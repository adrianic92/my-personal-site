import React, {useState} from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import {FaBars, FaTimes} from "react-icons/fa"

function NavBar() {

    const [bar, setBar] = useState("")

    function hider() {
        setBar("")
    }

    return (
        <div className="navbar">
            <div>
                <h1 className="site-title">Adrian Sedano</h1>
            </div>
            <nav className={bar}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => hider()}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => hider()}>About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => hider()}>Projects</Link>
                    </li>
                    <button className="nav-btn nav-close-btn" onClick={() => hider()}>
                        <FaTimes/>
                    </button>
                </ul>
            </nav>
            <div>
                <button className="nav-btn" onClick={() => setBar("responsive_nav")}>
                    <FaBars />
                </button>
            </div>
        </div>
    )
}

export default NavBar;