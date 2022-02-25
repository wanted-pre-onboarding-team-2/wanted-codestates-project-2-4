import React, { useState } from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import CarouselCard from "../components/CarouselCard";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.

function Carousel({ infoValues }) {
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
    <>
      <CarouselCard likeData={likeData} />
    </>
  );
}

export default Carousel;
