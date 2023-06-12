import React, { useState } from "react";

import './SwitchGuests.scss'

interface ISwitchGuests {
    data: {
        adults: number,
        childrens: {
            age: number
        }[]
    },
    labelName?: string
}

function SwitchGuests({ data, labelName }: ISwitchGuests) {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [guests, setGuests] = useState(data);

    return (
        <div className="components-switch-guests">
            <div className="components-switch-guests__label">
                {labelName}
            </div>
            <button type="button" onClick={() => setIsClick(!isClick)}>
                {guests.adults + guests.childrens.length}
            </button>
            <div className={`components-switch-guests__list ${isClick ? 'active' : ''}`}>
                <section className="components-switch-guests__list-adults">
                    <div className="components-switch-guests__list-value">
                        Взрослые
                    </div>
                    <div className="components-switch-guests__list-adults__settings">
                        <button type="button"
                            onClick={() => setGuests({
                                ...guests,
                                adults: guests.adults - 1
                            })}
                        >-</button>
                        {guests.adults}
                        <button type="button"
                            onClick={() => setGuests({
                                ...guests,
                                adults: guests.adults + 1
                            })}
                        >+</button>
                    </div>
                </section>
                <section className="components-switch-guests__list-childrens">
                    <div className="components-switch-guests__list-value">
                        Дети:
                    </div>
                    <div>
                        {guests.childrens.map((el, index) => 
                            <div key={index}>Возраст: {el.age}</div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SwitchGuests;