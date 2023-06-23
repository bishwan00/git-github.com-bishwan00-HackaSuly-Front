import React from "react";
import StarIcon from "@mui/icons-material/Star";
const HomePagePost = () => {
  return (
    <>
      <div className="bg-white m-4  p-1 my-4 rounded-[19px] text-black-500 ">
        <div className="flex flex-column pl-2">
          <div className="mt-2 pl-4">
            <StarIcon
              style={{ fontSize: 30 }}
              className="text-yellow-500 relative bottom-[4px]"
            />
          </div>
          <div className="mt-2 ">
            <p className="pl-2 font-[15px]">
              Points: <span className="pl-2 font-[15px]">25</span>
            </p>
          </div>
        </div>
        <div className="flex mt-2 ">
          <div className="pl-2  ">
            {" "}
            <img
              src="../../public/assets/test.png"
              alt=""
              className="w-[99%] h-[194px]  rounded-l-xl"
            />
          </div>
          <div className="pr-2">
            {" "}
            <img
              src="../../public/assets/test.png"
              alt=""
              className="w-[99%] h-[194px] rounded-r-xl  "
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="pl-7 truncate font-[14px]">description</p>
        </div>
        <div className="mt-[17px] ml-[30px] mb-[26px]">
          <p className="font-[15px]">
            <span className="font-[16px]">Location:</span> Choman, Gomy Felaw
          </p>
        </div>
        <p className="pl-2 flex justify-center mt-3 pb-1 text-gray-400 font-[14px]">
          see more
        </p>
      </div>
    </>
  );
};

export default HomePagePost;
