import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutNoHeader from "./LayoutNoHeader";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import PinsPage from "./pages/PinsPage/PinsPage";
import CreatePinPage from "./pages/CreatePinPage/CreatePinPage";
import initialPins from "./data/pinsData";
import CreateBoardModal from "./components/shared/CreateBoardModal";

export default function App() {

  const [pins, setPins] = useState(initialPins);
  const [boards, setBoards] = useState([]);
  const [isCreateBoardOpen, setIsCreateBoardOpen] = useState(false);

  function openCreateBoard(){
    setIsCreateBoardOpen(true);
  }

  function closeCreateBoard(){
    setIsCreateBoardOpen(false);
  }

  function handleCreateBoard(newBoard){
    setBoards((prev) => [...prev, newBoard]);
  }

  return (
    <>
    <Routes>
      <Route 
        path="/" 
        element={<LayoutNoHeader onOpenCreateBoard={openCreateBoard}/>}>
        <Route 
          index element={
            <PinsPage 
              pins={pins} 
              onOpenCreateBoard={openCreateBoard}
            />
        }
        />
        <Route 
          path="boards" 
          element={
            <BoardsPage 
              boards={boards} 
              setBoards={setBoards} 
              onOpenCreateBoard={openCreateBoard}
            />
          } 
        />
        <Route 
          path="pins" 
          element={
            <PinsPage 
              pins={pins} 
              onOpenCreateBoard={openCreateBoard}
            />
          }
        />
        <Route path="create-pin" element={<CreatePinPage setPins={setPins}/>}/>
      </Route>
    </Routes>

    {isCreateBoardOpen && (
      <CreateBoardModal 
        onClose={closeCreateBoard}
        onCreateBoard={handleCreateBoard}
      />
    )}

  </>
  );
}