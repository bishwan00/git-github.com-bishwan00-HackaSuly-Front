const UserProfileContent = ({ user }) => {
  return (
    <div className="mt-[28px] flex flex-col rounded-xl bg-white p-6 mx-6 ">
      <div className="flex gap-4 items-end border-b pb-4">
        <div className="text-2xl font-bold text-yellow-400 text-center w-20 pb-2">
          {user?.point}
        </div>
        <div className="text-md text-gray-500 font-bold self-center">
          Points
        </div>
      </div>
      <div className="flex gap-4   pb-4">
        <div className="text-3xl w-20 text-center font-bold text-blue-600 mt-2">
          46
        </div>
        <div className="text-md text-gray-500 font-bold self-center mt-2">
          Places Cleaned
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;
