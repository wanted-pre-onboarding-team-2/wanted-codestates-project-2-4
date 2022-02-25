import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../../modules/Carousel";

function Home() {
  const { data, loading, error } = useSelector(state => state.contents);
  console.log(loading, error, data);
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default Home;
