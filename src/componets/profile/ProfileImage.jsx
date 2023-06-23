const ProfileImage = ({ image }) => {
  return (
    <div className="mt-[43px] flex flex-col items-center">
      <div className="w-20">
        <img src={image} className="rounded-2xl" alt="img" />
      </div>
      <div className="mt-[10px]">
        <p>Aland Mustafa</p>
      </div>
    </div>
  );
};

export default ProfileImage;
