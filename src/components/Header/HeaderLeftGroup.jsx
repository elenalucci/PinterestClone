import HeaderTabs from "./HeaderTabs";
import filterSlider from "../../assets/filter-slider.png"
function HeaderLeftGroup(){
    return (
    <div className="flex-1 bg-neutral-50 p-4">
        <h1 className="text-4xl font-semibold px-20 py-6">Your saved ideas</h1>
        <HeaderTabs />
        <button className="px-24 py-4 cursor-pointer">
            <img  src={filterSlider} alt="filters button" className="h-6 mt-6" />
        </button>
    </div>
  );
}

export default HeaderLeftGroup;