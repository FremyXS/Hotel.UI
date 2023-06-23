import { ParamsDataType } from "../../types";
import { SearchAction, SearchActionTypes } from "../../types/reducers/search.d";

const initialState: ParamsDataType = {
    hotelId: 0,
    hotelName: "",
    address: "",
    city: "",
    longDescription: "",
    HotelLatitude: 0 ,
    HotelLongitude: 0,

    roomId: 0,
    class: 0,
    price: 0,
    modifiers: [],
    floor: 0,

    checkIn: "",
    checkOut: "",
}

export const searchReducer = (state = initialState, action: SearchAction) => {
    switch (action.type) {
        case SearchActionTypes.FETCH_SEARCH:
            return { ...state }
        case SearchActionTypes.SET_SEARCH:
            return { ...state, ...action.payload }
        default:
            return state
    }
}