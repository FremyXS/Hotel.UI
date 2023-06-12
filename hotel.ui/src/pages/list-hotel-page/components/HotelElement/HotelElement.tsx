import React from "react";
import { HotelType } from "../../../../types";

import './HotelElement.scss'
import StarRating from "../../../../components/StarRating/StarRating";
import Button from "../../../../components/Button/Button";
import Slider from "../../../../components/Slider/Slider";

function HotelElement({ data }: { data: HotelType }) {
    return (
        <div className="hotel-element">
            <div className="hotel-element__preview">
                <Slider imgUrl={data.photos}/>
            </div>
            <div className="hotel-element__info">
                <StarRating value={data.rating} />
                <div className="hotel-element__name">
                    {data.name}
                </div>
                <div className="hotel-element__number-rooms">
                    Кол-во свободных номеров: <span>{data.numberRoomsAvailable}</span>
                </div>
                <div className="hotel-element__price">
                    <p>От <span>{data.minCost} руб.</span></p>
                    <Button type="button">Подробнее</Button>
                </div>
            </div>
        </div>
    );
}

export default HotelElement;