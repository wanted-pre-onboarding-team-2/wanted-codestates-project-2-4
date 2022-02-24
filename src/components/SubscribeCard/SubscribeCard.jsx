import React from "react";

import * as S from "./style";

function SubscribeCard() {
  return (
    <S.Card>
      <S.Content>매주 새로운 코인 소식을 드려요</S.Content>
      <S.Title>샌드뱅크 오리지널</S.Title>
      <S.Button type="button">
        <a href="https://sandbank.io" target="_black" rel="noopener noreferrer">
          구독하기
        </a>
      </S.Button>
    </S.Card>
  );
}

export default SubscribeCard;
