import React from "react";
import Header from "../../components/Header/Header";
import PinCard from "./PinCard";
import { useState } from "react";
import PinView from "./PinView";
import DisplayPinsFormat from "../../components/shared/DisplayPinsFormat";

function PinsPage({pins, onOpenCreateBoard, onOpenSavePin}){
    const [selectedPin, setSelectedPin] = useState(null);

    return(
    <div className="flex flex-1 flex-col">
        <div>
            <Header onOpenCreateBoard={onOpenCreateBoard}/>
        </div>
        
        <div>
            <DisplayPinsFormat 
                pins={pins}
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
    </div>
    );
}

export default PinsPage;