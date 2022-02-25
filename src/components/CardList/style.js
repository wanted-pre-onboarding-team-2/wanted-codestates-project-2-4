import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 20px;
  margin: 200px 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: start;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  margin-right: 10px;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  padding: 5px 10px;
  border-radius: 3px;
  color: #f7f7fb;
  background-color: ${({ type }) => type === "Report" && "#8BDB81"};
  background-color: ${({ type }) => type === "Youtube" && "#DE4217"};
  background-color: ${({ type }) => type === "News" && "#9594D8"};
`;

export const Cards = styled.ul`
  display: flex;
  justify-content: center;
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
