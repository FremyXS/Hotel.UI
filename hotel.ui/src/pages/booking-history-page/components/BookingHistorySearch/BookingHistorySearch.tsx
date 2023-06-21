import React, { ChangeEvent } from "react";

import './BookingHistorySearch.scss';
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

interface IBookingHistorySearch{
    passport: {serial: string, number: string},
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void
}

function BookingHistorySearch({passport, onChange, onClick}: IBookingHistorySearch) {

    return (
        <div className="booking-history-search">
            <div className="booking-history-search__title">
                Номер паспорта
            </div>
            <Input 
            labelName="Серия паспорта"
            name="serial"
            value={passport.serial}
            onChange={onChange}/>            
            <Input labelName="Номер паспорта"
            name="number"
            value={passport.number}
            onChange={onChange}/>
            <Button type={"button"} onClick={onClick}>
                Просмотр истории
            </Button>
        </div>
    );
}

export default BookingHistorySearch;