import React from "react";
import { HotelRoomType } from "../../../../types";
import Slider from "../../../../components/Slider/Slider";
import Button from "../../../../components/Button/Button";
import './HotelDeatailsRoom.scss';

function HotelDeatailsRoom({ data, onClick }: { data: HotelRoomType, onClick: (room: HotelRoomType) => void }) {
    return (
        <div className="hotel-deatails-room">
            <div className="hotel-deatails-room__slider">
                <Slider imgUrl={data.imageUrls} />
            </div>
            <div className="hotel-deatails-room__info">
                <div className="hotel-deatails-room__name">
                    Комната под номеров {data.number}
                </div>
                <div className="hotel-deatails-room__floor">
                    Этаж: {data.floor}
                </div>
                <div className="hotel-deatails-room__type">
                    Тип {data.class}
                </div>
                <div className="hotel-deatails-room__modifiers">
                    {data.modifiers.map((el, index) =>
                        <div className="hotel-deatails-room__mod" 
                        key={`mod ${index}`}>
                            {el}
                        </div>
                    )}
                </div>
                <Button type="button"
                onClick={() => onClick(data)}>
                    Заказать
                </Button>
            </div>
        </div>
    );
}

export default HotelDeatailsRoom;