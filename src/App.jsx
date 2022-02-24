import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SubscribeCard from "./components/SubscribeCard";

function App() {
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
