import React, { useState } from "react";
import { useSelector } from "react-redux";

const Post = ({ adminPage }) => {
  const [seeMore, setSeeMore] = useState(true);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-white  mt-4 p-1  rounded-[19px] text-black-500 ">
        <div>
          <div className="flex flex-column pl-2">
            <div className="mt-2">
              <img
                src="../../public/assets/test.png"
                alt=""
                className="w-7 h-7 rounded-[10px]"
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
            <p
              className={` p-2 overflow-hidden  ${seeMore ? "h-[100px]" : ""}`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad,
              asperiores dolorum nemo quis voluptatum, libero dolorem, mollitia
              dolore obcaecati vero temporibus voluptas. Odit deleniti, esse
              rerum nisi nemo voluptatum!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim delectus nostrum accusamus
              reprehenderit, cumque, assumenda officiis recusandae tenetur
              similique animi autem et molestiae nobis sequi ipsum fuga quidem,
              aut adipisci! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quo ad tenetur quis, reprehenderit asperiores cupiditate
              temporibus ipsa, repellat iure assumenda sint nobis mollitia quos
              exercitationem labore optio harum at explicabo.
            </p>
          </div>
          <p
            onClick={() => setSeeMore(!seeMore)}
            className="pl-2 flex justify-center mt-3 pb-1 text-gray-400"
          >
            {seeMore ? "see more" : "see less"}
          </p>
        </div>
      </div>
      {user?.role === "admin" && adminPage ? (
        <div
          className="flex z-[-1] relative justify-center w-full "
          style={{ top: "-10px" }}
        >
          <div className="py-6 bg-agreen-500 rounded-bl-2xl text-center w-[50%] text-white">
            Approve
          </div>
          <div className="py-6 bg-red-500 w-[50%] rounded-br-2xl text-center text-white">
            Decline
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Post;
