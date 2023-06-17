import Signup from "pages/Signup";
import Signin from "pages/Signin";
import Todo from "pages/Todo";
import { Navigate } from "react-router-dom";

export const pages = [
  { id: 0, path: "/", element: <Navigate to="/todo" /> },
  { id: 1, path: "/signup", element: <Signup /> },
  { id: 2, path: "/signin", element: <Signin /> },
  { id: 3, path: "/todo", element: <Todo /> },
];

export default pages;
