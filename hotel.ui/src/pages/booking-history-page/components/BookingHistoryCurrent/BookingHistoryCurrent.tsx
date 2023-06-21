import React from "react";

import './BookingHistoryCurrent.scss'
import { BookingHistory } from "../../../../types";
import Button from "../../../../components/Button/Button";

enum BookingCurrentStatus{
    canСanceled = "Можно отменить",
    cannotUndone = "Нельзя отменить"
}

interface IBookingHistoryCurrent {
    data: BookingHistory,
    onClickCancelReservation: () => void,
    onClickCallCleaningService: () => void
}

function BookingHistoryCurrent({ data, onClickCancelReservation, onClickCallCleaningService}: IBookingHistoryCurrent) {
    return (
        <div className="booking-history-current">
            <div className="booking-history-current__name title">
                {data.name}
            </div>
            <div className="booking-history-current__address subtitle">
                {data.address}
            </div>
            <div className="booking-history-current__room title">
                {data.room.name}
            </div>
            <div className="booking-history-current__price">
                {`${data.room.price} руб.`}
            </div>
            {data.status === BookingCurrentStatus.cannotUndone &&
                <Button type="button" onClick={onClickCallCleaningService}>
                    Вызвать клининг
                </Button>
            }
            {data.status === BookingCurrentStatus.canСanceled &&
                <Button type="button" onClick={onClickCancelReservation}>
                    Снять бронь
                </Button>
            }
        </div>
    )
}

export default BookingHistoryCurrent;