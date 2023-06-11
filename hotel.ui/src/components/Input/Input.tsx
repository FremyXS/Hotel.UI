import React from "react";

import './Input.scss'

interface IInput {
    type? : React.HTMLInputTypeAttribute,
    value?: string,
    placeHolder?: string,
    name?: string,
    labelName?: string
}

function Input({type, value, placeHolder, name, labelName}: IInput){
    return(
        <div className="component-input">
            <div className="component-input__label">
                {labelName}
            </div>
            <input name={name} type={type} value={value} placeholder={placeHolder} />
        </div>
    );
}

export default Input;