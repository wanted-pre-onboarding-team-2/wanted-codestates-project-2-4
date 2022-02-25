import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Card from "../Card";
import * as S from "./style";

function CardList() {
  const contents = useSelector(state => state.contents);
  // const { data, loading, error } = useSelector(state => state.contents);
  const [sector, setSector] = useState([]);
  const [content, setContent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [BtnText, setBntText] = useState("더보기");

  useEffect(() => {
    if (contents.data) {
      setSector(contents.data.sector);
      setContent(contents.data.content);
    }
  }, [contents]);

  const pressLike = (id, isLiked) => {
    const copyContent = [...content];

    if (isLiked) {
      copyContent.find(item => item.id === id).like_cnt -= 1;
    } else {
      copyContent.find(item => item.id === id).like_cnt += 1;
    }

    setContent(copyContent);
  };

  const handleSeeMoreBtn = () => {
    if (seeMore) {
      setSeeMore(false);
      setBntText("더보기");
    } else {
      setSeeMore(true);
      setBntText("접기");
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{sector[0]?.sector_kr}</S.Title>
        <S.Label>{sector[0]?.type}</S.Label>
      </S.Wrapper>
      <S.Cards seeMore={seeMore}>
        {content.map(item => (
          <Card key={item.id} cardContetnt={item} pressLike={pressLike} />
        ))}
      </S.Cards>
      <S.SeeMoreBtn onClick={handleSeeMoreBtn}>{BtnText}</S.SeeMoreBtn>
    </S.Container>
  );
}

export default CardList;
