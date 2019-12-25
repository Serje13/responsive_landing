import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Menu = (props) => {
    return (
        <div className="ul-container">
            {props.items.map((item, i) => (
                <Link id={item.id} key={i} to={`/vacancy/${item.id}`} className="link-style">
                    <div key={i} className={props.location.pathname === `/vacancy/${item.id}` ? "active-list-item" : "list-item"}>{item.title}</div>
                </Link>
            ))}
        </div>
    );
};