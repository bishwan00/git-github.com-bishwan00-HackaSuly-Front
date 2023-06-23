const Statistic = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white  my-10">
      <div className="flex gap-x-2 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-center  w-20">$1200</div>
        <div className="text-md ">Donated This Month</div>
      </div>
      <div className="flex gap-x-2 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-blue-500  w-20">146</div>
        <div className="text-md   ">Places Cleaned</div>
      </div>{" "}
      <div className="flex gap-x-6 px-3 py-6 border-b justify-center items-center">
        <div className="text-2xl font-bold text-orange-400 w-20  ">2369</div>
        <div className="text-md ">Green Lovers</div>
      </div>{" "}
      <div className="flex gap-x-2 px-3 py-6  border-b justify-center items-center">
        <div className="text-2xl font-bold  w-20 text-agreen-500 ">3</div>
        <div className="text-md   ">Live Now </div>{" "}
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
      </div>
    </div>
  );
};

export default Statistic;
