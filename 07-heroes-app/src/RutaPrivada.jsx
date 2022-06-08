import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Authcontext from "./modules/auth/context/Authcontext";

const RutaPrivada = ({ children }) => {
  const { user } = useContext(Authcontext);
  const { pathname } = useLocation();
  //guardar en el localStorage
  localStorage.setItem("lastPath", pathname);
  return user.logged ? children : <Navigate to="/login" />;
};

export default RutaPrivada;
