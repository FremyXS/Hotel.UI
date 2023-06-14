import React from "react";

import { HotelRoomTariffType } from "../../../../types";
import './HotelDeatailsRoomTariff.scss';
import Button from '../../../../components/Button/Button';

function HotelDeatailsRoomTariff({ data }: { data: HotelRoomTariffType }) {
    return (
        <div className="hotel-deatails-room__tariff">
            <div className="hotel-deatails-room__tariff-tags">
                {data.tags.map((el, index) =>
                    <span key={`tag ${index}`}>{el}</span>
                )}
            </div>
            <div className="hotel-deatails-room__tariff-price">
                {data.price} руб.
            </div>
            <Button type="button">
                Забронировать
            </Button>
        </div>
    );
}

export default HotelDeatailsRoomTariff;