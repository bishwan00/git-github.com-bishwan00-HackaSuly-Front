import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import SendMessage from "./SendMessage";
import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import Container from "../container/Container";

function Chat() {
  const [messages, setMessages] = useState([]);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });
    return unsubscribe;
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.toDate) {
      return "";
    }

    const date = timestamp.toDate();
    const now = new Date();
    const diffInMs = now - date;

    // Convert time difference to minutes
    const diffInMinutes = Math.round(diffInMs / (1000 * 60));

    if (diffInMinutes < 1) {
      return "Just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat messages container on initial load and whenever new messages are added
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen rounded-lg">
        <h1 className=" text-lg font-bold ">Community Chat</h1>
        <div
          className="max-w-lg w-full bg-white rounded shadow flex-grow overflow-y-scroll"
          ref={chatMessagesRef}
        >
          <div className="p-4" ref={chatMessagesRef}>
            {messages.map((message) => (
              <div key={message.id}>
                <img
                  src={"../../Public/vite.svg"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />

                <div className=" whitespace-nowrap  w-min items-center border-gray-300 border shadow-md rounded-3xl rounded-tl-none py-2 px-6 m-2">
                  <div>
                    <p className="">{message.text}</p>
                    <span className="text-xs text-gray-500">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SendMessage />
      </div>
    </Container>
  );
}

export default Chat;
