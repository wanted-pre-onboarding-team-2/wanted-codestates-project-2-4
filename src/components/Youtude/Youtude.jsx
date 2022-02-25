import React from "react";

import * as S from "./style";

export default function Youtube(props) {
  const [youtude, setYoutude] = React.useState({
    link: "FyUSkHccOq4",
    title:
      "부동산 시장에도 번진 크립토 금융! 이제 비트코인으로 모기지론 받는다?",
    body: "최근 암호화폐 가격이 전반적으로 모두 하락하자 비트코인, 이더리움 등 메이저 코인을 장기로 보유하려는 사람들은 오히려 더욱 늘고있습니다. 캐나다 스타트업인 Ledn(레든)은 이런 투자자들을 위해 '비트코인 담보 모기지론' 상품을 내놓는다고 하는데요. 과연 크립토를 부동산 대출에 어떻게 이용하는 것일까요? 함께 알아봅니다.",
  });
  return (
    <>
      <S.CardWraps>
        <S.YoutudeCard>
          <iframe
            width="100%"
            height="403"
            src={`https://www.youtube.com/embed/${youtude.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.YoutudeCard>
        <S.YoutudeContainer>
          <S.YotudeTitle>{youtude.title}</S.YotudeTitle>
          <S.YotudeContents>{youtude.body}</S.YotudeContents>
        </S.YoutudeContainer>
      </S.CardWraps>
    </>
  );
}
