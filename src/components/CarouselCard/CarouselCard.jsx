import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./style";
function CarouselCard({ likeData }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.SliderWrap>
      <S.Header>새로 올라왔어요</S.Header>
      <S.Badge>NEW</S.Badge>
      <Slider {...settings}>
        {likeData &&
          likeData.map((value, index) => (
            <div>
              <a href={value.link}>
                <S.SliderImage src={value.image} alt={value.title} />
              </a>
              <S.SliderTitle>{value.title}</S.SliderTitle>
            </div>
          ))}
      </Slider>
    </S.SliderWrap>
  );
}

export default CarouselCard;
