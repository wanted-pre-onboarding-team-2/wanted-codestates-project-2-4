import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 250px;
  height: 130px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #00000040;
`;

export const Content = styled.p`
  display: block;
  font-size: 1.6rem;
`;

export const Title = styled.p`
  display: block;
  color: #669cfe;
  font-size: 1.8rem;
`;

export const Button = styled.button`
  width: 90px;
  height: 36px;
  background-color: #669cfe;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 14px;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
  }
`;
