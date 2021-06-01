import React, { Component } from "react"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SlickSlider = () =>{
  
  
  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyload:true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    }
  

  return(
    <Slider {...settings}>
        <div className="Home__slide__item">
          <h3>GOOD IDEAS comes</h3>
          <span>FIRST!</span>
        </div>
        <div className="Home__slide__item">
          <h3>GREAT IDEAS comes</h3>
          <span>THEN!</span>
        </div>
    </Slider>
  )
}

export default SlickSlider
