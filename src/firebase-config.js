import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrsUgDQHOw7Gz_N_huJQx6GEA-ca8nwMY",
  authDomain: "nism-chat-99e97.firebaseapp.com",
  projectId: "nism-chat-99e97",
  storageBucket: "nism-chat-99e97.appspot.com",
  messagingSenderId: "49189288221",
  appId: "1:49189288221:web:7e8fc6015c563cf9a389f4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
