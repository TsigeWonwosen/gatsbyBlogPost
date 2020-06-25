/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "../scss/blog-post.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        minHeight: "98vh",
        display: "flex",
        flexDirection: "column",
        width: "98.43vw",
        margin: "auto",
      }}
    >
      <div style={{ flexGrow: "1" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `1rem auto`,
            maxWidth: 1000,
            padding: `0 1rem 0.2rem`,
            position: `relative`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
