const Statistic = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white  my-10">
      <div className="flex gap-x-2 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-center  w-24">$1200</div>
        <div className="text-md ">Donated This Month</div>
      </div>
      <div className="flex gap-x-2 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-blue-500  w-20">146</div>
        <div className="text-md   ">Places Cleaned</div>
      </div>{" "}
      <div className="flex gap-x-6 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-orange-400 w-20  ">2369</div>
        <div className="text-md mr-2">Green Lovers</div>
      </div>{" "}
      <div className="flex gap-x-2 px-3 py-6  border-b justify-center items-center">
        <div className="text-2xl font-bold  w-16 text-agreen-500 ml-12 ">3</div>
        <div className="text-md   ">Live Challenges </div>{" "}
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
      </div>
    </div>
  );
};

export default Statistic;
