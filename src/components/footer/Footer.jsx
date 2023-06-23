import React from "react";
import { Link, useLocation } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="flex  w-full fixed bottom-0 h-16 justify-around p-2 bg-green-500">
      <div>
        <Link to="/stats">
          <ReceiptLongIcon
            style={{
              fontSize: location.pathname === "/stats" ? 60 : 45,
              bottom: location.pathname === "/stats" ? 12 : 10,
            }}
            className={`absolute m-auto left-14 bottom-12 text-white bg-green-500 p-2 rounded-full border border-white ${
              location.pathname === "/stats" ? "active" : ""
            }`}
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <HomeOutlinedIcon
            style={{
              fontSize: location.pathname === "/" ? 60 : 45,
              bottom: location.pathname === "/" ? 12 : 3,
            }}
            className={`absolute inset-0 m-auto text-white bg-green-500 p-2 rounded-full border bottom-12 border-white ${
              location.pathname === "/" ? "active" : ""
            }`}
          />
        </Link>
      </div>
      <div>
        <Link to="/message">
          <MessageIcon
            style={{
              fontSize: location.pathname === "/message" ? 60 : 45,
              bottom: location.pathname === "/message" ? 12 : 10,
            }}
            className={`absolute m-auto right-14 bottom-12 text-white bg-green-500 p-2 rounded-full border border-white ${
              location.pathname === "/message" ? "active" : ""
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
