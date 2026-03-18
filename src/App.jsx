import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWithHeader from "./LayoutWithHeader";
import BoardsPage from "./pages/BoardsPage";
import PinsPage from "./pages/PinsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWithHeader />}>
        <Route index element={<BoardsPage />}/>
        <Route path="boards" element={<BoardsPage />} />
        <Route path="pins" element={<PinsPage />}/>
      </Route>
    </Routes>
  );
}