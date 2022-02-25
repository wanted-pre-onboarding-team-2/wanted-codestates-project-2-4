import React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Tab = ({ active, onClick, label }) => {
  return (
    <S.TabBlock active={active} onClick={onClick}>
      <Link to="/">{label}</Link>
    </S.TabBlock>
  );
};

function Tabs({ onTabChange, selectedTab }) {
  const { data } = useSelector(state => state.contents);

  return (
    <S.TabsBlock>
      <S.TabsWrapper>
        <S.TabsTitle>
          <Link to="/">SandBank</Link>
        </S.TabsTitle>
        <S.TabsContainer>
          {data &&
            data.sector?.map(tabItem => (
              <Tab
                key={tabItem.id}
                active={selectedTab === tabItem.id}
                label={tabItem.sector_kr}
                onClick={() => onTabChange(tabItem.id)}
              />
            ))}
          <S.TabSlider sliderPos={selectedTab} />
        </S.TabsContainer>
      </S.TabsWrapper>
    </S.TabsBlock>
  );
}

export default Tabs;
