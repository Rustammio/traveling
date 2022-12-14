import React from "react";
import "../../App.css";
import Button from "../Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btnOutline"
                    buttonSize="btnLarge"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btnPrimary"
                    buttonSize="btnLarge"
                >
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
