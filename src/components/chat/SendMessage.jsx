import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import SendIcon from "@mui/icons-material/Send";

function SendMessage({ onSendMessage }) {
  const [msg, setMsg] = useState("");
  const messagesRef = collection(db, "messages");
  const inputRef = useRef(null);

  const sendMsg = async () => {
  const blockedWords = ["gbx ", "gub", "kure sa", "nafrate"];

  const sendMsg = async () => {
    if (msg.trim() === "") {
      // Display an error message or take appropriate action
      console.log("Cannot send empty message");
      return;
    }

    if (hasBlockedWords(msg)) {
      console.log("Message contains blocked words");

      await addDoc(messagesRef, {
        text: "<WARNING>this user tried to use bad words, please avoid these words otherwise you will be blocked ",
        createdAt: serverTimestamp(),
      });

      setMsg("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    await addDoc(messagesRef, {
      text: msg,
      createdAt: serverTimestamp(),
    });

    setMsg("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMsg();
    }
  };

  return (
    <div className="bg-white fixed bottom-12 mt-4 h-20 w-full ">
      <input
        ref={inputRef}
        className="w-[100%] h-12 border-b-0 justify-center items-center px-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  const hasBlockedWords = (message) => {
    const regex = new RegExp(blockedWords.join("|"), "gi");
    return regex.test(message);
  };

  return (
    <div className="pl-4   bg-white fixed bottom-12 mt-4 h-20 w-full ">
      <input
        ref={inputRef}
        className="w-[70%] lg:w-[91%] h-12 border-b-0 border-r-0 justify-center items-center px-4 pl-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Send a Message..."
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyUp={handleKeyUp}
      />

      <button
        className="ml-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
        onClick={sendMsg}
      >
        <SendIcon />
      </button>{" "}
    </div>
  );
}

export default SendMessage;
