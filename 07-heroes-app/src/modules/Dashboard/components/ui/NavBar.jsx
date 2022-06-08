import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { types } from "../../../../types/types";
import Authcontext from "../../../auth/context/Authcontext";

export const Navbar = () => {
const navigate = useNavigate()
  const {user:{name},dispatch} = useContext(Authcontext)

  const handleLogout=()=>{
    dispatch({
      type:types.logout
    })
    navigate("/login",{replace:true})
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <span className="nav-item nav-link text-info">
            {
              name
            }
          </span>

          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
