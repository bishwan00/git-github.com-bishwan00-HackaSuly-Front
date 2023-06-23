const SuperHero = ({ image, name, price }) => {
  return (
    <div className="flex gap-4 bg-white p-4 items-center my-4 rounded-xl">
      <div className="w-20">
        <img src={image} className="rounded-2xl" alt="img" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-gray-500 text-md font-bold">{name}</div>
        <div className="text-gray-500 text-md font-bold">${price}</div>
      </div>
    </div>
  );
};

export default SuperHero;
