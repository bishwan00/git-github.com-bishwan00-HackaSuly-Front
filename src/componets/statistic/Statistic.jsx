const Statistic = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 my-10">
      <div className="flex gap-4 items-end border-b pb-4">
        <div className="text-2xl font-bold text-gray-600 text-center w-20">
          $1200
        </div>
        <div className="text-md text-gray-500 font-bold self-center">
          Donated This Month
        </div>
      </div>
      <div className="flex gap-4 items-end border-b pb-4">
        <div className="text-3xl w-20 text-center font-bold text-blue-600">
          46
        </div>
        <div className="text-md text-gray-500 font-bold self-center ">
          Places Cleaned
        </div>
      </div>
      <div className="flex gap-4 items-end border-b pb-4">
        <div className="text-2xl font-bold text-center text-orange-600 w-20">
          2391
        </div>
        <div className="text-md text-gray-500 font-bold self-center">
          Green Lovers
        </div>
      </div>
      <div className="flex gap-4 items-end  ">
        <div className="text-3xl font-bold text-green-600 text-center w-20">
          3
        </div>
        <div className="text-md text-gray-500  font-bold self-center">
          Live Now
        </div>
      </div>
    </div>
  );
};

export default Statistic;
