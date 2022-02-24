import React from "react";
import * as S from "./style";

const TabData = [
  { id: 1, label: "유튜브" },
  { id: 2, label: "알쓸B잡" },
  { id: 3, label: "인사이트" },
];

const Tab = ({ active, onClick, label }) => {
  return (
    <S.TabBlock active={active} onClick={onClick}>
      {label}
    </S.TabBlock>
  );
};

function Tabs({ onTabChange, selectedTab }) {
  return (
    <S.TabsBlock>
      <S.TabsTitle>SandBank</S.TabsTitle>
      <S.TabsContainer>
        {TabData.map(tabItem => (
          <Tab
            key={tabItem.id}
            active={selectedTab === tabItem.id}
            label={tabItem.label}
            onClick={() => onTabChange(tabItem.id)}
          />
        ))}
        <S.TabSlider sliderPos={selectedTab} />
      </S.TabsContainer>
    </S.TabsBlock>
  );
}

export default Tabs;
