import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../api/globalSlices/user.slics";
import { useNavigate } from "react-router-dom";

const ProfileImage = ({ image }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(getUser(null));
    localStorage.removeItem("access_token");
    navigate("/");
  };
  const dispatch = useDispatch();
  return (
    <div className="mt-[43px] flex flex-col items-center">
      <div className="w-20">
        <img
          src={`http://localhost:4000/uploads/${user?.image}`}
          className="rounded-2xl"
          alt="img"
        />
      </div>
      <div className="mt-2 font-bold">{user?.point}</div>
      <div className="mt-[10px]">
        <p>
          {user?.firstName} {user?.LastName}
        </p>
      </div>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="p-2 bg-agreen-500 text-white rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
