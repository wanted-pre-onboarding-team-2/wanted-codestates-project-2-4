import * as S from "./style";
import leftArrow from "../../assets/leftArrow.png";

const Header = ({ title, handleBackBtn, fontSize = "1rem", ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.BackBtn src={leftArrow} alt="뒤로가기" onClick={handleBackBtn} />
      <S.Title fontSize={fontSize}>{title}</S.Title>
    </S.Wrapper>
  );
};
export default Header;
