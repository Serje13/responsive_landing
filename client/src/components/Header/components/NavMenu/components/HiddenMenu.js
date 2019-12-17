import React from "react";
import "../index.css";

export const Menu = (props) => {
    return (
        <div className="ul-container">
            {props.items.map((item, i) => (
                <div key={i} className="list-item">{item.title}</div>
            ))}
        </div>
    );
};