import searchIcon from "../../assets/Search.png"
function SearchBar(){
   return(
        <div className="w-full relative mt-2">
            
            <img 
                src={searchIcon}
                alt="Search"
                className="w-6 h-6 absolute mt-3 left-4"
            />

            <input
                type="text"
                placeholder="Search your Pins"
                className="w-full h-12 px-10 bg-gray-200 rounded-xl hover:bg-gray-300"
            />
        </div>
   )
}

export default SearchBar;