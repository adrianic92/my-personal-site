import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div>
                <h1 className="site-title">Adrian Sedano</h1>
            </div>
            <div>
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
                </ul>
            </div>
        </div>
    )
}

export default NavBar;