import React, { useState } from "react";
import * as S from "./style";

import { FiHeart, FiShare } from "react-icons/fi";

function Card({ cardContent }) {
  const [isLiked, setIsLiked] = useState(0);
  const [likeCount, setLikeCount] = useState(cardContent.like_cnt);
  const expressLike = () => {
    if (isLiked) {
      setIsLiked(0);
      setLikeCount(likeCount - 1);
      document.querySelector(`.like-${cardContent.id}`).style.color = "#8d8d8e";
    } else {
      setIsLiked(1);
      setLikeCount(likeCount + 1);
      document.querySelector(`.like-${cardContent.id}`).style.color = "red";
    }
  };

  return (
    <>
      <S.Card>
        <S.CardThumbnail src={cardContent.image} alt="card-thumbnail" />
        <S.CardInfo>
          <div>{cardContent.upload_date}</div>
          <S.CardControl>
            <S.CardButton onClick={() => expressLike()}>
              <FiHeart className={`like-${cardContent.id}`} />
              <p>{likeCount}</p>
            </S.CardButton>
            <S.CardButton
              onClick={() => {
                window.open(cardContent.link, "_blank");
              }}
            >
              <FiShare />
              <p>공유하기</p>
            </S.CardButton>
          </S.CardControl>
        </S.CardInfo>
      </S.Card>
    </>
  );
}

export default Card;
