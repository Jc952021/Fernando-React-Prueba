import React,{useEffect, useReducer} from 'react'
import Authcontext from './Authcontext'
import AuthReducer from './AuthReducer'

const init = () => {
  console.log("1")
  return JSON.parse(localStorage.getItem("user")) || {
    logged:false,
  }
}

const AuthState = ({children}) => {
  console.log("auth")
  const [user, dispatch] = useReducer(AuthReducer, {}, init)
  useEffect(() => {
    console.log("2")
    localStorage.setItem("user",JSON.stringify(user))
  }, [user])
  

  return (
    <Authcontext.Provider value={{
      dispatch,
      user
    }}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthState