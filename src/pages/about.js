import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page!</h1>
    <p>Welcome to About page </p>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default About
