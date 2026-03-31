import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutNoHeader from "./Layout";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import PinsPage from "./pages/PinsPage/PinsPage";
import CreatePinPage from "./pages/CreatePinPage/CreatePinPage";
import initialPins from "./data/pinsData";
import CreateBoardModal from "./components/shared/CreateBoardModal";
import SavePinModal from "./components/shared/SavePinModal";
import BoardViewPage from "./pages/BoardViewPage/BoardViewPage";

export default function App() {

  const [pins, setPins] = useState(initialPins);
  const [boards, setBoards] = useState([]);
  const [isCreateBoardOpen, setIsCreateBoardOpen] = useState(false);
  const [isSavePinOpen, setIsSavePinOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  function openCreateBoard(){
    setIsCreateBoardOpen(true);
  }

  function closeCreateBoard(){
    setIsCreateBoardOpen(false);
  }

  function handleCreateBoard(newBoard){
    setBoards((prev) => [...prev, newBoard]);
  }

  function openSavePin(pin){
    setIsSavePinOpen(true);
    setSelectedPin(pin);
  }

  function closeSavePin(){
    setIsSavePinOpen(false);
    setSelectedPin(null);
  }

  function handleSavePinToBoard(pin, boardId){
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if(board.id === boardId){
          return {
            ...board,
            pins: [...board.pins, pin],
          };
        }
        return board;
      })
    );
    closeSavePin();
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
              boards={boards}  
              onOpenCreateBoard={openCreateBoard}
              onOpenSavePin={openSavePin}
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
          path="boards/:boardId"
          element={
            <BoardViewPage 
              boards={boards}
              onOpenSavePin={openSavePin}
              onSavePin={handleSavePinToBoard}
            />
          }
        />
        <Route 
          path="pins" 
          element={ 
            <PinsPage 
              pins={pins}
              boards={boards}  
              onOpenCreateBoard={openCreateBoard}
              onOpenSavePin={openSavePin}
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

    {isSavePinOpen && selectedPin && (
      <SavePinModal
        pin={selectedPin}
        boards={boards}
        onClose={closeSavePin}
        onSavePin={handleSavePinToBoard}
      />
    )}

  </>
  );
}