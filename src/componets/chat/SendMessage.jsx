import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMessage({ onSendMessage }) {
  const [msg, setMsg] = useState("");
  const messagesRef = collection(db, "messages");
  const inputRef = useRef(null);

  const sendMsg = async () => {
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
    <div className="flex mt-4 p-2 w-full justify-center items-center">
      <input
        ref={inputRef}
        className="w-96 justify-center items-center px-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Send a Message..."
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    
    </div>
  );
}

export default SendMessage;
