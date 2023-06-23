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
import Chat from "./components/chat/Chat";
import Container from "./components/container/Container";
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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
