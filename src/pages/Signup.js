import { useState } from "react";
import { userApi } from "api/user";
import UserForm from "components/UserForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Signup() {
  const [userInputData, setUserInputData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userApi("/auth/signup", userInputData);

    if (response.status === 200) {
      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/signin");
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
      id: "signup",
      text: "회원가입",
    },
  };

  return (
    <div className="user">
      <UserForm {...props} />
    </div>
  );
}
