import React from "react";
import * as S from "./style";

const TabData = [
  { id: 1, title: "유튜브" },
  { id: 2, title: "알쓸B잡" },
  { id: 3, title: "인사이트" },
];

function Tabs(props) {
  return (
    <S.TabBlock>
      <ul>
        {TabData.map(tabItem => (
          <li key={tabItem.id}>{tabItem.title}</li>
        ))}
      </ul>
    </S.TabBlock>
  );
}

export default Tabs;
