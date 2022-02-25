import React, { useEffect } from "react";

import Youtube from "../../components/Youtube";
import Insight from "../../components/Insight";
import { useSearchParams, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return (
    <>
      {id === "1" && <Youtube />}
      {id === "3" && <Insight />}
    </>
  );
}

export default Detail;
