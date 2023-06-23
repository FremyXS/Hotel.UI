import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { BookingContactsType, BookingInfoType } from "../../types";
import { useTypedSelector } from "../../halpers/useTypedSelector";
import { sendAddBooking } from "../../api/gate-way";
import './BookingPage.scss';

function BookingPage() {
    const { search } = useTypedSelector(state => state);
    const [contacts, setContacts] = useState<BookingContactsType>({
        firstName: "",
        lastName: "",
        passportSeries: 7777,
        passportNumber: 777777,
        telephon: "",
        email: ""
    });

    useEffect(() => {
    }, []);

    function onChangeContacts(event: ChangeEvent<HTMLInputElement>) {
        setContacts({
            ...contacts,
            [event.target.name]: event.target.value
        })
    }

    function onClickBooking() {
        sendAddBooking({
            PassportNumber: `${contacts.passportNumber}${contacts.passportSeries}`,
            HotelId: search.hotelId!!,
            RoomId: search.roomId!!,
            Longitude: search.HotelLongitude!!,
            Latitude: search.HotelLatitude!!,
            BookingStartDate: search.checkIn!!,
            BookingEndDate: search.checkOut!!,
        })
    }

    return (
        <div className="booking">
            <div className="booking-info">
                <div className="booking-hotel">
                    <div className="booking-hotel__name title">
                        {search.hotelName}
                    </div>
                    <div className="booking-hotel__geo value">
                        {search.city}, {search.address}
                    </div>
                </div>
                <div className="booking-room">
                    <div className="booking-room__name title">
                        Комната под номером {search.roomId}
                    </div>
                    <div className="value">
                        Тип {search.class}
                    </div>
                    <div className="value">
                        Этаж {search.floor}
                    </div>
                    <div className="booking-room__tags value">
                        {search.modifiers.join(', ')}
                    </div>
                </div>
                <div className="booking-dates">
                    <div className="booking-date">
                        <div className="booking-date__name title">
                            Заезд:
                        </div>
                        <div className="booking-date__value value">
                            {search.checkIn} 14:00
                        </div>
                    </div>
                    <div className="booking-date">
                        <div className="booking-date__name title">
                            Выезд
                        </div>
                        <div className="booking-date__value value">
                            {search.checkOut} 12:00
                        </div>
                    </div>
                </div>
                <div className="booking-price">
                    <div className="booking-price__name title">
                        Цена
                    </div>
                    <div className="booking-price__value value">
                        {search.price} руб.
                    </div>
                </div>
            </div>
            <div className="booking-contacts">
                <div className="booking-contacts__title title">
                    Контактные данные
                </div>
                <Input
                    labelName="Имя"
                    type="text"
                    value={contacts.firstName}
                    name="firstName"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
                <Input labelName="Фамилия"
                    type="text"
                    value={contacts.lastName}
                    name="lastName"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
                <Input labelName="Серия"
                    type="text"
                    value={contacts.passportSeries.toString()}
                    name="passportSeries"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
                <Input labelName="Номер Паспорта"
                    type="text"
                    value={contacts.passportNumber.toString()}
                    name="passportNumber"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
                <Input labelName="Номер Телефона"
                    type="text"
                    value={contacts.telephon}
                    name="telephon"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
                <Input labelName="Email"
                    type="email"
                    value={contacts.email}
                    name="email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeContacts(event)} />
            </div>
            <div className="booking-button">
                <Button type="button" onClick={() => onClickBooking()}>
                    Забронировать
                </Button>
                <div className="booking-button__info">или позвоните по номеру +7 (111) 111 11-11</div>
            </div>
        </div>
    );
}

export default BookingPage;