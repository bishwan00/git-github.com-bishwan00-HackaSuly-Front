import React from "react";
import proImg from "../../public/assets/photo-1633332755192-727a05c4013d.jpeg";
import Post from "../componets/post/Post"
const UserProfile = () => {
  return (
    <>
      <div className="mt-[43px] flex flex-col items-center">
        <div className="w-20">
          <img src={proImg} className="rounded-2xl" alt="img" />
        </div>
        <div className="mt-[10px]">
          <p>Aland Mustafa</p>
        </div>
      </div>
      <div className="mt-[28px] flex flex-col rounded-xl bg-white p-6 mx-6 ">
        <div className="flex gap-4 items-end border-b pb-4">
          <div className="text-2xl font-bold text-yellow-400 text-center w-20 pb-2">
            75
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
      <div className="my-[82px]">
        <Post />
      </div>
    </>
  );
};

export default UserProfile;
