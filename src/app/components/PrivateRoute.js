import React, { useEffect } from "react"
import { isLoggedIn } from "../services/auth"
import { navigate } from "gatsby"

const PrivateRoute = () => {
  useEffect(() => {
    const { location } = props
    if (!isLoggedIn() && location.pathname !== "/app/login") {
      navigate("/app/login")
      return null
    }
  })

  const { component: Component, location, ...rest } = props
  return isLoggedIn() ? <Component {...rest} /> : null
}

export default PrivateRoute
