import React from "react";
import close_but from "../../../../../assets/burger-close.png";
import {navigate_links} from "../NavMenu/constants";
import {Modal} from "../NavMenu/components/Modal";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import close from "../../../../../assets/X.png";
import popImg from "../../../../../assets/logo.png";
import {hidden_menu_items} from "../NavMenu/constants";
import "./index.css";

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
            isModalOpened: false,
        };
    }

    toggleItself = () => {
        this.props.closeMenu();
    }
    toggleModal = () => {
        this.setState(prevState => ({
            isModalOpened: !prevState.isModalOpened
        }));
    }
    render() {
        const {isModalOpened} = this.state;
        return (
            <div className="mobile-menu-wraper" >
                <div className="mobile-menu-image-wraper">
                    <img className="mobile-menu-close-button" src={close_but} onClick={this.toggleItself} />
                </div>
                <div className="links-wraper">
                    {navigate_links.map((link, i) => (
                        link.title === "Новости" ? (<Accordion key={i} allowZeroExpanded={true} >
                            <AccordionItem>
                                <AccordionItemHeading >
                                    <AccordionItemButton className="my-class-button-menu">
                                        {link.title}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="acc-panel-menu" >
                                    <div className="item-link-content-wr">
                                        {hidden_menu_items.map((item, i) => (
                                            <div className="p-item-content" key={i}>
                                                {item.title}
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>) :
                            (<div className="link" key={i}>{link.title}</div>)
                    ))}
                </div>
                <div>
                    <button className="head-but" onClick={this.toggleModal}>Контакты</button>
                </div>
                {isModalOpened && <div className="modal"><Modal hideIcon={close} logoImage={popImg} hide={this.toggleModal} /></div>}
            </div>

        );
    }
}