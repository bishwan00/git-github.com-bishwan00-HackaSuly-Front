import MessageIcon from "@mui/icons-material/Message";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex w-full fixed bottom-0 justify-around p-2 bg-green-500">
      <div>
        <Link to="/stats">
          <ReceiptLongIcon style={{ fontSize: 35 }} className=" text-white" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <HomeOutlinedIcon
            style={{ fontSize: 70 }}
            className="absolute inset-0 m-auto text-white bg-green-500 p-2 rounded-full border bottom-12 border-white"
          />
        </Link>
      </div>
      <div>
        <Link to="message">
          <MessageIcon style={{ fontSize: 35 }} className=" text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
