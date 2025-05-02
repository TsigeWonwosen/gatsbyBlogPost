import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../scss/about.scss"

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className="main-container">
      <h1>About Page!</h1>
      <div className="underline"></div>
      <p>
        Welcome to About page Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam vel debitis est tenetur excepturi nemo nihil doloribus
        fugiat, earum exercitationem quo recusandae consectetur hic! Aspernatur
        ex sequi praesentium facere provident.
      </p>
    </div>
  </Layout>
)

export default About
