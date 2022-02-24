import React from "react";

import Carousel from "../../api/Carousel";
import * as S from "./style";

function Home() {
  return (
    <>
      <S.SliderArea>
        <Carousel />
      </S.SliderArea>
    </>
  );
}

export default Home;
