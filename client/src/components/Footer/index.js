import React from "react";
import image from "../../../assets/footer-image.png";
import "./index.css";


export const Footer = () => (
    <div className="footer-container">
        <div >
            <p className="footer-p">г. Днепр ул. Симферопольская</p>
            <p className="footer-p">+38 063 119 62 09</p>
        </div>
        <div className="footer-image-wraper">
            <img className="footer-image" src={image} alt="" />
        </div>
    </div>
);