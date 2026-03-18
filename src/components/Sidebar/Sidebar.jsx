import pinterestLogo from "../../assets/Pinterest-Logo.png"
import homeIcon from "../../assets/home-icon.png"
import createIcon from "../../assets/create-icon.png"
import IconButton from "../shared/IconButton";

function Sidebar (){
    return(
        <aside className="flex flex-col items-center w-20 bg-neutral-50 border-r border-gray-400 gap-10">
            <IconButton icon = {pinterestLogo} label = "Home"/>
            <IconButton icon = {homeIcon} label = "Home"/>
            <IconButton icon = {createIcon} label="Create"/>
        </aside>
    );
}

export default Sidebar;