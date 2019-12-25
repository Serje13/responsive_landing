import React from "react";
import NavMenu from "./components/NavMenu";
import { Logo } from "../Logo";
import MobileHeader from "./components/MobileHeader";
import { withRouter } from "react-router";


import "./index.css";

const HeaderComponent = (props) => {
    return (
        <React.Fragment>
            <div className="header" >
                <Logo />
                <NavMenu {...props} />
            </div>
            <MobileHeader {...props} />
        </React.Fragment>
    );
};

export const Header = withRouter(HeaderComponent);