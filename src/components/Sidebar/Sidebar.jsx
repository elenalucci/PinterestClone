import pinterestLogo from "../../assets/Pinterest-Logo.png"
import homeIcon from "../../assets/home-icon.png"
import createIcon from "../../assets/create-icon.png"

function Sidebar (){
    return(
        <aside className="flex flex-col items-center w-20 bg-neutral-50 border-r border-gray-400 gap-10">
            <div className="rounded-xl mt-6 w-10 h-10 flex items-center hover:bg-neutral-200 cursor-pointer">
                <button>
                    <img  src={pinterestLogo} alt="Pinterest Logo" className="h-6  cursor-pointer" />   
                </button>
            </div>

            <div className="rounded-xl h-10 w-10 flex items-center hover:bg-neutral-200  cursor-pointer">
                <button>
                    <img  src={homeIcon} alt="Home Icon" className="h-8  cursor-pointer" />   
                </button> 
            </div>
            <div className=" rounded-xl h-10 w-10 flex items-center hover:bg-neutral-200  cursor-pointer">
                <button>
                    <img  src={createIcon} alt="create Icon" className="h-7  cursor-pointer" />   
                </button> 
            </div>
        </aside>
    );
}

export default Sidebar;