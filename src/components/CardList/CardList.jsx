import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";

function CardList() {
  const [sector, setSector] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get("info/contents", {
        headers: {
          "TEST-AUTH": "wantedpreonboarding",
        },
      })
      .then(res => {
        console.log(res.data.content);
        setSector(res.data.sector);
        setContent(res.data.content);
      });
  }, []);

  const pressLike = (id, isLiked) => {
    const copyContent = [...content];

    if (isLiked) {
      copyContent.find(item => item.id === id).like_cnt -= 1;
    } else {
      copyContent.find(item => item.id === id).like_cnt += 1;
    }

    setContent(copyContent);
  };

  return (
    <ul>
      {content.map(item => (
        <Card key={item.id} cardContetnt={item} pressLike={pressLike} />
      ))}
    </ul>
  );
}

export default CardList;
