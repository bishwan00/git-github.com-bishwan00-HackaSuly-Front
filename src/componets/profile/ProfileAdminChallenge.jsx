import React from "react";

const ProfileAdminChallenge = () => {
  return (
    <>
      <div className="my-4 flex flex-col justify-center bg-white rounded-2xl py-8">
        <h1 className=" border-b-[1px] w-full text-center pb-4 text-base font-semibold">
          Post New Challenge
        </h1>
        <div className="my-4">
          <form className="text-center">
            <input
              type="text"
              placeholder="Description..."
              className="border w-72 p-3 mb-4"
            />
            <input
              type="text"
              placeholder="Location"
              className=" border w-72 p-3 mb-4"
            />
            <input
              type="text"
              placeholder="Points"
              className="border w-72 p-3 mb-4"
            />
          </form>
        </div>
        <div className="flex items-center  justify-around">
          <div>
            <input type="file" className="w-52" />
          </div>
          <div>
            <button className="bg-agreen-500 text-white px-4 py-2 rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAdminChallenge;
