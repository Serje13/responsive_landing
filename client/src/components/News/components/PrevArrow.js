import React from "react";
import prev from "../../../../assets/prev.png";


export const PrevArrow = (props) => {
    const {className, onClick} = props;
    return (
        <React.Fragment>
            <img id="arrow" className={className} src={prev} alt="" onClick={onClick} />
        </React.Fragment>
    );
};