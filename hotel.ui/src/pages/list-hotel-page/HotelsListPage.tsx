import React, { useEffect, useState } from "react";
import { HotelType, SearchDataType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelElement from "./components/HotelElement/HotelElement";
import { useLocation, useNavigate } from "react-router-dom";
import './HotelsListPage.scss'

function HotelsListPage() {
    const [hotelsList, setHotelsList] = useState<HotelType[]>([]);
    const [data, setData] = useState<SearchDataType>({
        direction: null,
        checkIn: null,
        checkOut: null,
        guests: null
    })
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    useEffect(() => {
        setHotelsList(HotelsMock);
        console.log(queryParams);
    }, []);

    useEffect(() => {
        const direction = queryParams.get('direction');
        const checkIn = queryParams.get('checkIn');
        const checkOut = queryParams.get('checkOut');
        const guests = queryParams.get('guests');

        setData({
            direction: direction,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: Number(guests)
        });
    }, []);

    function navigateToHotelDetails(hotelId: number) {
        navigate(`${hotelId}?checkIn=${data.checkIn}&checkOut=${data.checkOut}&guests=${data.guests}`)
    }

    return (
        <div className="hotels">
            <div className="hotels-list">
                {hotelsList.map((el, index) =>
                    <HotelElement key={index} data={el} onNavigate={navigateToHotelDetails} />
                )}
            </div>
        </div>
    );
}

export default HotelsListPage;