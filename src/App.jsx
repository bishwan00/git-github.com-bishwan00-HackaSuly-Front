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
import Container from "./componets/container/Container";
import Payment from "./views/Payment";
function App() {
  return (
    <div className="min-h-[100%]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<Protected />}>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/stats" element={<Stats />} />

          <Route path="/message" element={<Chat />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
