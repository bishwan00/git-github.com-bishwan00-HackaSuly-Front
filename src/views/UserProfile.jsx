import React from "react";
import proImg from "../../public/assets/propic.jpeg";
import Post from "../components/post/Post";
import ProfileImage from "../components/profile/ProfileImage";
import UserProfileContent from "../components/profile/UserProfileContent";
import { Tabs } from "antd";
import Container from "../components/container/Container";
import "../index.css";
import ProfileAdminRequest from "../components/profile/ProfileAdminRequest";
import ProfileAdminChallenge from "../components/profile/ProfileAdminChallenge";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

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
      <ProfileImage image={user} />
      {user?.role === "admin" ? (
        <Container>
          <Tabs
            defaultActiveKey="1"
            className="text-gray-500"
            items={items}
            activeTabClassName="custom-active-tab"
          />
        </Container>
      ) : (
        <UserProfileContent />
      )}
      <div className="my-[82px]">{/* <Post /> */}</div>
    </>
  );
};

export default UserProfile;
