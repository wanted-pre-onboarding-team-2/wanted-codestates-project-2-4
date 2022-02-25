import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 140px 10px;
  padding: 30px;
  /* background-color: yellowgreen; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: start;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  margin-right: 20px;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  background-color: blue;
  padding: 0.3em;
  border-radius: 3px;
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* background-color: aqua; */
  height: ${({ seeMore }) => (seeMore ? "auto" : "300px")};
  overflow: ${({ seeMore }) => !seeMore && "hidden"};
`;

export const SeeMoreBtn = styled.button`
  width: 100%;
  font-size: 1.8rem;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #669cfe;
  color: #f7f7fb;
`;
