import { Navigate, Outlet } from "react-router";

const Protected = ({ user, role }) => {
  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default Protected;
