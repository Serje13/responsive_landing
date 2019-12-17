import React from "react";
import Slider from "react-slick";
import {NewsItem} from "./components/NewsItem";
import {settings} from "./constants";
import {news} from "../../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";


export const News = () => (
    <section className="news-wraper">
        <p className="name">Новости</p>
        <div className="carousel-container">
            <Slider className="slider" {...settings} >
                {
                    news.map((n, i) => (
                        <div className="item" key={i}>
                            <NewsItem {...n} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
);