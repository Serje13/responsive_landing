import React from "react";
import Capabilities from "../Capabilities";
import { MobileCapabilities } from "../Capabilities/components/CapabilitiesMobile";
import { News } from "../News";
import Form from "../Form";
import "./index.css";

export const MainContainer = () => (
    <div className="main-container">
        <Capabilities />
        <MobileCapabilities />
        <News />
        <Form />
    </div>
);