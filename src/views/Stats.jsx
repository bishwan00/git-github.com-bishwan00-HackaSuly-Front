import Statistic from "../components/statistic/Statistic";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SuperHero from "../components/superHeros/SuperHero";
import proImg from "../../public/assets/photo-1633332755192-727a05c4013d.jpeg";
const Stats = () => {
  return (
    <Container>
      <Slider />
      <Statistic />
      <h1 className="text-center  text-gray-500 ">Last Month Superheros</h1>
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
      <SuperHero name="Bishwan Sherko" image={proImg} price={100} />
    </Container>
  );
};

export default Stats;
