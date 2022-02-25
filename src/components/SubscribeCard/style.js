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
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
