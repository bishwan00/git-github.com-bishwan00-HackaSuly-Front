import React from "react";
import proImg from "../../public/assets/propic.jpeg";
import Post from "../components/post/Post";
import { Tabs } from "antd";
import ProfileImage from "../components/profile/ProfileImage";
import UserProfileContent from "../components/profile/UserProfileContent";
import Container from "../components/container/Container";
import "../index.css";
import ProfileAdminRequest from "../components/profile/ProfileAdminRequest";
import ProfileAdminChallenge from "../components/profile/ProfileAdminChallenge";
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
