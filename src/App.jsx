import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SubscribeCard from "./components/SubscribeCard";
import { loadSector } from "./modules/sector";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSector());
  }, []);
  return (
    <>
      <Router>
        <SubscribeCard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
