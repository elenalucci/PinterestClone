import { useParams } from "react-router-dom";
import TopBar from "../../components/Header/TopBar";
import DisplayPinsFormat from "../../components/shared/DisplayPinsFormat";
import { useState } from "react";
import PinView from "../PinsPage/PinView";

function BoardViewPage({boards, onOpenSavePin}){
    const { boardId } = useParams();
    const [selectedPin, setSelectedPin] = useState(null);
    
    const board = boards.find(
        (board) => board.id === Number(boardId)
    );
    
    if(!board){
        return <div>Board Not Found</div>
    }

    return(
        
        <>
            <TopBar/>
            
            <div  className="bg-blue-400 h-96">
                <h1>{board.name}</h1>
            </div>
            <div className="h-full bg-purple-400">
                <DisplayPinsFormat 
                    pins={board.pins}
                    onOpenSavePin={onOpenSavePin}
                    onPinClick={setSelectedPin}    
                />

                {selectedPin && (
                    <PinView
                        pin={selectedPin}
                        onClose={() => setSelectedPin(null)}
                        onOpenSavePin={onOpenSavePin}
                    />
                )}
            </div>
        </>
    );
}

export default BoardViewPage;