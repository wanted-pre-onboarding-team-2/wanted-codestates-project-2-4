import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 80%;
  }
`;
const Title = styled.h2`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 50px;
  background-color: lightgray;
  font-size: 1.7rem;
  font-weight: lighter;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: fill;
`;
const P = styled.p`
  width: 100%;
  padding-bottom: 200px;
  margin-top: 100px;
  font-size: 1.3rem;
  line-height: 3rem;
  font-weight: 300;
  white-space: pre-wrap;
`;
export { Title, Wrapper, Img, P };
