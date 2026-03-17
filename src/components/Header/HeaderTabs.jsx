import { NavLink } from "react-router-dom";
function HeaderTabs(){
    return(
        <div className="flex px-24 text-lg">
            <NavLink to="/pins" className={({isActive}) =>  `px-2 pb-1  font-semibold 
            ${
            isActive
              ? "border-b-2 border-black"
              : ""
            }` 
            }>
                Pins
            </NavLink>
             <NavLink to="/boards" className={({isActive}) =>  `px-2 pb-1 font-semibold 
            ${
            isActive
              ? "border-b-2 border-black"
              : ""
            }` 
            }>
                Boards
            </NavLink>
        </div>
    )
}

export default HeaderTabs;