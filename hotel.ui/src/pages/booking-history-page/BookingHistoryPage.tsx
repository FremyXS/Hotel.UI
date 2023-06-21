import React, { ChangeEvent, useState } from "react";

import BookingHistorySearch from "./components/BookingHistorySearch/BookingHistorySearch";
import { BookingHistory } from "../../types";
import BookingHistoryElement from "./components/BookingHistoryElement/BookingHistoryElement";
import BookingHistoryCurrent from "./components/BookingHistoryCurrent/BookingHistoryCurrent";
import { BookingCurrent, BookingHistoryMock } from "../../mocks/bookingHistory";
import './BookingHistoryPage.scss';

function BookingHistoryPage() {
    const [passport, setPassport] = useState<{ serial: string, number: string }>({
        serial: "",
        number: ""
    })
    const [currentOrder, setCurrentOrder] = useState<BookingHistory | null>(null);
    const [historyOrder, setHistoryOrder] = useState<BookingHistory[]>([]);

    function onChangePassport(event: ChangeEvent<HTMLInputElement>) {
        setPassport({
            ...passport,
            [event.target.name]: event.target.value
        })
    }

    function onClickSearch() {
        console.log(BookingHistoryMock, 'ffffffffffffffffffffffffff');
        setHistoryOrder(
            BookingHistoryMock || []
        )
        setCurrentOrder(
            BookingCurrent || null
        )
    }

    function onClickCancelReservation(){
        console.log('Бронь отменена')
    }

    function onClickCallCleaningService(){
        console.log('Вызван клиниг')
    }

    return (
        <div className="booking-history">
            <div className="booking-history-title">
                История брони
            </div>
            <BookingHistorySearch
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangePassport(event)}
                passport={passport}
                onClick={onClickSearch} />

            {currentOrder &&
                <BookingHistoryCurrent data={currentOrder}
                onClickCancelReservation={onClickCancelReservation}
                onClickCallCleaningService={onClickCallCleaningService} />
            }
            <div className="booking-history-list">
                {historyOrder && historyOrder.map((el, index) =>
                    <BookingHistoryElement key={index} data={el} />
                )}
            </div>
        </div>
    );
}

export default BookingHistoryPage;