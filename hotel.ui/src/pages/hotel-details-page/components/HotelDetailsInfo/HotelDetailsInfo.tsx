import React from "react";
import StarRating from "../../../../components/StarRating/StarRating";
import Slider from '../../../../components/Slider/Slider';

import './HotelDetailsInfo.scss';

interface IHotelDetailsInfo {
    name: string,
    rating: number,
    photos: string[],
    description: string
}

function HotelDetailsInfo({ name, description, rating, photos }: IHotelDetailsInfo) {
    return (
        <div className="hotel-details-info">
            <div className="hotel-details-info__title">
                <div className="hotel-details-info__name">
                    {name}
                </div>
                <StarRating value={rating} />
            </div>
            <div className="hotel-details-info__slider">
                {/* <Slider imgUrl={photos} /> */}
            </div>
            <div className="hotel-details-info__description">
                {description}
            </div>
        </div>
    );
}

export default HotelDetailsInfo;