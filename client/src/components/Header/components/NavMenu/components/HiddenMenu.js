import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Menu = (props) => {
    return (
        <div className="ul-container">
            {props.items.map((item, i) => (
                <Link key={i} to={`/vacancy/${item.id}`} className="link-style" {...props}>
                    <div key={i} className="list-item">{item.title}</div>
                </Link>
            ))}
        </div>
    );
};