import React from "react";
import styled from "styled-components";

export const CardWraps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 49.6vw;
  max-width: 857px
  min-height: 970px;
  margin: 0 auto 47px;
`;

export const YoutudeCard = styled.div`
  width: 100%;
  height: 403px;
  margin: 0 auto 15px;
  background-color: #669cfe;
`;

export const YoutudeContainer = styled.div`
  width: 100%;
  margin: 0 auto 15px;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 1px rgb(32 33 36 / 28%);
`;

export const YotudeTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 124px;
  margin: 0 auto;
  padding: 45px 95px;
  font-size: 1.875px;
  font-weight: 400px;
  background-color: #e9e9e9;
  border-radius: 30px 30px 0 0;
`;

export const YotudeContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 523px;
  margin: 0 auto;
  padding: 71px;
  font-size: 1.875px;
  font-weight: 400px;
`;
