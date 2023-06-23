export type SearchType = {
    direction: string | null,
    checkIn: string | null,
    checkOut: string | null,
}

export type ParamsDataType = {
    direction: string | null,
    checkIn: string | null,
    checkOut: string | null,
    hotelId: number | null,
    roomId: number | null,
    tarriffId: number | null,
    HotelLatitude: number | null, 
    HotelLongitude: number | null
}

export type HotelType = {
    id: number,
    name: string,
    rating: number,
    coordinates: {
        longitude: number,
        latitude: number
    },
    address: string,
    city: string,
    shortDescription: string,
    longDescription: string,
    photos: string[],
}

export type HotelRoomType = {
    class: number,
    price: number,
    number: number,
    state: number,
    imageUrls: string[],
    modifiers: string[],
    floor: number
}

export type HotelRoomTariffType = {
    id: number,
    tags: string[],
    price: number,
}

export type BookingInfoType = {
    hotelName: string,
    hotelGeo: string,
    roomName: string,
    tags: string[],
    price: number
}

export type BookingContactsType = {
    firstName: string,
    lastName: string,
    passportSeries: number,
    passportNumber: number,
    telephon: string,
    email: string
}

export type BookingHistory = {
    hotelId: number,
    name: string,
    address: string,
    status: string,
    room: {
        id: number,
        name: string,
        price: number,
    }
}