import React from "react";
import next from "../../../../assets/next.png";


export const NextArrow = (props) => {
    const {className, onClick} = props;
    return (
        <React.Fragment>
            <img id="arrow" className={className} src={next} alt="" onClick={onClick} />
        </React.Fragment>
    );
};