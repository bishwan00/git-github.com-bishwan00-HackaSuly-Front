import React from "react";

const Post = () => {
  return (
    <>
      <div className="bg-white  mt-2 p-1 my-4 rounded-[19px] text-black-500 ">
        <div className="flex flex-column pl-2">
          <div className="mt-2 w-7 h-7">
            <img
              src="../../public/assets/test.png"
              alt=""
              className="propic rounded-[10px]"
            />
          </div>
          <div className="mt-2">
            <p className="pl-2 ">name</p>
          </div>
        </div>
        <div className="flex mt-2 ">
          <div className="pl-2  ">
            {" "}
            <img
              src="../../public/assets/test.png"
              alt=""
              className="w-[99%] h-[194px] object-cover  rounded-l-xl"
            />
          </div>
          <div className="pr-2">
            {" "}
            <img
              src="../../public/assets/test.png"
              alt=""
              className="w-[99%] h-[194px] object-cover rounded-r-xl  "
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="pl-7 truncate">description</p>
        </div>
        <p className="pl-2 flex justify-center mt-3 pb-1 text-gray-400">
          see more
        </p>
      </div>
    </>
  );
};
export default Post;
