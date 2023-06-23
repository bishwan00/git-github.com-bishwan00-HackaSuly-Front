import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
import Task from "../components/task/Task";
import { Tabs } from "antd";
import Container from "../components/container/Container";

const Home = () => {
  const items = [
    {
      key: "1",
      label: `Requests`,
      children: <Post />,
    },
    {
      key: "2",
      label: `Challenge`,
      children: <Task />,
    },
  ];
  return (
    <div className="">
      <CreatePost />
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
