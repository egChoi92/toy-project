import { Routes, Route } from "react-router-dom";
import Signup from "pages/Signup";
import Signin from "pages/Signin";
import Todo from "pages/Todo";

const AppRoutes = () => {
  return (
      <Routes>
        <Route index element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
  );
};

export default AppRoutes;
