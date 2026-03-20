function CreatePinPage({setPins}){
    
    return(
        <>
            <input type="file"/>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Description"/>
            <button>Publish</button>
        </>
        //*TODO*

        //publish -> save info to local array -> display to PinsPage
    );
}

export default CreatePinPage;