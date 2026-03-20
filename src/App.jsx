import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutNoHeader from "./LayoutNoHeader";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import PinsPage from "./pages/PinsPage/PinsPage";
import CreatePinPage from "./pages/CreatePinPage/CreatePinPage";
import initialPins from "./data/pinsData";

export default function App() {

  const [pins, setPins] = useState(initialPins);

  return (
    <Routes>
      <Route path="/" element={<LayoutNoHeader />}>
        <Route index element={<PinsPage pins={pins}/>}/>
        <Route path="boards" element={<BoardsPage />} />
        <Route path="pins" element={<PinsPage pins={pins}/>}/>
        <Route path="create-pin" element={<CreatePinPage setPins={setPins}/>}/>
      </Route>
    </Routes>
  );
}