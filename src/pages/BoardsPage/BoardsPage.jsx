import React from "react";
import Header from "../../components/Header/Header";
import BoardCard from "./BoardCard";

function BoardsPage({onOpenCreateBoard, boards}){
    return(
       <div className="flex flex-1 flex-col">
                <div>
                    <Header onOpenCreateBoard={onOpenCreateBoard}/>
                </div>
            {boards.map((board) =>(                
                    <div key={board.id} className="mb-4 break-inside-avoid">
                        <BoardCard board={board} />
                    </div>
            ))}
        </div>
    );
}

export default BoardsPage