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
  const [type, setType] = useState("");
  const btnText = seeMore ? "접기" : "더보기";

  useEffect(() => {
    if (contents.data) {
      const index = tab - 1;
      setSector(contents.data.sector[index]);
      setType(contents.data.sector[index].type);
      const data = contents.data.content;
      const result = data.filter(item => item.sector_id === tab);
      setContent(result);
    }
  }, [contents, tab]);

  const handleSeeMoreBtn = () => {
    setSeeMore(!seeMore);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{sector.title}</S.Title>
        <S.Label type={type}>{sector.type}</S.Label>
      </S.Wrapper>
      <S.Cards seeMore={seeMore}>
        {content.map(item => (
          <Card key={item.id} cardContent={item} tabId={tab} />
        ))}
      </S.Cards>
      <S.SeeMoreBtn onClick={handleSeeMoreBtn}>{btnText}</S.SeeMoreBtn>
    </S.Container>
  );
}

export default CardList;
