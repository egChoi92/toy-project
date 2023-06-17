import { useState } from "react";
import { userApi } from "api/user";
import UserForm from "components/UserForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "styles/User.scss";

export default function Signup() {
  const [userInputData, setUserInputData] = useState({});
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("access_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userApi("/auth/signup", userInputData);
    console.log("response: ", response);

    if (response.status >= 200) {
      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/signin");
    }
  };

  useEffect(() => {
    if (ACCESS_TOKEN) {
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
    <>
      {!ACCESS_TOKEN && (
        <div className="user">
          <UserForm {...props} />
        </div>
      )}
    </>
  );
}
