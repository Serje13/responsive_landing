import React from "react";
import { news } from "./constants";
import "./index.css";


export const NewsPage = () => (
    <div className="news-page">
        {news.map((n, i) => (
            (i += 1) % 2 === 0 ? (<div className="n-item-wraper" key={i}>
                <div className="n-item">
                    <img key={i} className="n-image" src={n.image} />
                </div>
                <div className="n-item">
                    <div>
                        <p className="n-title">{n.title}</p>
                    </div>
                    <div className="n-item-content">
                        <p>{n.description}</p>
                    </div>
                </div>
            </div>) : (<div className="n-item-wraper" key={i}>
                <div className="n-item">
                    <div>
                        <p className="n-title">{n.title}</p>
                    </div>
                    <div className="n-item-content">
                        <p className="n-body-p">{n.description}</p>
                    </div>
                </div>
                <div className="n-item">
                    <img key={i} className="n-image" src={n.image} />
                </div>
            </div>)
        ))}
    </div>
);