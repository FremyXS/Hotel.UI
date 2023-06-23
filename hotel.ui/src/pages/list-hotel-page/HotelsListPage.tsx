import React, { useEffect, useState } from "react";
import { HotelType } from "../../types";
import HotelElement from "./components/HotelElement/HotelElement";
import { useNavigate, useParams } from "react-router-dom";
import { getAllHostels } from "../../api/gate-way";
import './HotelsListPage.scss'
import NotFound from "../../components/NotFound/NotFound";

function HotelsListPage() {
    const [hotelsList, setHotelsList] = useState<HotelType[]>([]);
    const [isLoadPage, setIsLoadPage] = useState<boolean>(true);
    const { direction } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadListHotelsAsync();
    }, []);

    function navigateToHotelDetails(hotelId: number) {

        navigate(`/hotel-details/${hotelId}`)
    }

    return (
        <div className="hotels">
            {isLoadPage ?
                <div className="hotels-list">
                    {hotelsList.map((el, index) =>
                        <HotelElement key={index} data={el} onNavigate={navigateToHotelDetails} />
                    )}
                </div>
                :
                <NotFound />
            }
        </div>
    );

    async function loadListHotelsAsync() {
        const data = await getAllHostels(direction!!)

        if (data === false) {
            setIsLoadPage(false)
        }
        else {
            setHotelsList(data);
        }

    }
}

export default HotelsListPage;