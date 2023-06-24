import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useSelector } from "react-redux";

const HomePagePost = ({ task, isAdminPro }) => {
  const [seeMore, setSeeMore] = useState(true);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {task?.data?.map((e) => {
        return (
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
                  Points: <span className="pl-2 font-[15px]">{e.point}</span>
                </p>
              </div>
              {user?.role === "admin" && isAdminPro ? (
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
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-row mt-2 ">
              <div className="pl-2  ">
                {" "}
                <img
                  src={`http://localhost:4000/uploads/${e?.images[0]}`}
                  alt=""
                  className="w-[99%] h-[194px]  rounded-l-xl"
                />
              </div>
              <div className="pr-2">
                {" "}
                <img
                  src={`http://localhost:4000/uploads/${e?.images[1]}`}
                  alt=""
                  className="w-[99%] h-[194px] rounded-r-xl  "
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="pl-7 truncate font-[14px]">
                {" "}
                <span className="font-[16px] ">Location:</span> {e.location}
              </p>
            </div>
            <div className="mt-[17px] ml-[30px] mb-[26px]">
              <p
                className={`font-[15px] overflow-hidden ${
                  seeMore ? "h-[60px]" : ""
                }`}
              >
                {e.description}
              </p>
            </div>
            <p
              className="pl-2 flex justify-center mt-3 pb-1 text-gray-400 font-[14px]"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "see more" : "see less"}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default HomePagePost;
