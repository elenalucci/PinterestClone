import { useState } from "react";
import Button from "./Button";

function CreateBoardModal({onClose, onCreateBoard}){
    const [name, setName] = useState("");

    function handleCreate(){
        const newBoard = {
            id: Date.now(),
            name,
            pins: [],
        };
        onCreateBoard(newBoard);
        onClose();
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white w-175 h-175 flex overflow-y-auto p-6 rounded-xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <input 
                    type="text"
                    placeholder="Name your board"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Button 
                    color="bg-red-500 text-white hover:bg-red-700"
                    className= "w-20 h-12"
                    name = "Create"
                    onClick = {handleCreate}
                />

            </div>
        </div>
    );
}

export default CreateBoardModal;