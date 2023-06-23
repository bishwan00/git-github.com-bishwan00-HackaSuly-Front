import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ScrollToTop from "./componets/scroll/ScrollToUp";
import NotAuthorized from "./componets/protected/NotAuthorized";
import Protected from "./componets/protected/Protected";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div className="min-h-[100%]">
      <ScrollToTop />

      <Routes>
        <Route element={<Protected />}>
          <Route path="/">
            <Route index element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
