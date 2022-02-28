import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CarouselCard({ infoValues }) {
  const activeTab = useSelector(state => state.tab);
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

  const navigate = useNavigate();

  const handleClick = contentId => {
    if (activeTab === 1) return;
    navigate(`/detail/${activeTab}?contentId=${contentId}`);
  };

  let likeData = [];
  if (infoValues) {
    infoValues.map(value => {
      likeData.push({
        id: value.id,
        image: value.image,
        link: value.link,
        title: value.title,
        body: value.body,
      });
    });
  }

  return (
    <div>
      <S.Header>새로 올라왔어요</S.Header>
      <S.Badge>NEW</S.Badge>
      <S.SliderWrap>
        <Slider {...settings}>
          {likeData &&
            likeData.map((value, index) => (
              <div key={index} onClick={() => handleClick(value.id)}>
                {activeTab === 1 && (
                  <a href={value.link} target="_blank" rel="noreferrer">
                    <S.SliderImage src={value.image} alt={value.title} />
                  </a>
                )}
                {activeTab !== 1 && (
                  <S.SliderImage src={value.image} alt={value.title} />
                )}
                <S.SliderTitle>{value.title}</S.SliderTitle>
              </div>
            ))}
        </Slider>
      </S.SliderWrap>
    </div>
  );
}

export default CarouselCard;
