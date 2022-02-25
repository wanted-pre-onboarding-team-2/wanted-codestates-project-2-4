import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import * as S from "./style";

export default function Youtube(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const contentId = Number(searchParams.get("contentId"));
  console.log(contentId, "asdf");
  const { data, loading, error } = useSelector(state => state.contents);
  const youtube = data.content.filter(v => v.id === contentId)[0];

  return (
    <>
      <S.CardWraps>
        <S.YoutudeCard>
          <iframe
            width="100%"
            height="403"
            src={`https://www.youtube.com/embed/${youtube.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.YoutudeCard>
        <S.YoutudeContainer>
          <S.YotudeTitle>{youtube.title}</S.YotudeTitle>
          <S.YotudeContents>{youtube.body}</S.YotudeContents>
        </S.YoutudeContainer>
      </S.CardWraps>
    </>
  );
}
