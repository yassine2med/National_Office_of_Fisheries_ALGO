import React, { useEffect } from 'react'
import { Cookies , useCookies  } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import Login from './Login'

const Logout = () => {
  return (
    <Login/>
  )
}

export default Logout