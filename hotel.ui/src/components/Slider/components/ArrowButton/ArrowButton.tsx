import React from "react";
import { ReactComponent as ArrowIcon } from "../../../../templates/icons/arrow.svg";
import './ArrowButton.scss';

function ArrowButton({type, onClick}:{type: "left" | "right", onClick?: ()=>void}){
    return(
        <div className={`component-arrow-button ${type}`}>
            <button type="button" onClick={onClick}></button>
        </div>
    );
}

export default ArrowButton;