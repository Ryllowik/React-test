import React from 'react';
import Slider from "react-slick";
import './carouselComponent.css';


function QuotesComponent(props){
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
    }
    return(
        <div className={"carousel " + props.background}>
            <Slider {...settings}>
                {props.items}
            </Slider>
        </div>
    )
}

export default QuotesComponent