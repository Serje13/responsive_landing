import React from "react";
import { about } from "./constants";
import "./index.css";


export const About = () => (
    <div className="about-page">
        <div className="about-topic">About Us</div>
        <div className="about-content-container">
            {about.map((item, i) => (
                <div key={i}>
                    <p>{item.title}</p>
                    <p className="about-content-p">{item.body}</p>
                </div>
            ))}
        </div>
    </div>
);