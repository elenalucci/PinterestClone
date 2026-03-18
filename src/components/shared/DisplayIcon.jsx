function DisplayIcon({ icon}) {
  return (
    <div
      className="p-3 bg-gray-300 rounded-xl flex items-center justify-start w-fit shrink-0"
    >
      <img src={icon} className="h-9" />

    </div>
  );
}

export default DisplayIcon;