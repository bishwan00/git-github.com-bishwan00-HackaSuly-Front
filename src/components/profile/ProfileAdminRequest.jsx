import React from "react";
import Post from "../post/Post";

const ProfileAdminRequest = () => {
  return (
    <div>
      <Post adminPage={true} />
      <Post adminPage={true} />
      <Post adminPage={true} />
      <Post adminPage={true} />
    </div>
  );
};

export default ProfileAdminRequest;
