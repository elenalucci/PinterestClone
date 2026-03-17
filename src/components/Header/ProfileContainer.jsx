import blankProfilePicture from "../../assets/blank-profile-circle.png"

let username = "Elena Lucci";
let followingCount = "0";

function ProfileContainer(){
    return(
        <div className="flex bg-neutral-50 rounded-xl p-6 w-96 h-24 mr-32 hover:bg-neutral-200">
            <img  src={blankProfilePicture} alt="default profile picture" className="w-14 h-14" />
            <div className="flex flex-col">
                <h2 className="font-semibold text-xl px-4">{username}</h2>
                <p className="px-4">{followingCount} following</p>
            </div>
            <button className="bg-gray-300 rounded-xl w-32 font-semibold ml-auto hover:bg-gray-400  cursor-pointer">
                Share Profile
            </button>
        </div>
    );
}

export default ProfileContainer;