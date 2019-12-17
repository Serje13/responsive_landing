import React from "react";
import "../index.css";


export const NewsItem = (props) => (
    <div className="item-container">
        <img className="carousel-image" src={props.image} alt="" />
        <div className="hidden">
            <div className="text-container">
                <p className="topic">{props.topic}</p>
                <p className="body">{props.body}</p>
                <p className="news-date">{props.date}</p>
            </div>
        </div>
    </div>
);