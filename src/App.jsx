import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ScrollToTop from "./componets/scroll/ScrollToUp";
import NotAuthorized from "./componets/protected/NotAuthorized";
import Protected from "./componets/protected/Protected";
import Login from "./views/Login";
import Register from "./views/Register";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footer/Footer";

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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
