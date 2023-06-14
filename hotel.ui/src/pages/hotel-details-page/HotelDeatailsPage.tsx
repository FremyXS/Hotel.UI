import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelDetailsInfo from "./components/HotelDetailsInfo/HotelDetailsInfo";
import './HotelDeatailsPage.scss'

function HotelDeatailsPage() {
    const { id } = useParams();
    const [data, setData] = useState<HotelType>({
        id: 0,
        name: '',
        rating: 0,
        minCost: 0,
        maxCost: 0,
        numberRoomsAvailable: 0,
        photos: []
    })

    useEffect(() => {
        const hotel = HotelsMock.find((el) => el.id === Number(id));
        setData(hotel!!);
    }, []);

    return (
        <div className="hotel-details">
            <HotelDetailsInfo 
            name={data.name}
            rating={data.rating}
            photos={data.photos} />
        </div>
    );
}

export default HotelDeatailsPage;