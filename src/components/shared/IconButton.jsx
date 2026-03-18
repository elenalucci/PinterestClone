function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative group p-3 hover:bg-gray-200 rounded-xl cursor-pointer"
    >
      <img src={icon} className="h-6" />

      <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition z-50">
        {label}
      </div>
    </button>
  );
}

export default IconButton