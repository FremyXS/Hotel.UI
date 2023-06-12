import React, { ChangeEvent } from "react";

import './Input.scss'

interface IInput {
    type?: React.HTMLInputTypeAttribute,
    value?: string,
    placeHolder?: string,
    name?: string,
    labelName?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ type, value, placeHolder, name, labelName, onChange }: IInput) {
    return (
        <div className="component-input">
            <div className="component-input__label">
                {labelName}
            </div>
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeHolder}
                onChange={onChange} />
        </div>
    );
}

export default Input;