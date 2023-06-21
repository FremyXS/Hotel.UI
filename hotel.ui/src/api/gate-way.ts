import { api } from "."

export const getAllHostels = async (city: string) => {
    try {
        const { data } = await api().get(`all-hotels/${city}`)
        return data
    }
    catch {
        return false
    }
}

export const getHotelDeatil =
    async (params: { hotelId: number, xCoordinate: number, yCoordinate: number }) => {
        try {
            const { data } = await api().get(`current-hotel/${params}`)
            return data
        }
        catch {
            return false
        }
}