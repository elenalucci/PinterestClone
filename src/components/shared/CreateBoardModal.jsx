function CreateBoardModal(){
    return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
        <div
            className="bg-white w-175 h-175 flex overflow-y-auto p-6 rounded-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >

      </div>
    </div>
  );
}

export default CreateBoardModal;