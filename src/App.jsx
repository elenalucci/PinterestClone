import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutNoHeader from "./LayoutNoHeader";
import BoardsPage from "./pages/BoardsPage";
import PinsPage from "./pages/PinsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutNoHeader />}>
        <Route index element={<BoardsPage />}/>
        <Route path="boards" element={<BoardsPage />} />
        <Route path="pins" element={<PinsPage />}/>
      </Route>
    </Routes>
  );
}