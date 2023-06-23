import React from "react";
import Tree from "../../public/assets/payment-tree.png";
import { useState } from "react";

import FibQR from "../../public/assets/FIB.jpeg";

const Payment = () => {
  const [qunatitiy, setQuantity] = useState(1);
  const [dollar, setDolar] = useState(5);

  const Handledollar = (e) => {
    if (e != "add" && dollar == 5) {
      return;
    }
    if (e == "add") {
      setDolar(dollar + 5);
      setQuantity(qunatitiy + 1);
    } else {
      setDolar(dollar - 5);
      setQuantity(qunatitiy - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-5">
        <h1 className="font-semibold">
          Donate 5$ will plant a tree & clean a resort
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center m-8">
        <img className="w-20 " src={Tree} alt="" />
        <div className="mt-12 text-lg"> X {qunatitiy}</div>
      </div>
      <div className="flex flex-row justify-center  text-2xl">
        <button className="mx-2 px-2" onClick={(minus) => Handledollar()}>
          -
        </button>
        $ {dollar}
        <button className="mx-2 px-2" onClick={() => Handledollar("add")}>
          +
        </button>
      </div>

      <div className="flex  flex-col bg-white rounded-lg mt-10 p-2 mx-4">
        <div className=" ">
          <h5 className="flex justify-center items-center align-middle p-2 ">
            Manual payment
          </h5>
        </div>

        <div>
          <img src={FibQR} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="  items-center font-bold ">please send</h1>

          <h1>fullname , email , phone number throgh FIB</h1>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-10 mb-20 p-2 mx-4">
        <div className="flex flex-col justify-center  items-center p-2 m-2 disabled">
          <h1 className="text-xl ">
            FIB Payment integration <br />
            <b className="text-green-400 rounded-lg justify-center items-center mx-12">
              coming soon
            </b>{" "}
          </h1>
          <div className=" py-4 w-full">
            <label className="block text-sm mb-2" htmlFor="">
              card number
            </label>
            <input
              disabled
              className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col px-2 w-[60%]">
              <label className="block text-sm mb-2" htmlFor="">
                Expires
              </label>
              <input
                disabled
                className="appearance-none rounded-md   w-auto px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col px-2 ">
              <label className="block text-sm mb-2" htmlFor="">
                CVV
              </label>
              <input
                disabled
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
          </div>
          <div disabled className=" flex flex-col items-center w-full mt-3">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent  rounded-md text-white bg-agreen-600 hover:bg-agreen-500 focus:outline-none focus:ringfocus:ring-agreen-500 focus:ring-offset-2 focus:ring-2"
            >
              Confirm
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
