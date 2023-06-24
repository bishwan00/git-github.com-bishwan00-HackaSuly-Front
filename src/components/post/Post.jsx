import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdatePostMutation } from "../../api/postWithToken";

const Post = ({ adminPage, post }) => {
  console.log(post);
  const [seeMore, setSeeMore] = useState(true);
  const { user } = useSelector((state) => state.user);
  const [updatePost, { post: response }] = useUpdatePostMutation();
  const [formData, setFormData] = useState({
    isActive: true,
    id: null,
  });
  const handleApprove = async (e) => {
    setFormData((prevFormData) => ({ ...prevFormData, id: e }));
    await updatePost(formData);
  };
  return (
    <>
      {post?.data?.map((e) => {
        return (
          <div>
            <div className="bg-white  mt-4 p-1  rounded-[19px] text-black-500 ">
              <div>
                <div className="flex flex-column pl-2">
                  <div className="mt-2">
                    <img
                      src={`http://localhost:4000/uploads/${e.userId?.image}`}
                      alt=""
                      className="w-7 h-7 rounded-[10px]"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="pl-2 ">
                      {e.userId?.firstName} {e.userId?.lastName}
                    </p>
                  </div>
                </div>
                <div className="flex mt-2 ">
                  <div className="pl-2  ">
                    {" "}
                    <img
                      src={`http://localhost:4000/uploads/${e?.images[0]}`}
                      alt=""
                      className="w-[99%] h-[194px] object-cover rounded-l-xl"
                    />
                  </div>
                  <div className="pr-2">
                    {console.log(e.images[0])}
                    <img
                      src={`http://localhost:4000/uploads/${e.images[1]}`}
                      alt=""
                      className="w-[99%] h-[194px] object-cover rounded-r-xl  "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p
                    className={` p-2 overflow-hidden  ${
                      seeMore ? "h-[100px]" : ""
                    }`}
                  >
                    {e.description}
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
            {user?.role === "admin" && adminPage && (
              <div
                className="flex  relative justify-center w-full "
                style={{ top: "-10px" }}
              >
                <div
                  onClick={() => handleApprove(e._id)}
                  className="py-6 bg-agreen-500 rounded-bl-2xl text-center w-[50%] text-white"
                >
                  <button onClick={() => console.log("assa")}>Approve</button>
                </div>
                <div className="py-6 bg-red-500 w-[50%] rounded-br-2xl text-center text-white">
                  Decline
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Post;
