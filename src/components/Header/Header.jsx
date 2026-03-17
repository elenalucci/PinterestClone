import HeaderLeftGroup from "./HeaderLeftGroup";
import HeaderRightGroup from "./HeaderRightGroup";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

function Header (){
    return(
       <header className="h-72 flex flex-col bg-neutral-50">
            <TopBar />
            <div className="flex flex-1 justify-between">
                <HeaderLeftGroup />
                <HeaderRightGroup />
            </div>
        </header>
        
    );
}

export default Header;