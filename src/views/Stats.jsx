import Statistic from "../components/statistic/Statistic";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SuperHero from "../components/superHeros/SuperHero";
import proImg from "../../public/assets/propic.jpeg";
import Donators from "../components/donators/Donators";
const Stats = () => {
  return (
    <Container>
      <Slider />
      <h1 className="text-center  text-gray-500 mt-4 ">
        Last Month Top Donators
      </h1>

      <Donators />
      <h1 className="text-center  text-gray-500 ">Last Month Superheros</h1>
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
      <Statistic />
    </Container>
  );
};

export default Stats;
