import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Card = styled.div`
  position: relative;
  height: 100%;
  margin: 10px;
  color: #8d8d8e;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const CardControl = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding-top: 3px;
    margin-left: 5px;
  }
`;
