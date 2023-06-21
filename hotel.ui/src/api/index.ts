import axios from "axios";
import { API } from "../config";

export const api = () => {

    console.log('api create')

    return axios.create({
        baseURL: API
    });
}