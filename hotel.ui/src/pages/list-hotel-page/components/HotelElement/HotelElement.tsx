import React from "react";
import { HotelType } from "../../../../types";

import './HotelElement.scss'
import StarRating from "../../../../components/StarRating/StarRating";

function HotelElement({ data }: { data: HotelType }) {
    return (
        <div className="hotel-element">
            <div className="hotel-element__preview"></div>
            <div className="hotel-element__info">
                <StarRating value={data.rating} />
                <div className="hotel-element__name">
                    {data.name}
                </div>
                <div className="hotel-element__number-rooms">
                    Кол-во свободных номеров: <span>{data.numberRoomsAvailable}</span>
                </div>
                <div className="hotel-element__price">
                    От <span>{data.minCost}</span>
                </div>
            </div>
        </div>
    );
}

export default HotelElement;