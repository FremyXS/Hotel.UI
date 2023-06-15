import { SearchDataType } from "../../types";
import { SearchActionTypes } from "../../types/reducers/search.d";

export function setTodoPage(data: SearchDataType) {
    return {type: SearchActionTypes.SET_SEARCH, payload: data}
}