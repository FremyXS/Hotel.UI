import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { BookingContactsType, BookingInfoType } from "../../types";
import { useTypedSelector } from "../../halpers/useTypedSelector";
import './BookingPage.scss';

function BookingPage() {
    const { city, checkIn, checkOut, hotelId, roomId } = useTypedSelector(state => state.search);
    const [contacts, setContacts] = useState<BookingContactsType>({
        firstName: "",
        lastName: "",
        passportSeries: 7777,
        passportNumber: 777777,
        telephon: "",
        email: ""
    });

    const [info, setInfo] = useState<BookingInfoType>({
        hotelName: "",
        hotelGeo: "",
        roomName: "",
        tags: [],
        price: 0
    });

    useEffect(() => {
        // const hotel = HotelsMock.find((el) => el.id === hotelId);
        // const room = hotel?.rooms?.find((el) => el.id === roomId);
        // const tariff = room?.tariffes.find((el) => el.id === tarriffId);

        // setInfo({
        //     ...info,
        //     hotelName: hotel!!.name,
        //     hotelGeo: direction!!,
        //     roomName: room?.name!!,
        //     tags: tariff?.tags!!,
        //     price: tariff?.price!!
        // });
    }, []);

    function onChangeContacts(event: ChangeEvent<HTMLInputElement>) {
        setContacts({
            ...contacts,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="booking">
            <div className="booking-info">
                <div className="booking-hotel">
                    <div className="booking-hotel__name title">
                        {info.hotelName}
                    </div>
                    <div className="booking-hotel__geo value">
                        Россия, {city}
                    </div>
                </div>
                <div className="booking-room">
                    <div className="booking-room__name title">
                        {info.roomName}
                    </div>
                    <div className="booking-room__tags value">
                        {info.tags.join(', ')}
                    </div>
                </div>
                <div className="booking-dates">
                    <div className="booking-date">
                        <div className="booking-date__name title">
                            Заезд:
                        </div>
                        <div className="booking-date__value value">
                            {checkIn} 14:00
                        </div>
                    </div>
                    <div className="booking-date">
                        <div className="booking-date__name title">
                            Выезд
                        </div>
                        <div className="booking-date__value value">
                            {checkOut} 12:00
                        </div>
                    </div>
                </div>
                <div className="booking-price">
                    <div className="booking-price__name title">
                        Цена
                    </div>
                    <div className="booking-price__value value">
                        {info.price} руб.
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
                <Button type="button" >
                    Забронировать
                </Button>
                <div className="booking-button__info">или позвоните по номеру +7 (111) 111 11-11</div>
            </div>
        </div>
    );
}

export default BookingPage;