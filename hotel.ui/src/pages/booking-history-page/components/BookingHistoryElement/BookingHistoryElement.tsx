import React from "react";

import './BookingHistoryElement.scss';
import { BookingHistory } from "../../../../types";

function BookingHistoryElement({data}:{data: BookingHistory}){
    return(
        <div className="booking-history-element">
            <div className="booking-history-element__hotelname title">
                {data.name}
            </div>
            <div className="booking-history-element__address subtitle">
                {data.address}
            </div>
            <div className="booking-history-element__room title">
                {data.room.name}
            </div>
            <div className="booking-history-element__price">
                {`${data.room.price} руб.`}
            </div>
            <div className="booking-history-element__status">
                {data.status}
            </div>
        </div>
    )
}

export default BookingHistoryElement;