import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = true;
    if (success) {
      navigate("/contact", { replace: true });
    } else {
      console.log("Fail");
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
