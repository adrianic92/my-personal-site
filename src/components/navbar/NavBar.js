import React, {useState} from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import {FaBars, FaTimes} from "react-icons/fa"

function NavBar() {

    const [bar, setBar] = useState("")

    return (
        <div className="navbar">
            <div>
                <h1 className="site-title">Adrian Sedano</h1>
            </div>
            <nav className={bar}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button className="nav-btn nav-close-btn" onClick={() => setBar("")}>
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