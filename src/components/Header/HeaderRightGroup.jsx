import CreateButton from "../shared/CreateButton";
import ProfileContainer from "./ProfileContainer";

function HeaderRightGroup(){
    return (
    <div className="flex-1 flex justify-end bg-neutral-50 p-4">
        <div className="flex flex-col relative">
            <ProfileContainer/>
            <div className= "relative inline-flex mt-12 ml-auto mr-32">
                <CreateButton 
                    color="bg-red-500 text-white hover:bg-red-700"
                    className= ""
                />
            </div>
        </div>
    </div>
  );
}

export default HeaderRightGroup;