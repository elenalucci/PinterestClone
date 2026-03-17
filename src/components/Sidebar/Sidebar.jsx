import pinterestLogo from "../../assets/Pinterest-Logo.png"
import settingsLogo from "../../assets/settings.png"
function Sidebar (){
    return(
        <aside className="w-20 bg-red-100 border-r border-gray-400 flex justify-center items-start">
            <button>
                <img  src={pinterestLogo} alt="Pinterest Logo" className="h-6 mt-6" />   
            </button> 
        </aside>
    );
}

export default Sidebar;