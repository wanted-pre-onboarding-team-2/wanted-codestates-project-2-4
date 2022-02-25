import React from "react";

import * as S from "./style";
import { MOCK_DATA, getInfosFB } from "../../modules/youtude";

export default function Youtube(props) {
  const datas = MOCK_DATA.content
    .filter(content => content.sector_id === 2)
    .map(({ title, body, image, link }) => ({ title, body, image, link }));
  console.log(datas);

  return (
    <>
      <S.CardWraps>
        <S.YoutudeCard>
          <iframe
            width="100%"
            height="403"
            src={`https://www.youtube.com/embed/${datas[0].link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.YoutudeCard>
        <S.YoutudeContainer>
          <S.YotudeTitle>{datas[0].title}</S.YotudeTitle>
          <S.YotudeContents>{datas[0].body}</S.YotudeContents>
        </S.YoutudeContainer>
      </S.CardWraps>
      {/* <button style={{ margin: "0 auto" }} onClick={getInfosFB}>
        버튼
      </button> */}
    </>
  );
}
