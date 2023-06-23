import { ParamsDataType } from "../../types";
import { SearchAction, SearchActionTypes } from "../../types/reducers/search.d";

const initialState: ParamsDataType = {
    direction: "",
    checkIn: "",
    checkOut: "",
    hotelId: null,
    roomId: null,
    tarriffId: null,
    HotelLatitude: 0, 
    HotelLongitude: 0
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