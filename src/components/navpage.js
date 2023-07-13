import React from "react";
import "./navpage.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="navback">
        <nav className="nav">
            <a href="/" className="sitename">
            <img className="logo" src={logo}/>
            </a>
            <ul>
                <li>
                    <a href="/home">HOME</a>
                </li>
                <li>
                    <a href="/about"><Link to="/about">ABOUT</Link></a>
                </li>
                <li>
                    <a href="/contact">LOGIN</a>
                </li>
                <li>
                    <a href="/register">REGISTER</a>
                </li>
            </ul>
        </nav>
        </div>
    );
}