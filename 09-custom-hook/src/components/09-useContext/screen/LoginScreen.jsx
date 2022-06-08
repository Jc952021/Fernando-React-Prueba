import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const LoginScreen = () => {

const {user,setUser} = useContext(UserContext)

const persona ={
  id:1,
  name:"xd",
  email:"basado"
}

const persona2 ={
  id:1,
  name:"xd",
  email:"basado"
}
  return (
    <div>LoginScreen
      <pre>
        {JSON.stringify(user)}
      </pre>
      <button onClick={()=>setUser({...persona})}>Agregar User</button>
      <button onClick={()=>setUser({...user,persona2})}>Agregar 2User</button>
    </div>
  )
}

export default LoginScreen