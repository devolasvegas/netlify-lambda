import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [stuff, setStuff] = useState("")

  useEffect(() => {
    async function callFunction() {
      const thingy = await fetch("/.netlify/functions/hello")
        .then(res => res.json())
        .catch(e => console.error(e))
      setStuff(thingy.msg)
    }
    callFunction()
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <p>{stuff}</p>
    </Layout>
  )
}

export default IndexPage
