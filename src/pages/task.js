import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = () => (
  <Layout>
    <SEO title="Tags" />
    <h1>Tags Page!</h1>
    <p>Welcome to Tags page </p>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default Tags
