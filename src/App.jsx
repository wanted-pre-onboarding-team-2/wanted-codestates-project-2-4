import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Tabs from "./components/Tabs";
import SubscribeCard from "./components/SubscribeCard";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = tabId => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Router>
        <Tabs selectedTab={activeTab} onTabChange={handleTabChange} />
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
