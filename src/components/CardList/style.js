import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 140px 10px;
  padding: 30px;
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
  padding: 3px 10px;
  border-radius: 3px;
  color: #f7f7fb;
  background-color: ${({ type }) => type === "Report" && "#8BDB81"};
  background-color: ${({ type }) => type === "Youtube" && "#DE4217"};
  background-color: ${({ type }) => type === "News" && "#9594D8"};
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
