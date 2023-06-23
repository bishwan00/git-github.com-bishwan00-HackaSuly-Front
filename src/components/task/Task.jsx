import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
const HomePagePost = () => {
  const [seeMore, setSeeMore] = useState(true);
  return (
    <>
      <div className="bg-white my-4 mb-4  p-1 rounded-[19px] text-black-500 ">
        <div className="flex flex-column pl-2 items-center justify-start w-full">
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
          <div className="ml-12 gap-2 flex items-center w-20">
            <div className="mt-2">
              <button className="p-2 border flex gap-2 text-agreen-500 border-agreen-500 rounded-lg">
                Completed
                <CheckOutlinedIcon style={{ fontSize: 20 }} />
              </button>
            </div>
            <div className="mt-2 text-red-500">
              <CancelIcon style={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-2 ">
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
          <p className="pl-7 truncate font-[14px]">
            {" "}
            <span className="font-[16px] ">Location:</span> Choman
          </p>
        </div>
        <div className="mt-[17px] ml-[30px] mb-[26px]">
          <p
            className={`font-[15px] overflow-hidden ${
              seeMore ? "h-[60px]" : ""
            }`}
          >
            Gomy Felaw Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum ducimus repellat rerum modi tempore esse totam fugit, neque
            aut excepturi, quibusdam at nostrum omnis odit nemo ipsam! Animi,
            debitis id? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi quae esse quis veniam voluptatum a deserunt quidem amet,
            natus repudiandae cupiditate porro vero molestias eligendi in, eos
            debitis sapiente dignissimos.
          </p>
        </div>
        <p
          className="pl-2 flex justify-center mt-3 pb-1 text-gray-400 font-[14px]"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "see more" : "see less"}
        </p>
      </div>
    </>
  );
};

export default HomePagePost;
