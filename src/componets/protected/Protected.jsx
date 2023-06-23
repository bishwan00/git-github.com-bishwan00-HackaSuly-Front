import { Navigate, Outlet } from "react-router";

const Protected = ({ user, role }) => {
  // if (!user) {
  //   return <Navigate to="/signin" replace />;
  // }

  return <Outlet />;
};

export default Protected;
