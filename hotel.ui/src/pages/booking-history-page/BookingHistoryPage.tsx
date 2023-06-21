import React, { ChangeEvent, useState } from "react";

import BookingHistorySearch from "./components/BookingHistorySearch/BookingHistorySearch";
import './BookingHistoryPage.scss';
import { BookingHistory } from "../../types";
import BookingHistoryElement from "./components/BookingHistoryElement/BookingHistoryElement";
import BookingHistoryMock from "../../mocks/bookingHistory";

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

            <div className="booking-history-list">
                {historyOrder && historyOrder.map((el, index) =>
                    <BookingHistoryElement key={index} data={el}/>
                )}
            </div>
        </div>
    );
}

export default BookingHistoryPage;