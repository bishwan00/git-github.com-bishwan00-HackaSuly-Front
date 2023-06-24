import Statistic from "../components/statistic/Statistic";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SuperHero from "../components/superHeros/SuperHero";
import proImg from "../../public/assets/propic.jpeg";
import Donators from "../components/donators/Donators";
import { useGetAllUsersQuery, useGetAllUsersWinnerQuery } from "../api/user";
const Stats = () => {
  const { data: users } = useGetAllUsersQuery({ limit: 3 });
  const { data: usersWiner } = useGetAllUsersWinnerQuery({ limit: 3 });

  return (
    <Container>
      <Slider />
      <h1 className="text-center  text-gray-500 mt-4 ">
        Last Month Top Donators
      </h1>

      <Donators users={users} />
      <h1 className="text-center  text-gray-500 ">Last Month Superheros</h1>
      {usersWiner?.data?.map((e) => {
        return (
          <SuperHero
            name={`${e?.firstName} ${e?.lastName}`}
            image={`http://localhost:4000/uploads/${e?.image}`}
            price={e?.point}
          />
        );
      })}

      <Statistic />
    </Container>
  );
};

export default Stats;
