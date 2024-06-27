import React from "react";
import * as classes from "./Header.module.scss";
import { Link } from "react-router-dom";
export default function Header (){

    return (
        <nav>
            <ul className={classes.nav}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}