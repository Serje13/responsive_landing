import React from "react";
import NavMenu from "./components/NavMenu";
import {Logo} from "../Logo";
import MobileHeader from "./components/MobileHeader";


import "./index.css";

export const Header = (props) => {
    return (
        <React.Fragment>
            <div className="header" >
                <Logo />
                <NavMenu {...props} />
            </div>
            <MobileHeader />
        </React.Fragment>
    );
};
