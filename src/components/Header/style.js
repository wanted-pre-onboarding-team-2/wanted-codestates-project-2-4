import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgray;
`;
const Title = styled.h1`
  font-size: ${({ fontSize }) =>
    typeof fontSize === "number" ? `${fontSize}px` : fontSize};
  font-weight: 400;
`;
const BackBtn = styled.img`
  position: absolute;
  top: 32.5px;
  left: 30px;
  width: 25px;
  cursor: pointer;
`;

export { Wrapper, BackBtn, Title };
