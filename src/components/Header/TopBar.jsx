import SearchBar from "./SearchBar";

function TopBar(){
    return (
    <div className="sticky top-0 bg-neutral-50 h-16 w-full flex items-center px-4 z-50 shadow-sm">
      <SearchBar />
    </div>
  );
}

export default TopBar;