import styled, { css } from "styled-components";

export const TabsBlock = styled.div`
  width: 100%;
  background: white;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
`;

export const TabItem = styled.button`
  border: none;
  padding: 20px;
`;

export const TabsTitle = styled(TabItem)`
  font-weight: bold;
`;

export const TabsContainer = styled.div`
  position: relative;
  display: flex;
`;

export const TabBlock = styled(TabItem)`
  width: 100px;

  &:active {
    opacity: 0.6;
  }

  ${props =>
    props.active
      ? css`
          color: "black";
          font-weight: bold;
        `
      : css`
          color: #8d8d8e;
        `}
`;

export const TabSlider = styled.div`
  position: absolute;
  background: #669cfe;
  width: 100px;
  height: 5px;
  bottom: 0;
  transition: 0.2s;
  transform: ${props => `translateX(${100 * (props.sliderPos - 1)}px)`};
`;
