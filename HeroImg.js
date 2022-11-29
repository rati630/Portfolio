import "./HeroImgStyle.css";

import React from "react";
import IntroImg from "../assets/intro-bg1.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi,I'm Rati Sonkar</p>
            <h1>Welcome to my Website</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg