import { ParamsDataType } from "../../types";
import { SearchActionTypes } from "../../types/reducers/search.d";

export function setTodoPage(data: ParamsDataType) {
    return {type: SearchActionTypes.SET_SEARCH, payload: data}
}