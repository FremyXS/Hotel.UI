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
import HotelDeatailsRoom from "./components/HotelDeatailsRoom/HotelDeatailsRoom";
import NotFound from "../../components/NotFound/NotFound";
import './HotelDeatailsPage.scss'

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

    function onNavigateToBooking(room: HotelRoomType) {
        setTodoPage({
            ...search,
            hotelId: Number(hotelId),
            hotelName: hotel?.name!!,
            address: hotel?.address!!,
            city: hotel?.city!!,
            longDescription: hotel?.longDescription!!,
            HotelLatitude: hotel?.coordinates.latitude!!,
            HotelLongitude: hotel?.coordinates.longitude!!,
            roomId: room.number,
            class: room.class,
            price: room.price,
            modifiers: room.modifiers,
            floor: room.floor,
        })
        navigate(`/booking`)
    }

    return (
        <div className="hotel-details">
            {isLoadPage ?
                <>
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
                        {isLoadRooms ?
                            <>
                                {rooms?.map((el, index) =>
                                    <HotelDeatailsRoom
                                        onClick={(room: HotelRoomType) => onNavigateToBooking(room)}
                                        key={index} data={el} />
                                )}
                            </>
                            :
                            <NotFound />
                        }
                    </div>
                </>
                :
                <NotFound />
            }

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