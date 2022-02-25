import styled from "styled-components";

export const SliderWrap = styled.div`
  width: 600px;
  height: 340px;
  margin: auto;
  .slick-dots li button::before {
    color: #8d8d8e;
    opacity: 0.7;
  }
  .slick-dots li.slick-active button::before {
    color: #669cfe;
    opacity: 1;
  }
`;
export const SliderImage = styled.img`
  width: 600px;
  height: 340px;
  object-fit: cover;
  border-radius: 18px;
  padding: 10px;
`;

export const SliderTitle = styled.div`
  text-align: center;
  padding: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 8px;
  margin: 24px;
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Header = styled.span`
  font-size: 1.8rem;
  padding-left: 10px;
  font-weight: 600;
`;

export const Badge = styled.span`
  background-color: #8bdb81;
  font-size: 1.6rem;
  padding: 3px 7px;
  margin-left: 8px;
  color: white;
  border-radius: 5px;
`;
