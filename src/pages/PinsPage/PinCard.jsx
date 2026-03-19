function PinCard({pin}){
    return(
        <div className="w-full rounded-xl overflow-hidden shadow">
            <img src={pin.image} className="w-full object-cover"/>
        </div>
    );
}

export default PinCard;