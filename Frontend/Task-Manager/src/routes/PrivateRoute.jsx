import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = ({alloweRoles}) => {
  return  <Outlet />
}

export default PrivateRoute
