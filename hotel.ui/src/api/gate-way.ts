import { api } from "."
import { HotelRoomType, HotelType } from "../types"

export const getAllHostels = async (city: string) => {
    try {
        const { data } = await api().get<HotelType[]>(`all-hotels/${city}-orderBy=1`)
        return data
    }
    catch {
        return false
    }
}

export const getHotelDeatil = async (hotelId: number) => {
    try {
        const { data } = await api().get<HotelType>(`all-hotels/${hotelId}`)
        return data
    }
    catch {
        return false
    }
}

export const getRoomsByHotel = async (params: {HotelLatitude: number, HotelLongitude: number}) => {
    try{
        const {data} = await api().get<{rooms: HotelRoomType[]} >("all-hotels/more", {
            params: params
        });

        return data.rooms
    }
    catch {
        return false
    }
}

export const sendBooking = async (
    params: {
        PassportNumber: string,
        HotelId: number,
        RoomId: number
        Longitude: number,
        Latitude: number,
        BookingStartDate: string,
        BookingEndDate: string
    }
) => {
    await api().post('booking/add', {},
    {
        params: params
    })
}