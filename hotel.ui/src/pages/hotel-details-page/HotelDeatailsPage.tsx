import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HotelRoomType, HotelType, ParamsDataType } from "../../types";
import HotelDetailsInfo from "./components/HotelDetailsInfo/HotelDetailsInfo";
import { useActions } from "../../halpers/useActions";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import windowDimensions from "../../commons/useWindowDimensions";
import { getHotelDeatil, getRoomsByHotel } from "../../api/gate-way";
import HotelDetailsSearch from "./components/HotelDetailsSearch/HotelDetailsSearch";
import { useTypedSelector } from "../../halpers/useTypedSelector";
import './HotelDeatailsPage.scss'
import HotelDeatailsRoom from "./components/HotelDeatailsRoom/HotelDeatailsRoom";

function HotelDeatailsPage() {
    const [isLoadPage, setIsLoadPage] = useState<boolean>(true);
    const [isLoadRooms, setIsLoadRooms] = useState<boolean>(true);
    const { height, width } = windowDimensions();


    const { search } = useTypedSelector(state => state);
    const { setTodoPage } = useActions();

    const { hotelId } = useParams();

    const [hotel, setHotel] = useState<HotelType | null>(null)
    const [rooms, setRooms] = useState<HotelRoomType[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        loadHotelAsync();
    }, []);

    useEffect(() => {
        loadHotelRoomsAsync();
    }, []);

    // function onChangeParamsData(event: ChangeEvent<HTMLInputElement>) {
    //     setParamsData({
    //         ...paramsData,
    //         [event.target.name]: event.target.value
    //     });
    // }

    // function onSetNewParams() {
    //     setTodoPage(paramsData);
    // }

    function onNavigateToBooking(roomId: number) {
        setTodoPage({
            ...search,
            hotelId: Number(hotelId), roomId: roomId
        })
        navigate(`/booking`)
    }

    return (
        <div className="hotel-details">
            <HotelDetailsInfo
                name={hotel?.name!!}
                rating={hotel?.rating!!}
                photos={hotel?.photos!!}
                description={hotel?.longDescription!!} />
            <YMaps>
                <Map
                    width={'100%'}
                    height={width < 800 ? '200px' : '500px'}
                    defaultState={{
                        center: [hotel?.coordinates.latitude!!, hotel?.coordinates.longitude!!],
                        zoom: 11,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[hotel?.coordinates.latitude!!, hotel?.coordinates.longitude!!]} />
                </Map>
            </YMaps>
            <HotelDetailsSearch data={search}
            // onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeParamsData(event)}
            // onClick={() => onSetNewParams()} 
            />
            <div className="hotel-details-rooms">
                {rooms?.map((el, index) =>
                    <HotelDeatailsRoom
                        onClick={(roomId: number) => onNavigateToBooking(roomId)}
                        key={index} data={el} />
                )}
            </div>
        </div>
    );

    async function loadHotelAsync() {
        const data = await getHotelDeatil(Number(hotelId))

        if (data === false) {
            setIsLoadPage(false)
        }
        else {
            setHotel(data);
        }
    }

    async function loadHotelRoomsAsync() {
        const data = await getRoomsByHotel(
            {
                HotelLatitude: hotel?.coordinates.latitude!!,
                HotelLongitude: hotel?.coordinates.longitude!!
            }
        )

        if (data === false) {
            setIsLoadRooms(false)
        }
        else {
            setRooms(data);
        }
    }
}

export default HotelDeatailsPage;