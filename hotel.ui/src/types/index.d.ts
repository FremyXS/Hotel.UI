export type SearchDataType = {
    direction: string | null,
    checkIn: string | null, 
    checkOut: string | null,
    guests: number | null
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