import Button from "../shared/Button";
import ProfileContainer from "./ProfileContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderRightGroup(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    
    return (
    <div className="flex-1 flex justify-end bg-neutral-50 p-4">
        <div className="flex flex-col relative">
            <ProfileContainer/>
            <div className= "relative inline-flex mt-12 ml-auto mr-32">
                <Button 
                    color="bg-red-500 text-white hover:bg-red-700"
                    className= ""
                    name = "Create"
                    onClick={() => setIsOpen(prev => !prev)}
                />

                {isOpen && (
                    <div className="bg-zinc-50 absolute left-1/2 -translate-x-1/2 top-full mt-2 shadow-md w-42 h-24 rounded-xl flex flex-col justify-evenly px-3 py-2">
                        <button
                            type="button"
                            className="text-left px-3 rounded-lg py-2 hover:bg-zinc-200 cursor-pointer"
                            onClick={() => {
                                navigate("/create-pin");
                                setIsOpen(false);
                            }}
                        >
                        Pin
                        </button>

                        <button
                            type="button"
                            className="text-left px-3 rounded-lg py-2 hover:bg-zinc-200 cursor-pointer"
                        >
                        Board
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default HeaderRightGroup;