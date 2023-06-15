import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HotelType, SearchDataType } from "../../types";
import HotelsMock from "../../mocks/hotels";
import HotelDetailsInfo from "./components/HotelDetailsInfo/HotelDetailsInfo";
import HotelDetailsSearch from "./components/HotelDetailsSearch/HotelDetailsSearch";
import HotelDeatailsRoom from "./components/HotelDeatailsRoom/HotelDeatailsRoom";
import { useTypedSelector } from "../../halpers/useTypedSelector";
import { useActions } from "../../halpers/useActions";
import './HotelDeatailsPage.scss'

function HotelDeatailsPage() {
    const { direction, checkIn, checkOut, guests } = useTypedSelector(state => state.search);
    const { setTodoPage } = useActions();

    const { id } = useParams();
    const navigate = useNavigate();

    const [paramsData, setParamsData] = useState<SearchDataType>({
        direction: direction,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        hotelId: null,
        roomId: null,
        tarriffId: null,
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

    function onChangeParamsData(event: ChangeEvent<HTMLInputElement>) {
        setParamsData({
            ...paramsData,
            [event.target.name]: event.target.value
        });
    }

    function onSetNewParams() {
        setTodoPage(paramsData);
    }

    function onNavigateToBooking(roomId: number, tariffId: number) {
        const hotelId = id;
        setTodoPage({ ...paramsData, hotelId: Number(hotelId), roomId: roomId, tarriffId: tariffId })
        navigate(`/booking`)
    }

    return (
        <div className="hotel-details">
            <HotelDetailsInfo
                name={data.name}
                rating={data.rating}
                photos={data.photos} />
            <HotelDetailsSearch data={paramsData}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeParamsData(event)}
                onClick={() => onSetNewParams()} />
            <div className="hotel-details-rooms">
                {data.rooms?.map((el, index) =>
                    <HotelDeatailsRoom
                        onClick={(roomId: number, tariffId: number) => onNavigateToBooking(roomId, tariffId)}
                        key={index} data={el} />
                )}
            </div>
        </div>
    );
}

export default HotelDeatailsPage;