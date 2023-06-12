import React, { useEffect, useState } from "react";
import { HotelType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelElement from "./components/HotelElement/HotelElement";

import './HotelsListPage.scss'

function HotelsListPage () {
    const[hotelsList, setHotelsList] = useState<HotelType[]>([]);

    useEffect(() => {
        setHotelsList(HotelsMock);
    })

    return(
        <div className="hotels-list">
            {hotelsList.map((el, index) => 
                <HotelElement key={index} data={el}/>
            )}
        </div>
    );
}

export default HotelsListPage;