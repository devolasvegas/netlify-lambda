import React, { useState, useEffect } from "react"
import { getUser } from "./services/auth"

const Main = () => {
  const [loading, setLoading] = useState(false)
  const [json, setJson] = useState(null)

  const handleClick = e => {
    e.preventDefault()

    const user = getUser()

    setLoading(true)

    fetch("/.netlify/functions/auth-hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.access_token}`,
      },
    })
      .then(res => res.json())
      .then(json => {
        setJson(json)
        setLoading(false)
      })
  }

  const user = getUser()

  return (
    <>
      <h1>Main App</h1>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />

      <button onClick={handleClick}>
        {loading ? "Loading ..." : "Call Lambda Function"}
      </button>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </>
  )
}

export default Main
