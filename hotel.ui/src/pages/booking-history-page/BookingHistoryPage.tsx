import React, { ChangeEvent, useState } from "react";

import BookingHistorySearch from "./components/BookingHistorySearch/BookingHistorySearch";
import './BookingHistoryPage.scss';
import { BookingHistory } from "../../types";

function BookingHistoryPage() {
    const [passport, setPassport] = useState<{serial: string, number: string}>({
        serial: "",
        number: ""
    })
    const [currentOrder, setCurrentOrder] = useState<BookingHistory | null>(null);
    const [historyOrder, setHistoryOrder] = useState<BookingHistory | null>(null);

    function onChangePassport(event: ChangeEvent<HTMLInputElement>){
        setPassport({
            ...passport,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="booking-history">
            <div className="booking-history-title">
                История брони
            </div>
            <BookingHistorySearch 
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChangePassport(event)} 
            passport={passport}/>
        </div>
    );
}

export default BookingHistoryPage;