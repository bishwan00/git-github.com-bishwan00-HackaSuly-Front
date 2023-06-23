import React from 'react'
import proImg from '../../../public/assets/propic.jpeg'
import ImageIcon from "@mui/icons-material/Image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const CreatePost = () => {
  return (
    <div className=" bg-white w-full flex h-[106px] items-center px-3 my-4 rounded-[19px]">
      <div>
        <img src={proImg} alt="profile pic" className="w-24 rounded-2xl " />
      </div>
      <div className=" px-3 flex gap-2 flex-col w-full">
        <input type="text" placeholder="Share With Us" />
        <div>
            <AddPhotoAlternateIcon style={{ fontSize: 30, color: "#555555" }} />
        
        </div>
      </div>
      <div className="mr-2">
        <SendRoundedIcon style={{ fontSize: 35, color: "#2ECC71" }} />{" "}
      </div>
    </div>
  );
}

export default CreatePost