import React from "react";
import { useSelector } from "react-redux";

import Carousel from "../../api/Carousel";
import CardList from "../../components/CardList/CardList";
import * as S from "./style";

function Home({ activeTab }) {
  const { data, loading, error } = useSelector(state => state.contents);
  // const infos = data.filter(v => v.sector_id === activeTab);
  // console.log(infos);
  // useEffect(() => {

  // }, [data])
  // const infos = data.map(v => {
  //   if (v.sector_id === activeTab) {
  //     return v;
  //   }
  // });
  // console.log(infos, "asdf");
  return (
    <>
      <S.SliderArea>
        <Carousel activeTab={activeTab} />
      </S.SliderArea>
      <CardList />
    </>
  );
}

export default Home;
