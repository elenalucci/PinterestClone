import CreateButton from "../shared/CreateButton";
import ProfileContainer from "./ProfileContainer";

function HeaderRightGroup(){
    return (
    <div className="flex-1 flex justify-end bg-neutral-50 p-4">
        <div className="flex flex-col">
            <ProfileContainer/>
            <CreateButton 
            color="bg-red-500 text-white hover:bg-red-700"
            className= "mt-12 ml-auto mr-32"
            />
        </div>
    </div>
  );
}

export default HeaderRightGroup;