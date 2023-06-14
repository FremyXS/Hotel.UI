import React from "react";
import { HotelRoomType } from "../../../../types";
import Slider from "../../../../components/Slider/Slider";
import HotelDeatailsRoomTariff from "../HotelDeatailsRoomTariff/HotelDeatailsRoomTariff";
import './HotelDeatailsRoom.scss';

function HotelDeatailsRoom ({data}:{data: HotelRoomType}) {
    return (
        <div className="hotel-deatails-room">
            <div className="hotel-deatails-room__slider">
                <Slider imgUrl={data.photos} />
            </div>
            <div className="hotel-deatails-room__info">
                <div className="hotel-deatails-room__name">
                    {data.name}
                </div>
                <div className="hotel-deatails-room__tariffes">
                    {data.tariffes.map((el, index) => 
                        <HotelDeatailsRoomTariff 
                        key={`HotelDeatailsRoomTariff ${index}`}
                        data={el} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default HotelDeatailsRoom;