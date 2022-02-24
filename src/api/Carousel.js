import React, { useState } from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import CarouselCard from "../components/CarouselCard";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.

async function getCarousel() {
  const response = await axios.get("/info/contents", {
    headers: {
      "TEST-AUTH": "wantedpreonboarding",
    },
  });
  return response.data;
}

function Carousel() {
  const [state, refetch] = useAsync(getCarousel, []);
  const likeData = [];
  const { loading, data: carousels, error } = state; // state.data 를 users

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!carousels) return null;

  if (carousels) {
    carousels.content.map(value => {
      if (value.like_top === 1) {
        likeData.push({
          image: value.image,
          link: value.link,
          title: value.title,
        });
      }
    });
  }

  return (
    <>
      <CarouselCard likeData={likeData} />
    </>
  );
}

export default Carousel;
