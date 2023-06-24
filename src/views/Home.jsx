import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
import Task from "../components/task/Task";
import { Tabs } from "antd";
import Container from "../components/container/Container";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "../api/post";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const { data } = useGetAllPostsQuery({ isActive: true });

  const items = [
    {
      key: "1",
      label: `Posts`,
      children: <Post post={data} />,
    },
    {
      key: "2",
      label: `Challenge`,
      children: <Task />,
    },
  ];
  return (
    <div className="">
      {user && <CreatePost />}
      <Container>
        <Tabs
          defaultActiveKey="1"
          className="text-gray-500"
          items={items}
          activeTabClassName="custom-active-tab"
        />
      </Container>
    </div>
  );
};

export default Home;
