import React, { useState } from "react";

import './Slider.scss';
import ArrowButton from "./components/ArrowButton/ArrowButton";

function Slider({imgUrl}:{imgUrl: string[]}) {
    const [activeIndex, setActiveIndex] = useState<number>(0);


    return (
        <div className="slider">
            {imgUrl.map((el, index) => 
                <section className={`slider-element${activeIndex === index? ' active': ''}`} key={index}>
                    <img src={el} alt={`Slider ${index}`} />
                </section>
            )}
            <div className="slider-navigation">
                <ArrowButton type="left"
                onClick={() => activeIndex > 0 && setActiveIndex(activeIndex-1)}
                />
                <span>{activeIndex+1}/{imgUrl.length}</span>
                <ArrowButton type="right"
                onClick={() => activeIndex < imgUrl.length - 1 &&  setActiveIndex(activeIndex+1)}/>
            </div>
        </div>
    );
}

export default Slider;