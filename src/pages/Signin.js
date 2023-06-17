import { useEffect, useState } from "react";
import { userApi } from "api/user";
import UserForm from "components/UserForm";
import { Link, useNavigate } from "react-router-dom";
import "styles/User.scss";

export default function Login() {
  const [userInputData, setUserInputData] = useState({});
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("access_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userApi("/auth/signin", userInputData);
    if (response.status === 200) {
      localStorage.setItem("access_token", response.data.access_token);
      navigate("/todo");
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
      id: "signin",
      text: "로그인",
    },
  };

  return (
    <>
      {!ACCESS_TOKEN && (
        <div className="user">
          <UserForm {...props} />
          <Link to={"/signup"} className="link-signup">
            회원가입
          </Link>
        </div>
      )}
    </>
  );
}
