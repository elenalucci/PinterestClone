import SearchBar from "./SearchBar";

function TopBar(){
    return (
    <div className="bg-neutral-50 h-16 w-full flex items-center px-4">
      <SearchBar />
    </div>
  );
}

export default TopBar;