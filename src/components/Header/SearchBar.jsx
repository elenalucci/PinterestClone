import searchIcon from "../../assets/Search.png"
function SearchBar(){
   return(
        <div className="w-full relative pt-4 px-4">
            
            <img 
                src={searchIcon}
                alt="Search"
                className="w-6 h-6 absolute mt-3 left-6"
            />

            <input
                type="text"
                placeholder="Search your Pins"
                className="w-full h-12 px-10 bg-gray-200 rounded-xl"
            />
        </div>
   )
}

export default SearchBar;