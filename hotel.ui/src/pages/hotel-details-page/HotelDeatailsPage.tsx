import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HotelType, SearchDataType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelDetailsInfo from "./components/HotelDetailsInfo/HotelDetailsInfo";
import HotelDetailsSearch from "./components/HotelDetailsSearch/HotelDetailsSearch";
import HotelDeatailsRoom from "./components/HotelDeatailsRoom/HotelDeatailsRoom";
import './HotelDeatailsPage.scss'

function HotelDeatailsPage() {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const [paramsData, setParamsData] = useState<SearchDataType>({
        direction: null,
        checkIn: null,
        checkOut: null,
        guests: null
    })
    const [data, setData] = useState<HotelType>({
        id: 0,
        name: '',
        rating: 0,
        minCost: 0,
        maxCost: 0,
        numberRoomsAvailable: 0,
        photos: [],
        rooms: []
    })

    useEffect(() => {
        const hotel = HotelsMock.find((el) => el.id === Number(id));
        setData(hotel!!);
    }, []);

    useEffect(() => {
        const checkIn = queryParams.get('checkIn');
        const checkOut = queryParams.get('checkOut');
        const guests = queryParams.get('guests');

        setParamsData({
            ...paramsData,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: Number(guests)
        });
    }, []);

    function onChangeParamsData(event: ChangeEvent<HTMLInputElement>){
        setParamsData({
            ...paramsData,
            [event.target.name] : event.target.value
        });
    }

    function onNavigateToNowParams(){
        navigate(`?checkIn=${paramsData.checkIn}&checkOut=${paramsData.checkOut}&guests=${paramsData.guests}`)
    }

    return (
        <div className="hotel-details">
            <HotelDetailsInfo 
            name={data.name}
            rating={data.rating}
            photos={data.photos} />
            <HotelDetailsSearch data={paramsData}
            onChange={(event: ChangeEvent<HTMLInputElement>)=>onChangeParamsData(event)}
            onClick={() => onNavigateToNowParams()} />
            <div className="hotel-details-rooms">
                {data.rooms?.map((el, index) => 
                    <HotelDeatailsRoom key={index} data={el}/>
                )}
            </div>
        </div>
    );
}

export default HotelDeatailsPage;