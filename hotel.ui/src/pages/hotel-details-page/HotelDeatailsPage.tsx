import React from "react";

import './HotelDeatailsPage.scss'
import { useParams } from "react-router-dom";

function HotelDeatailsPage() {
    const {id} = useParams();

    return (
        <div>HotelDeatailsPage {id}</div>
    )
}

export default HotelDeatailsPage;