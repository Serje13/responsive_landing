import React from "react";
import {Header} from "./components/Header";
import Capabilities from "./components/Capabilities";
import {MobileCapabilities} from "./components/Capabilities/components/CapabilitiesMobile";
import {News} from "./components/News";
import Form from "./components/Form";
import {Footer} from "./components/Footer";

export const App = () => (
    <div className="app">
        <Header />
        <Capabilities />
        <MobileCapabilities />
        <News />
        <Form />
        <Footer />
    </div>
);
