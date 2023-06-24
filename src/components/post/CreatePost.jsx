import React, { useEffect, useState } from "react";
import proImg from "../../../public/assets/propic.jpeg";
import ImageIcon from "@mui/icons-material/Image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  useCreatePostMutation,
  useUploadsMutation,
} from "../../api/postWithToken";

const CreatePost = () => {
  const [createPost, { post: response }] = useCreatePostMutation();
  const [uploads, { data: uploadsResponse }] = useUploadsMutation();

  const [formData, setFormData] = useState({
    description: "",

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
        <img src={proImg} alt="profile pic" className="w-24 rounded-2xl " />
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
