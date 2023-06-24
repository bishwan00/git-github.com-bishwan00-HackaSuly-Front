import React, { useEffect, useState } from "react";
import Task from "../task/Task";
import {
  useCreateTaskMutation,
  useUploadsTaskMutation,
} from "../../api/taskWithToken";
const ProfileAdminChallenge = () => {
  const [createTask, { post: response }] = useCreateTaskMutation();
  const [uploads, { data: uploadsResponse }] = useUploadsTaskMutation();

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    point: 0,
    images: [],
  });
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
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(formData);
    setFormData({
      description: "",
      location: "",
      point: 0,
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
              name="description"
              onChange={handleInput}
              value={formData.description}
              placeholder="Description..."
              className="border w-72 p-3 mb-4"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleInput}
              className=" border w-72 p-3 mb-4"
            />
            <input
              type="text"
              placeholder="Points"
              name="point"
              value={formData.point}
              onChange={handleInput}
              className="border w-72 p-3 mb-4"
            />
          </form>
        </div>
        <div className="flex items-center  justify-around">
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              name="images"
              className="w-52"
              multiple
              accept="image/*"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-agreen-500 text-white px-4 py-2 rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <Task />
    </>
  );
};

export default ProfileAdminChallenge;
