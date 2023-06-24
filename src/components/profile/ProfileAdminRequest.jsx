import React from "react";
import Post from "../post/Post";
import { useGetAllPostsQuery } from "../../api/post";

const ProfileAdminRequest = () => {
  const { data } = useGetAllPostsQuery({ isActive: false });

  return (
    <div>
      <Post adminPage={true} post={data} />
    </div>
  );
};

export default ProfileAdminRequest;
