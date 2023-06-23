import React from "react";
import proImg from "../../public/assets/photo-1633332755192-727a05c4013d.jpeg";
import Post from "../componets/post/Post";
import { Tabs } from "antd";
import ProfileImage from "../componets/profile/ProfileImage";
import UserProfileContent from "../componets/profile/UserProfileContent";
import Container from "../componets/container/Container";
import "../index.css";
import ProfileAdminRequest from "../componets/profile/ProfileAdminRequest";
import ProfileAdminChallenge from "../componets/profile/ProfileAdminChallenge";
const UserProfile = () => {
  const items = [
    {
      key: "1",
      label: `Requests`,
      children: <ProfileAdminRequest />,
    },
    {
      key: "2",
      label: `Challenge`,
      children: <ProfileAdminChallenge />,
    },
  ];
  return (
    <>
      <ProfileImage image={proImg} />
      <Container>
        <Tabs
          defaultActiveKey="1"
          className="text-gray-500"
          items={items}
          activeTabClassName="custom-active-tab"
        />
      </Container>
      {/* <UserProfileContent /> */}
      <div className="my-[82px]">{/* <Post /> */}</div>
    </>
  );
};

export default UserProfile;
