import TodoList from "components/TodoList";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("access_token")
  
  useEffect(() => {
    if (!ACCESS_TOKEN) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      {ACCESS_TOKEN && <TodoList/>}
    </div>
  );
}
