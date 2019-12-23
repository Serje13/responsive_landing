import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./index.css";


export const Logo = () => {
    return (
        <Link to="/" className="link-style" >
            <div className="logo" >
                <img src={logo} />
            </div>
        </Link>
    );
};