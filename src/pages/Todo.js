import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  }, []);

  return <div>Todo</div>;
}
