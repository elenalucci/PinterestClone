import Button from "../../components/shared/Button";

function PinCard({ pin, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full rounded-xl overflow-hidden shadow cursor-pointer text-left"
    >
      <img src={pin.image} className="w-full object-cover block" alt={pin.title} />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <Button 
          color="bg-red-500 text-white hover:bg-red-700"
          className= "w-15 h-10"
          name = "Save"
          //to do onclick
        />
      </div>   

    </div>
  );
}

export default PinCard;