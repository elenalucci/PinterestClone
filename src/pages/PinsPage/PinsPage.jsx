import React from "react";
import Header from "../../components/Header/Header";
import PinCard from "./PinCard";
import { useState } from "react";
import PinView from "./PinView";

function PinsPage({pins, onOpenCreateBoard, onOpenSavePin}){
    const [selectedPin, setSelectedPin] = useState(null);

    return(
    <div className="flex flex-1 flex-col">
        <div>
            <Header onOpenCreateBoard={onOpenCreateBoard}/>
        </div>
        
        <div>
            <div className="columns-[200px]">
                {pins.map((pin) =>(                
                    <div key={pin.id} className="mb-4 break-inside-avoid">
                        <PinCard 
                            pin={pin} 
                            onClick={() => setSelectedPin(pin)} 
                            onOpenSavePin={onOpenSavePin}
                        />
                    </div>
                ))}
            </div>
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