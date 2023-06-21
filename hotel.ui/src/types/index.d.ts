export type SearchDataType = {
    direction: string | null,
    checkIn: string | null, 
    checkOut: string | null,
    guests: number | null,
    hotelId: number | null,
    roomId: number | null,
    tarriffId: number | null
}

export type HotelType = {
    id: number,
    name: string,
    rating: number,
    minCost: number,
    maxCost: number,
    numberRoomsAvailable: number,
    photos: string[],
    rooms?: HotelRoomType[],
}

export type HotelRoomType = {
    id: number,
    name: string,    
    photos: string[],
    tariffes: HotelRoomTariffType[]
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
    room: {
        id: number,
        name: string,
        price: number,
    }
}