import React from "react";
import Header from "../../components/Header/Header";
import pins from "../../data/pinsData";
import PinCard from "./PinCard";

function PinsPage(){
    return(
    <div className="flex flex-1 flex-col">
        <div>
            <Header />
        </div>
        
        <div>
            <div className="columns-[200px]">
                {pins.map((pin) =>(                
                    <div className="mb-4 break-inside-avoid">
                        <PinCard key={pin.id} pin={pin}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default PinsPage;