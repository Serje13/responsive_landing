import React from "react";
import {AccordionComponent} from "./components/Accordion";
import map_image from "../../../../../assets/map-desctop3.png";
import map_big_image from "../../../../../assets/map-desctop2.png";
import "./index.css";

export const MobileCapabilities = () => {
    return (
        <div className="mobile-capabilities-wraper">
            <div className="capab-content">
                <div className="img-wr">
                    <img className="map-mobile-image" src={map_image} />
                    <img className="map-big-image" src={map_big_image} />
                </div>
                <AccordionComponent />
            </div>
        </div>
    );
};