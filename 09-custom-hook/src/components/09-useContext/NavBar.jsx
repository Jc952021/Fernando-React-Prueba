import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
const style={
  "textDecoration":"none",
  "paddingLeft":"1rem"
}
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">UseContext</NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/login" style={style}  className="nav-item">
                Login
              </NavLink>
              <NavLink to="/about" style={style}  className="nav-item">
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
  
  )
}

export default NavBar