import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Anchor from "../../../components/Tag";
import * as S from "./style";

const Insight = ({ title, body, image, link }) => {
  const navigate = useNavigate();
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
