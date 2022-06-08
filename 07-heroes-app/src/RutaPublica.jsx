import React, { useContext } from "react";
import {Navigate} from "react-router-dom"
import Authcontext from "./modules/auth/context/Authcontext";

const RutaPublica = ({children}) => {
  const { user } = useContext(Authcontext);
  
  return user.logged ?<Navigate to="/"/> : children
}

export default RutaPublica