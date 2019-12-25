import React from "react";
import { hidden_menu_items } from "../Header/components/NavMenu/constants";
import Form from "../Form";
import "./index.css";


export const Vacancy = (props) => {
    return (
        <React.Fragment>
            <div className="vacancy-page">
                {hidden_menu_items.map((c, i) => (
                    c.id.toString() === props.match.params.id.toString() ? (<React.Fragment key={i}>
                        {window.innerWidth > 1024 ?
                            (<div className="vac-item">
                                {c.image.map((image, i) => (
                                    <img key={i} className="vac-image" src={image} />
                                ))}
                            </div>) : (<div className="vac-item">
                                <img key={i} className="vac-image" src={c.image[0]} />
                            </div>)}
                        <div className="vac-item">
                            <div>
                                <p className="vac-title">{c.title}</p>
                            </div>
                            <div className="vac-item-content">
                                {c.description.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <p className="item-description-topic">{item.title}</p>
                                        <p className="vacancy-body-p">{item.body}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>) : (null)
                ))}

            </div>
            <Form />
        </React.Fragment>
    );
};