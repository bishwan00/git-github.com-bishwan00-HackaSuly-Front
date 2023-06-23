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
        className={`${contentStyle} rounded-xl`}
        src="../../../public/assets/test.png"
      />
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl`}
        src="../../../public/assets/test.png"
      />{" "}
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl`}
        src="../../../public/assets/test.png"
      />{" "}
    </div>
    <div>
      <img
        className={`${contentStyle} rounded-xl`}
        src="../../../public/assets/test.png"
      />{" "}
    </div>
  </Carousel>
);
export default Slider;
