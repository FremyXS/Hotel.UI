import React, { useEffect, useState } from "react";
import { HotelType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelElement from "./components/HotelElement/HotelElement";
import {  useNavigate } from "react-router-dom";
import './HotelsListPage.scss'

function HotelsListPage() {
    const [hotelsList, setHotelsList] = useState<HotelType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setHotelsList(HotelsMock);
    }, []);

    function navigateToHotelDetails(hotelId: number) {
        navigate(`${hotelId}`)
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