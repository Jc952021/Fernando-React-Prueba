import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { types } from "../../../../types/types";
import Authcontext from "../../../auth/context/Authcontext";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(Authcontext);
  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "xd",
      },
    });
    //hacer get a el localstorage
    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
