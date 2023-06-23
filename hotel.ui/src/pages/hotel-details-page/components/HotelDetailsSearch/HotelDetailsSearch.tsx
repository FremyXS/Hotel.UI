import React, { ChangeEvent } from "react";
import Input from '../../../../components/Input/Input';
import Button from "../../../../components/Button/Button";
import { ParamsDataType } from "../../../../types";
import './HotelDetailsSearch.scss';

function HotelDetailsSearch({ data, onChange, onClick }: {
    data: ParamsDataType,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void, onClick?: () => void
}) {
    return (
        <div className="hotel-details-search">
            <div className="hotel-details-search__title">
                {`Номера на ${data.checkIn} - ${data.checkOut} для 2 гостей`}
            </div>
            <div className="hotel-details-search__form">
                <Input
                    type="date"
                    labelName="Заезд"
                    name="checkIn"
                    value={data.checkIn!}
                    onChange={onChange} />
                <Input
                    type="date"
                    labelName="Выезд"
                    name="checkOut"
                    value={data.checkOut!}
                    onChange={onChange} />
            </div>
            <Button type="button"
            onClick={onClick}>Найти</Button>
        </div>
    );
}

export default HotelDetailsSearch;