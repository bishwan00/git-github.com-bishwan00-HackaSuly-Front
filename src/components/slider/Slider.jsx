import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Slider = () => (
  <Carousel autoplay dots={false} autoplaySpeed={5000} effect="scrollx">
    <div>
      <img
        className={`${contentStyle} rounded-xl h-72 w-full object-cover`}
        src="/assets/nawroz.jpg"
      />
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl h-72 w-full object-cover`}
        src="/assets/greenn.jpg"
      />
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl h-72 w-full object-cover`}
        src="/assets/green.jpg"
      />
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl h-72 w-full object-cover`}
        src="/assets/nawroz.jpg"
      />
    </div>
  </Carousel>
);

export default Slider;
