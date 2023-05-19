import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserList /> },
]);

export default router;
