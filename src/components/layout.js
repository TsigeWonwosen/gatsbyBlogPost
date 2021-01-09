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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        margin: "auto",
        overflowX:"hidden"
      }}
    >
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
       </div>
        <div
          style={{
            flexGrow: "1",
            margin: `1rem auto`,
            maxWidth: 1000,
           
          }}
        >
          <main>{children}</main>
        </div>
    
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
