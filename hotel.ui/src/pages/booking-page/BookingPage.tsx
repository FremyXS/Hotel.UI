import React from "react";

import './BookingPage.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function BookingPage() {
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
                <Input labelName="Имя" />
                <Input labelName="Фамилия" />
                <Input labelName="Серия" />
                <Input labelName="Номер Паспорта" />
                <Input labelName="Номер Телефона" />
                <Input labelName="Email" />
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