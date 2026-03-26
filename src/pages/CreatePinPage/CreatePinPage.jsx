import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/Header/TopBar";
import Button from "../../components/shared/Button";


function CreatePinPage({setPins}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();
    

    function handlePublish(){
    const newPin = {
        id: Date.now(),
        title,
        description,
        image: URL.createObjectURL(image),
    };

    setPins(prev => [...prev, newPin]);
    navigate("/");
}
;

    return(
        <>
            <TopBar/>
            <div className="flex ">
                <div className=" w-full">
                    <div className="mt-4 border-y border-gray-200 px-6 py-4 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">
                            Create Pin
                        </h1>

                        <Button 
                            color="bg-red-500 text-white hover:bg-red-700"
                            className= "w-20 h-12"
                            name = "Publish"
                            onClick = {handlePublish}
                        />

                    </div>
                <div className="flex gap-8 px-6 mt-8">
                    <label className="bg-gray-200 w-90 h-112 rounded-xl ml-50 flex items-center justify-center cursor-pointer">
                         {image ? (
                            <img
                            src={URL.createObjectURL(image)}
                            className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-600">
                            Click to upload
                            </span>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="hidden"
                        />
                    </label>

                    <div className="flex flex-col gap-4 flex-1 mr-50">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">Title</label>
                            <input
                                className="bg-gray-200 h-18 rounded-xl px-3"
                                type="text"
                                value={title}
                                placeholder="Add a title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <input
                                className="bg-gray-200 h-32 rounded-xl px-3"
                                type="text"
                                value={description}
                                placeholder="Add a detailed description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default CreatePinPage;