import { Navigate, Outlet } from "react-router";
import UserList from "./UserList";
import useAuth from "./useAuth";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
