import pinterestLogo from "../../assets/Pinterest-Logo.png"
import homeIcon from "../../assets/home-icon.png"
import createIcon from "../../assets/create-icon.png"
import IconButton from "../shared/IconButton";
import { useState } from "react";
import DisplayIcon from "../shared/DisplayIcon";
import pinIcon from "../../assets/pin.png";
import boardIcon from "../../assets/boards.png";
import { useNavigate, NavLink} from "react-router-dom";


function Sidebar (){
    const [isCreateOpen, setCreateOpen] = useState(false);
    const navigate = useNavigate();

    return(
        //TODO: fixed sidebar
        <aside className="flex flex-col items-center w-20 bg-neutral-50 border-r border-gray-400 gap-10">
            <NavLink to="/">
                <IconButton icon = {pinterestLogo} label = "Home"/>
            </NavLink>
            <NavLink to="/">
                <IconButton icon = {homeIcon} label = "Home"/>
            </NavLink> 
            
            <div className="relative inline-flex">
                <IconButton 
                        icon = {createIcon} 
                        label="Create" 
                        onClick = {() => setCreateOpen(prev => !prev)}
                    />

                    {isCreateOpen && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-8 bg-zinc-50 h-56 w-88 rounded-xl flex flex-col shadow-md z-100">
                            <span className="ml-5 mt-3 font-semibold text-2xl"> 
                                Create
                            </span>
                            <div className="flex flex-col justify-evenly px-3 py-2">
                                <button className="flex items-center text-left rounded-lg hover:bg-zinc-200 h-20 cursor-pointer"
                                    onClick={() => {
                                        navigate("/create-pin");
                                        setCreateOpen(false);
                                    }}
                                >
                                    <DisplayIcon icon = {pinIcon}/>
                                    <div className="flex flex-col ml-2">
                                        <span className=" font-semibold">Pins</span>
                                        <p className="text-sm">Post your photos or videos and add links, stickers, effects, and more</p>
                                    </div>
                                </button>
                        
                                <button className="flex items-center text-left rounded-lg hover:bg-zinc-200 h-20 cursor-pointer">
                                    <DisplayIcon icon = {boardIcon}/>
                                    <div className="flex flex-col ml-2">
                                        <span className=" font-semibold">Board</span>
                                        <p className="text-sm">Organize a collection of your favorite Pins by creating a board</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
            </div>
        </aside>
    );
}

export default Sidebar;