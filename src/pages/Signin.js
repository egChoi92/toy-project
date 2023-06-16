import { useEffect, useState } from "react";
import { userApi } from "api/user";
import UserForm from "components/UserForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userInputData, setUserInputData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userApi("/auth/signin", userInputData);
    if (response.status === 200) {
      localStorage.setItem("access_token", response.data.access_token);
      navigate("/todo");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

  const props = {
    handleSubmit,
    setUserInputData,
    button: {
      id: "signin",
      text: "로그인",
    },
  };

  return <UserForm {...props} />;
}
