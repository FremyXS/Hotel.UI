import React from "react";

import './HotelDetailsInfo.scss';
import StarRating from "../../../../components/StarRating/StarRating";
import Slider from '../../../../components/Slider/Slider';

interface IHotelDetailsInfo {
    name: string,
    rating: number,
    photos: string[]
}

function HotelDetailsInfo({name, rating, photos} : IHotelDetailsInfo) {
    return(
        <div className="hotel-details-info">
            <div className="hotel-details-info__title">
                <div className="hotel-details-info__name">
                    {name}
                </div>
                <StarRating value={rating} />
            </div>
            <div className="hotel-details-info__slider">
                <Slider imgUrl={photos} />
            </div>
        </div>
    );
}

export default HotelDetailsInfo;