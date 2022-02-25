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
  color: #8d8d8e;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 5px;
  border-radius: 5px;
`;

export const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
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
