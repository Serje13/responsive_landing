import React from "react";
import close from "../../../../../assets/X.png";
import popImg from "../../../../../assets/logo.png";
import {Modal} from "./components/Modal";
import {navigate_links, hidden_menu_items} from "./constants";
import {Menu} from "./components/HiddenMenu";
import "./index.css";


export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isMenuOpened: false
        };
    }

    openMenu = () => {
        this.setState({isMenuOpened: true});
        const elements = document.getElementsByClassName("block");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
    closeMenu = () => {
        this.setState({isMenuOpened: false});
        const elements = document.getElementsByClassName("block");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }
    render() {
        const showHide = this.state.open;
        const showHideMenu = this.state.isMenuOpened;
        return (
            <div className="menu" >
                <div className="item-wraper">
                    {navigate_links.map((l, i) => (
                        l.title === "Вакансии" ?
                            (<div key={i} className="menu-item-container">
                                <div key={i} className="menu-item" onMouseEnter={this.openMenu} >{l.title}</div >
                                {showHideMenu && <div className="hidden-list" onMouseLeave={this.closeMenu}>
                                    <Menu items={hidden_menu_items} />
                                </div>}
                            </div>) : (<div key={i} className="menu-item">{l.title}</div>)
                    ))}
                </div>
                <button className="head-but" onClick={this.toggleModal}>Контакты</button>
                {showHide && <div className="modal">
                    <Modal hideIcon={close} logoImage={popImg} hide={this.toggleModal} />
                </div>}
            </div >
        );
    }
}
