import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
            <input 
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            />
            
            <input 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={handlePublish}>Publish</button>
        </>
    );
}

export default CreatePinPage;