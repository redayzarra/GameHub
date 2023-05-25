import { Navigate, Outlet } from "react-router";
import useAuth from "./useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
