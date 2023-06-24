import React from "react";
import image from "../../../public/assets/donators.png";
import { useState } from "react";
import { Carousel } from "antd";
import { yellow } from "color-name";

const Donators = ({ users }) => {
  const [price, setPrice] = useState(750);
  const [companyName, setCompanyName] = useState("Suly company");

  return (
    <Carousel autoplay dots={false} autoplaySpeed={3000} effect="scrollx">
      {users?.data?.map((user, index) => {
        return (
          <div
            className={`flex gap-4 items-center my-4 rounded-xl ${
              index === 0
                ? "bg-yellow-500"
                : index === 1
                ? "bg-gray-400"
                : "bg-orange-500"
            } `}
          >
            <div className="w-80">
              <div className="flex gap-4 p-4 items-center my-4 rounded-xl ">
                <div className="w-20 ml-2">
                  <img
                    src={`http://localhost:4000/uploads/${user?.image}`}
                    className="rounded-2xl"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-white text-md font-bold ml-2 text-2xl">
                    ${user?.donate}
                  </div>
                  <div className="text-white text-md font-bold ml-2">
                    {user?.firstName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Donators;
