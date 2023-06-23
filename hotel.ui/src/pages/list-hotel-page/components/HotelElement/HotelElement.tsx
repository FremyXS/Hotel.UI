import React from "react";
import { HotelType } from "../../../../types";
import StarRating from "../../../../components/StarRating/StarRating";
import Button from "../../../../components/Button/Button";
import Slider from "../../../../components/Slider/Slider";
import './HotelElement.scss'

// id: number;
// name: string; ***
// rating: number; ***
// coordinates: {
//     longitude: number;
//     latitude: number;
// };
// address: string; ***
// shortDescription: string; ***
// longDescription: string;
// photos: string[]; ***

function HotelElement({ data, onNavigate }: { data: HotelType, onNavigate: (hotelId: number) => void }) {
    return (
        <div className="hotel-element">
            <div className="hotel-element__preview">
                <Slider imgUrl={data.photos} />
            </div>
            <div className="hotel-element__info">
                <StarRating value={data.rating} />
                <div className="hotel-element__name">
                    {data.name}
                </div>
                <div className="hotel-element__address">
                    {data.address}
                </div>
                <div className="hotel-element__description">
                    {data.shortDescription}
                </div>
                <Button type="button" onClick={() => onNavigate(data.id) }>Подробнее</Button>
            </div>
        </div>
    );
}

export default HotelElement;