import React from 'react'
import AppRouter from './Approuter'
import AuthState from './modules/auth/context/AuthState'

const HeroesApp = () => {
  return (
    <AuthState>
      <AppRouter/>
    </AuthState>
  )
}

export default HeroesApp