import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = props => {
  const { location } = props
  const pathname = location
  console.log("pathname", pathname)

  return (
    <Layout>
      <SEO title="Task" />
      <div className="main-container">
        <h1>Tags Page!</h1>
        <div className="underline"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          cupiditate at animi cumque ea fuga, dolores maiores, quam magnam
          provident harum aperiam nam possimus.
        </p>
      </div>
    </Layout>
  )
}

export default Tags
