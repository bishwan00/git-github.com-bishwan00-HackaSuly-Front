import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../../public/assets/Planet_earth.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex justify-between items-center gap-10">
      <div className="mt-[69px] ml-6 w-auto">
        <Link to={user ? "/profile" : "/login"}>
          <PersonIcon style={{ fontSize: 45 }} className="text-gray-700" />
        </Link>
      </div>
      <div className="mt-14 ml-10">
        <img src={Logo} className="w-[71px] h-[71px]" />
      </div>
      <div className="mt-[69px] bg-gray-500 p-2 pl-4 rounded-l-3xl">
        <span className="text-md text-white  ">Donate</span>
        <FavoriteIcon
          style={{ fontSize: 25 }}
          className="text-green-500 ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
