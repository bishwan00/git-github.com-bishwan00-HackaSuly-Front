import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ScrollToTop from "./components/scroll/ScrollToUp";
import NotAuthorized from "./components/protected/NotAuthorized";
import Protected from "./components/protected/Protected";
import Login from "./views/Login";
import Register from "./views/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Stats from "./views/Stats";
import { useGetCurrentUserQuery } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./api/globalSlices/user.slics";
import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Container from "./components/container/Container";
function App() {
  const { user } = useSelector((state) => state.user);
  const { data, isError, isSuccess, isLoading } = useGetCurrentUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(getUser(data.data));
    }
  }, [data]);
  return (
    <div className="min-h-[100%]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/stats" element={<Stats />} />

          <Route path="/message" element={<Chat />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
