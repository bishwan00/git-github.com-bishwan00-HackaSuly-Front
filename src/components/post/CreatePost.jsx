import React, { useEffect, useState } from "react";
import proImg from "../../../public/assets/propic.jpeg";
import ImageIcon from "@mui/icons-material/Image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  useCreatePostMutation,
  useUploadsMutation,
} from "../../api/postWithToken";
import { useGetAllTasksQuery } from "../../api/task";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [createPost, { post: response }] = useCreatePostMutation();
  const [uploads, { data: uploadsResponse }] = useUploadsMutation();
  const { data: task } = useGetAllTasksQuery({ iscompleted: false });
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    description: "",
    taskId: "",
    userId: user?._id,
    images: [],
  });
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(formData);
    setFormData({
      description: "",
      taskId: "",
      images: [],
    });
  };
  useEffect(() => {
    if (
      uploadsResponse &&
      uploadsResponse.paths &&
      uploadsResponse.paths.length > 0
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: uploadsResponse.paths,
      }));
    }
  }, [uploadsResponse]);
  const handleFileChange = (e) => {
    const files = e.target.files;
    const selectedFiles = Array.from(files).slice(0, 2); // Limit selection to 2 files
    const fileNames = selectedFiles.map((file) => file.name);
    setFormData({
      ...formData,
      images: fileNames,
    });
    uploads(selectedFiles);
  };
  return (
    <div className=" bg-white w-full flex h-[106px] items-center px-3 my-4 rounded-[19px]">
      <div>
        <img
          src={`http://localhost:4000/uploads/${user?.image}`}
          alt="profile pic"
          className="w-24 rounded-2xl "
        />
      </div>
      <div className=" px-3 flex gap-2 flex-col w-full">
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={formData.description}
          placeholder="Share With Us"
        />

        <div>
          <AddPhotoAlternateIcon style={{ fontSize: 30, color: "#555555" }} />
          <select
            name="taskId"
            onChange={handleInput}
            className="bg-transparent relative border-b-2 w-24 right-0  rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 "
          >
            <option className="bg-transparent" value="">
              My Task
            </option>
            {task?.data.map((e) => {
              return (
                <option className="bg-transparent" value={e._id}>
                  {e.location}
                </option>
              );
            })}
          </select>
          <input
            type="file"
            onChange={handleFileChange}
            name="images"
            className="w-52 relative top-[-10px] opacity-0"
            multiple
            accept="image/*"
          />
        </div>
      </div>
      <div className="mr-2">
        <button onClick={handleSubmit}>
          {" "}
          <SendRoundedIcon style={{ fontSize: 35, color: "#2ECC71" }} />
        </button>{" "}
      </div>
    </div>
  );
};

export default CreatePost;
