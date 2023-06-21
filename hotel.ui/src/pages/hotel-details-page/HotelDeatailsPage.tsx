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
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import windowDimensions from "../../commons/useWindowDimensions";

function HotelDeatailsPage() {
    const { height, width } = windowDimensions();
    
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
            <YMaps>
                <Map
                width={'100%'}
                height={width < 800? '200px' : '500px'}
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 11,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[55.75, 37.57]} />
                </Map>
            </YMaps>;
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