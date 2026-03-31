import PinCard from "../../pages/PinsPage/PinCard";

function DisplayPinsFormat({pins, onPinClick, onOpenSavePin}){
    return(
        <div className="columns-[200px]">
                {pins.map((pin) =>(                
                    <div key={pin.id} className="mb-4 break-inside-avoid">
                        <PinCard 
                            pin={pin} 
                            onClick={() => onPinClick(pin)} 
                            onOpenSavePin={onOpenSavePin}
                        />
                    </div>
                ))}
            </div>
    );
}

export default DisplayPinsFormat;