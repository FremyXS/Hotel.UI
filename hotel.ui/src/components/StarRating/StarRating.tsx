import React from "react";
import { ReactComponent as StarIcon } from '../../templates/icons/star.svg';
import './StarRating.scss';

function StarRating({value}:{value: number}){
    const stars = Array(5).fill(<StarIcon/>)

    return(
        <div className="star-rating">
            {stars.map((el, index) => 
                index < value && el
            )}
        </div>
    );
}

export default StarRating;