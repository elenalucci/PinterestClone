function CreateButton({color, className}){
    return(
        <button className={`font-semibold w-20 h-12 rounded-xl cursor-pointer ${color} ${className}`}>
            Create
        </button>
    );
}

export default CreateButton;