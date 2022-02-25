import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../Header";
import Anchor from "../Tag";
import * as S from "./style";

const Insight = () => {
  const navigate = useNavigate();
  // {
  const [searchParams, setSearchParams] = useSearchParams();
  const contentId = Number(searchParams.get("contentId"));
  const { data, loading, error } = useSelector(state => state.contents);
  console.log(data);
  const { title, body, image, link } = data.content.filter(
    v => v.id === contentId,
  )[0];

  const handleBackBtn = () => navigate(-1);

  return (
    <>
      <Header
        title="어떻게 투자할까"
        fontSize="2rem"
        handleBackBtn={handleBackBtn}
      />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Img src={image} alt={title} />
        <S.P>{body}</S.P>
        <Anchor
          style={{ margin: "0 auto" }}
          href={link}
          target="_blank"
          rel="noreferrer"
          content="전체 리포트 읽기"
        />
      </S.Wrapper>
    </>
  );
};

export default Insight;
