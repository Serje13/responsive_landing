import React from "react";
import close_but from "../../../../../assets/burger-close.png";
import { navigate_links } from "../NavMenu/constants";
import { Modal } from "../NavMenu/components/Modal";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import close from "../../../../../assets/X.png";
import popImg from "../../../../../assets/logo.png";
import { hidden_menu_items } from "../NavMenu/constants";
import { Link } from "react-router-dom";
import "./index.css";

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
            isModalOpened: false,
            buttonStatus: false,
        };
    }

    toggleItself = () => {
        this.props.closeMenu();
    }
    toggleModal = () => {
        this.setState(prevState => ({
            isModalOpened: !prevState.isModalOpened,
        }));
    }
    toggleButtonStatus = () => {
        this.setState(prevState => ({
            buttonStatus: !prevState.buttonStatus,
        }));
    }
    render() {
        const { isModalOpened, buttonStatus } = this.state;
        return (
            <div className="mobile-menu-wraper" >
                <div className="mobile-menu-image-wraper">
                    <img className="mobile-menu-close-button" src={close_but} onClick={this.toggleItself} />
                </div>
                <div className="links-wraper">
                    {navigate_links.map((link, i) => (
                        link.title === "Вакансии" ? (<Accordion key={i} onChange={this.toggleButtonStatus}>
                            <AccordionItem uuid={`${true}`}>
                                <AccordionItemHeading >
                                    <AccordionItemButton className={buttonStatus === true ? "my-class-button-menu-click" : "my-class-button-menu"}>
                                        {link.title}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="acc-panel-menu">
                                    <div className="item-link-content-wr">
                                        {hidden_menu_items.map((item, i) => (
                                            <Link key={i} to={`/vacancy/${item.id}`} className="link-style" onClick={this.toggleItself}>
                                                <div className={this.props.location.pathname === `/vacancy/${item.id}` ? "p-item-content-active" : "p-item-content"} key={i}>
                                                    {item.title}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>) :
                            (<Link key={i} to={link.link} className="link-style" onClick={this.toggleItself}><div className={this.props.location.pathname === link.link ? "link-active-mob" : "link"} key={i}>{link.title}</div></Link>)
                    ))}
                </div>
                <div>
                    <button className="head-but" onClick={this.toggleModal}>Контакты</button>
                </div>
                {isModalOpened && <div className="modal"><Modal hideIcon={close} logoImage={popImg} hide={this.toggleModal} /></div>}
            </div >

        );
    }
}