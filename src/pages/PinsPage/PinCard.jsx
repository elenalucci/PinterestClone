function PinCard({ pin, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full rounded-xl overflow-hidden shadow cursor-pointer text-left"
    >
      <img src={pin.image} className="w-full object-cover block" alt={pin.title} />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
    </button>
  );
}

export default PinCard;