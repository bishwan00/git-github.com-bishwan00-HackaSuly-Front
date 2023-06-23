import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ScrollToTop from "./componets/scroll/ScrollToUp";
import NotAuthorized from "./componets/protected/NotAuthorized";
import Protected from "./componets/protected/Protected";
import Login from "./views/Login";
import Register from "./views/Register";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footer/Footer";
import Stats from "./views/Stats";
import Chat from "./componets/chat/Chat";
import { useGetCurrentUserQuery } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./api/globalSlices/user.slics";
import { useEffect } from "react";
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
