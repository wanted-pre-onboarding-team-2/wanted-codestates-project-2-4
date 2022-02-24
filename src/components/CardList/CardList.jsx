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
        setSector(res.data.sector);
        setContent(res.data.content);
      });
  }, []);

  return (
    <ul>
      {content.map(item => (
        <Card key={item.id} cardContetnt={item} />
      ))}
    </ul>
  );
}

export default CardList;
