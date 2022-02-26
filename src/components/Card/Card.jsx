import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

import { FiHeart, FiShare } from "react-icons/fi";

function Card({ cardContent, tabId }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(0);
  const [likeCount, setLikeCount] = useState(cardContent.like_cnt);

  const expressLike = () => {
    if (isLiked) {
      setIsLiked(0);
      setLikeCount(likeCount - 1);
    } else {
      setIsLiked(1);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <>
      <S.Card>
        <S.CardThumbnail
          src={cardContent.image}
          alt="card-thumbnail"
          onClick={() =>
            navigate(`/detail/${tabId}?contentId=${cardContent.id}`)
          }
        />
        <S.CardInfo>
          <div>{cardContent.upload_date}</div>
          <S.CardControl>
            <S.CardButton onClick={() => expressLike()}>
              <S.LikeIcon isLiked={isLiked}>
                <FiHeart />
              </S.LikeIcon>
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
