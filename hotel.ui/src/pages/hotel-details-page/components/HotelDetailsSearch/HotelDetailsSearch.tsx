import React from "react";

import './HotelDetailsSearch.scss';
import Input from '../../../../components/Input/Input';
import Button from "../../../../components/Button/Button";

function HotelDetailsSearch() {
    return (
        <div className="hotel-details-search">
            <div className="hotel-details-search__title">
                InfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfo InfoInfoInfoInfoInfoInfoInfoInfo
            </div>
            <div className="hotel-details-search__form">
                <Input
                    labelName="Заезд" />
                <Input
                    labelName="Выезд" />
                <Input
                    labelName="Гости" />
            </div>
            <Button type="button">Найти</Button>
        </div>
    );
}

export default HotelDetailsSearch;