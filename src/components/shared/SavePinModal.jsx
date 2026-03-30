import { useState } from "react";
import Button from "./Button";

function SavePinModal({onClose, pin, boards, onSavePin}){
    return(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white w-175 h-175 flex overflow-y-auto p-6 rounded-xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
            <h1>Choose Board</h1>

            <div>
                {boards.map((board) => (
                    <div
                        key={board.id}
                        onClick={() =>{
                           onSavePin(pin, board.id);
                        }}
                    >
                        {board.name}    
                    </div>
                ))}
            </div>

            </div>
        </div>
    );
}

export default SavePinModal;