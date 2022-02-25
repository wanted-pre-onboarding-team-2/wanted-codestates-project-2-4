import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../Card";
import * as S from "./style";

function CardList() {
  const tab = useSelector(state => state.tab);
  const contents = useSelector(state => state.contents);
  const [sector, setSector] = useState([]);
  const [content, setContent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [BtnText, setBntText] = useState("더보기");

  useEffect(() => {
    if (contents.data) {
      const index = tab - 1;
      setSector(contents.data.sector[index]);
      const data = contents.data.content;
      const result = data.filter(item => item.sector_id === tab);
      setContent(result);
    }
  }, [contents, tab]);

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
        <S.Title>{sector.title}</S.Title>
        <S.Label>{sector.type}</S.Label>
      </S.Wrapper>
      <S.Cards seeMore={seeMore}>
        {content.map(item => (
          <Card key={item.id} cardContent={item} />
        ))}
      </S.Cards>
      <S.SeeMoreBtn onClick={handleSeeMoreBtn}>{BtnText}</S.SeeMoreBtn>
    </S.Container>
  );
}

export default CardList;
