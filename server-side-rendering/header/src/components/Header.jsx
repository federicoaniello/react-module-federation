import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
export default function Header (){

    return (
        <nav>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}