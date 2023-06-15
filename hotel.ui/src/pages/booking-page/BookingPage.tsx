import React, { ChangeEvent, useState } from "react";

import './BookingPage.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { BookingContactsType } from "../../types";

function BookingPage() {
    const [contacts, setContacts] = useState<BookingContactsType>({
        firstName: "",
        lastName: "",
        passportSeries: 7777,
        passportNumber: 777777,
        telephon: "",
        email: ""
    });

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
                        Мотель Ночная Бабочка за 300
                    </div>
                    <div className="booking-hotel__geo value">
                        Россия, Москва
                    </div>
                </div>
                <div className="booking-room">
                    <div className="booking-room__name title">
                        Двухместный номер
                    </div>
                    <div className="booking-room__tags value">
                        Двуспальная кровать, Односпальная кровать, Питание не включено, Сейфа нет
                    </div>
                </div>
                <div className="booking-dates">
                    <div className="booking-dates__name title">
                        Заезд:
                    </div>
                    <div className="booking-dates__value value">
                        13 июня 2023 14:00
                    </div>
                    <div className="booking-dates__name title">
                        Выезд
                    </div>
                    <div className="booking-dates__value value">
                        13 июля 2023 12:00
                    </div>
                </div>
                <div className="booking-price">
                    <div className="booking-price__name title">
                        Цена
                    </div>
                    <div className="booking-price__value">
                        17 999 руб.
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