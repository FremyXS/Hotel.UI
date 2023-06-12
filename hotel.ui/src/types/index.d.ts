export type SearchDataType = {
    direction: string,
    checkIn: string, 
    checkOut: string,
    guests: number
}

export type HotelType = {
    id: number,
    name: string,
    rating: number,
    minCost: number,
    maxCost: number,
    numberRoomsAvailable: number,
    photos: string[]
}