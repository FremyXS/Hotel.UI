import { SearchDataType } from "../index";

export enum SearchActionTypes {
    FETCH_SEARCH = 'FETCH_SEARCH',
    FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS',
    FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR',
    SET_SEARCH = 'SET_SEARCH',
}
interface SetSearchAction {
    type: SearchActionTypes.SET_SEARCH;
    payload: SearchDataType;
}

interface FetchSearchAction {
    type: SearchActionTypes.FETCH_SEARCH;
}
interface FetchSearchSuccessAction {
    type: SearchActionTypes.FETCH_SEARCH_SUCCESS;
    payload: any[]
}
interface FetchSearchErrorAction {
    type: SearchActionTypes.FETCH_SEARCH_ERROR;
    payload: SearchDataType;
}
export type SearchAction = SetSearchAction | FetchSearchAction | FetchSearchErrorAction | FetchSearchSuccessAction