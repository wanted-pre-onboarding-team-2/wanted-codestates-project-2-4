import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import CarouselCard from "../../components/CarouselCard";
import CardList from "../../components/CardList/CardList";
import * as S from "./style";

function Home() {
  const { data, loading } = useSelector(state => state.contents);
  const [infoValues, SetInfoValues] = useState();
  const activeTab = useSelector(state => state.tab);

  useEffect(() => {
    if (!data) return;
    const tmpObj = data.content?.filter(
      v => v.sector_id === activeTab && v.like_top === 1,
    );
    SetInfoValues(tmpObj);
  }, [data, activeTab, loading]);

  return (
    <S.Container>
      <S.SliderArea>
        <CarouselCard infoValues={infoValues} />
      </S.SliderArea>
      <CardList />
    </S.Container>
  );
}

export default Home;
