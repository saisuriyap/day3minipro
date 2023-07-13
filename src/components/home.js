import React from "react";
import Navpage from "./navpage";
import "./home.css";
export default function Home(){
    return(
        <div className="home">
            <div className="navdiv">
                <Navpage/>
            </div>
            <div className="text">
                <h1 className="text1">WELCOME TO LINK UP </h1>
                <p className="text2"></p>
            </div>
        </div>
    )
}