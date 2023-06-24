import React from "react";
import image from "../../../public/assets/donators.png";
import { useState } from "react";
import { Carousel } from "antd";

const Donators = () => {
  const [price, setPrice] = useState(750);
  const [companyName, setCompanyName] = useState("Suly company");

  const data = [
    {
      image: image,
      price: 400,
      companyName: "MAHMUD RICE",
    },
    {
      image: image,
      price: 200,
      companyName: "POTAN",
    },
    {
      image: image,
      price: 100,
      companyName: "ALAND company",
    },
  ];

  return (
    <Carousel autoplay dots={false} autoplaySpeed={3000} effect="scrollx">
      <div className="flex gap-4 items-center my-4 rounded-xl  bg-yellow-500">
        <div className="w-80">
          <div className="flex gap-4 p-4 items-center my-4 rounded-xl ">
            <div className="w-20 ml-2">
              <img src={data[0].image} className="rounded-2xl" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white text-md font-bold ml-2 text-2xl">
                ${data[0].price}
              </div>
              <div className="text-white text-md font-bold justify-center items-center ml-2">
                {data[0].companyName}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center my-4 rounded-xl  bg-gray-400">
        <div className="w-80">
          <div className="flex gap-4 p-4 items-center my-4 rounded-xl ">
            <div className="w-20 ml-2">
              <img src={data[1].image} className="rounded-2xl" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white text-md font-bold ml-2 text-2xl">
                ${data[1].price}
              </div>
              <div className="text-white text-md font-bold ml-2">
                {data[1].companyName}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center my-4 rounded-xl  bg-orange-500">
        <div className="w-80">
          <div className="flex gap-4 p-4 items-center my-4 rounded-xl ">
            <div className="w-20 ml-2">
              <img src={data[2].image} className="rounded-2xl" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white text-md font-bold ml-2 text-2xl">
                ${data[2].price}
              </div>
              <div className="text-white text-md font-bold ml-2">
                {data[2].companyName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Donators;
