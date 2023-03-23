function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3_XdQSkv2yXWO_Aptqjv8GqYSWv7p0ts7w&usqp=CAU"
        alt="user-image"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">spiderman</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
