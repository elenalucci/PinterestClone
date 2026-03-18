import { useState } from "react";

function CreateButton({color, className}){
    const[isOpen, setIsOpen] = useState(false);
    
    return(
        <>
            <button className={`font-semibold w-20 h-12 rounded-xl cursor-pointer ${color} ${className}`} onClick={() => setIsOpen(prev => !prev)}>
                Create
            </button>

            {isOpen &&(
                <div className="bg-zinc-50 absolute left-1/2 -translate-x-1/2 top-full mt-2 shadow-md w-42 h-24 rounded-xl flex flex-col justify-evenly px-3 py-2">
                    <button className="text-left px-3 rounded-lg py-2 hover:bg-zinc-200 cursor-pointer">
                        Pin
                    </button>
                    
                    <button className="text-left px-3 rounded-lg py-2 hover:bg-zinc-200 cursor-pointer">
                        Board
                    </button>

                </div>
            )}
        </>
    );
}

export default CreateButton;