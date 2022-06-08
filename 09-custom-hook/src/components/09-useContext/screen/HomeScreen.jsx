import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const HomeScreen = () => {

const first = useContext(UserContext)

  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen