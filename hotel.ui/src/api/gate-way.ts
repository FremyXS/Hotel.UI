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

export const sendAddBooking = async (
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
    try{
        await api().get('booking/add',
        {
            params: params
        })

        return true;
    }
    catch{
        return false;
    }
}

export const sendCancelBooking = async (params: {
    PassportNumber: string
}) =>{
    try{
        await api().get('booking/cancel',
        {
            params: params
        })

        return true;
    }
    catch{
        return false;
    }
}

export const sendCleanRoom = async (params: {
    HotelLatitude: number,
    HotelLongitude: number,
    RoomNumber: number
}) => {
try{
        await api().get('rooms/current/clean',
        {
            params: params
        })

        return true;
    }
    catch{
        return false;
    }
}

export const getBookingHistory = async ( params: {
    PassportNumber: string
}) => {
    try{
        const {data} = await api().get('booking/history',
        {
            params: params
        })

        return data;
    }
    catch{
        return false;
    }
}

export const getBookingCuurent = async ( params: {
    PassportNumber: string
}) => {
    try{
        const {data} = await api().get('booking/current',
        {
            params: params
        })

        return data;
    }
    catch{
        return false;
    }
}