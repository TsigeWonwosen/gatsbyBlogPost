import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teams = () => (
  <Layout>
    <SEO title="Teams" />
    <h1>Teams Page!</h1>
    <p>Welcome to Teams page </p>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default Teams
