import React from "react";
import "../index.css";

export const Modal = (props) => {
    return (
        <div className="modal-main">
            <div className="modal-close-wraper" >
                <img className="modal-topic-close" src={props.hideIcon} onClick={props.hide} />
            </div>
            <div className="modal-topic-value" >
                Контакты
            </div>
            <div className="modal-p-wraper">
                <p className="modal-p-body">г. Днепр ул. Улица</p>
                <p className="modal-p-body">+38 099 999 99 99</p>
            </div>
            <div className="modal-logo-wraper">
                <img className="modal-logo" src={props.logoImage} />
            </div>
        </div>
    );
};