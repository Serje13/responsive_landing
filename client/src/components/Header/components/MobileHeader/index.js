import React from "react";
import MobileMenu from "../MobileMenu";
import burger from "../../../../../assets/burger.png";
import logo from "../../../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./index.css";


export default class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
            isBurgerShow: true
        };
    }
    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpened: !prevState.isMenuOpened,
            isBurgerShow: !prevState.isBurgerShow
        }));
    }
    render() {
        const { isMenuOpened, isBurgerShow } = this.state;
        return (
            <div className="mobile-header-wraper">
                <div className="images-vraper">
                    {isBurgerShow && <div className="mobile-heder">
                        <Link to="/" className="link-style">
                            <img className="mobile-logo-img" src={logo} />
                        </Link>
                        <div className="burger">
                            <img className="burger-image" src={burger} onClick={this.toggleMenu} />
                        </div>
                    </div>}
                    {isMenuOpened && <div className="mobile-menu-container"><MobileMenu closeMenu={this.toggleMenu} {...this.props} /></div>}
                </div>
            </div>
        );
    }
}