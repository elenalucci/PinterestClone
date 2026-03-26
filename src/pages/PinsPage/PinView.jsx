import Button from "../../components/shared/Button";

function PinView({ pin, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
        <div
            className="relative bg-neutral-50 w-175 h-175 flex overflow-y-auto p-6 rounded-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="absolute top-4 right-4">
                <Button 
                    color="bg-red-500 text-white hover:bg-red-700"
                    className= "w-20 h-12"
                    name = "Save"
                    //to do onclick
                />
            </div>
            <div  className="h-124 p-6 flex items-center justify-center bg-white">
                <div className="rounded-xl overflow-hidden max-w-full max-h-[45vh]">
                    <img 
                        src={pin.image} 
                        className="block max-w-full max-h-[45vh] object-contain"
                    />
                </div>
            </div>
            
            <div className="px-6">
                <div className="border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold">{pin.title}</h1>
                <p>{pin.description}</p>
            </div>

      </div>
    </div>
  );
}

export default PinView;