import React from "react";
import * as S from "./style";

function Card({ cardData }) {
  const expressLike = () => {
    console.log(1);
    // copyCardList.forEach((item) => {
    //   if (item.id === cardData.id) {
    //     item.like_ctn += 1;
    //  className={`like-${cardData.id}`}
    // })
  };

  return (
    <>
      <S.Card>
        <S.CardThumbnail
          src="https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_032.png"
          alt="card-thumbnail"
        />
        <S.CardInfo>
          <div>2022-01-01</div>
          <div>
            <S.CardButton onClick={expressLike()}>
              <span>dfs</span>
            </S.CardButton>
            <S.CardButton onClick={() => {}}>공유하기</S.CardButton>
          </div>
        </S.CardInfo>
      </S.Card>
    </>
  );
}

export default Card;
