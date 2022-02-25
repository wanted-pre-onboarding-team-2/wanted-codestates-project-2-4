import React from "react";
import { useSelector } from "react-redux";

import Carousel from "../../api/Carousel";
import * as S from "./style";

function Home() {
  const { data, loading, error } = useSelector(state => state.contents);
  console.log(loading, error, data);
  return (
    <>
      <S.SliderArea>
        <Carousel />
      </S.SliderArea>
    </>
  );
}

export default Home;
