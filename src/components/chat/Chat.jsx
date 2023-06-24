import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import SendMessage from "./SendMessage";
import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
  where,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Container from "../container/Container";

function Chat() {
  const [messages, setMessages] = useState([]);
  const chatMessagesRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");

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

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);

    const checkAdminEmail = async () => {
      const adminsCollection = collection(db, "admins");
      const adminsQuery = query(adminsCollection, where("email", "==", email));
      const adminsSnapshot = await getDocs(adminsQuery);
      setIsAdmin(!adminsSnapshot.empty);
    };

    checkAdminEmail();
  }, [email]);

  const handleDelete = async (messageId) => {
    // Logic for handling the delete operation
    try {
      const messageRef = doc(db, "messages", messageId);
      await deleteDoc(messageRef);
      console.log("Chat message deleted successfully");
    } catch (error) {
      console.error("Error deleting chat message:", error);
    }
  };

  const deleteAllChats = async () => {
    const messagesCollection = collection(db, "messages");

    try {
      // Fetch all chat messages
      const querySnapshot = await getDocs(messagesCollection);

      // Delete each chat message
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log("All chat messages deleted successfully");
    } catch (error) {
      console.error("Error deleting chat messages:", error);
    }
  };

  useEffect(() => {
    // Schedule deletion of chats every 24 hours
    const deleteChatsInterval = setInterval(() => {
      deleteAllChats();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(deleteChatsInterval);
  }, []);

  return (
    <div className="flex w-full mb-28 flex-col items-center justify-center h-screen rounded-full">
      <h1 className=" text-lg font-bold ">Community Chat</h1>
      <div
        className="max-w-lg w-full bg-white rounded shadow flex-grow overflow-y-scroll"
        ref={chatMessagesRef}
      >
        <div className="p-4" ref={chatMessagesRef}>
          {messages.map((message) => (
            <div key={message.id}>
              <img
                src={"../../public/assets/propic.jpeg"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />

              <div className="w-auto whitespace-wrap   items-center border-gray-300 border shadow-md rounded-3xl rounded-tl-none py-2 px-6 m-2">
                <div>
                  <p className=" flex-wrap">{message.text}</p>
                  <span className="text-xs text-gray-500">
                    {formatDate(message.createdAt)}
                    {/* <p>Is Admin: {isAdmin ? "Yes" : "No"}</p> */}
                  </span>
                </div>
                {/* Edit and delete buttons */}
                {isAdmin && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
