import { SearchDataType } from "../../types";
import { SearchAction, SearchActionTypes } from "../../types/reducers/search.d";

const initialState: SearchDataType = {
    direction: "",
    checkIn: "",
    checkOut: "",
    guests: 2
}

export const searchReducer = (state = initialState, action: SearchAction) => {
    switch (action.type) {
        case SearchActionTypes.FETCH_SEARCH:
            return { ...state }
        case SearchActionTypes.SET_SEARCH:
            return {...state, ...action.payload}
        default:
            return state
    }
}