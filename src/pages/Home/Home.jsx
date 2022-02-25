import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Carousel from "../../api/Carousel";
import * as S from "./style";

function Home() {
  const { data, loading, error } = useSelector(state => state.contents);
  const [infoValues, SetInfoValues] = useState();
  const activeTab = useSelector(state => state.tab);

  useEffect(() => {
    if (!data) return;
    const tmpObj = data.content.filter(
      v => v.sector_id === activeTab && v.like_top === 1,
    );

    SetInfoValues(tmpObj);
  }, [data, activeTab, loading]);

  return (
    <>
      <S.SliderArea>
        <Carousel infoValues={infoValues} />
      </S.SliderArea>
    </>
  );
}

export default Home;
