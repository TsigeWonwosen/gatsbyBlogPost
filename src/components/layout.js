import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"

// import "./layout.scss"
import "../scss/blog-post.scss"

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const handleChange = () => {
    setOpen(!open)
  }

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
        overflowX: "hidden",
      }}
    >
      <div>
        <Header
          siteTitle={data.site.siteMetadata.title}
          handleChange={handleChange}
          open={open}
        />
      </div>

      <main style={{ width: "100%" }}>{children}</main>
      <SideMenu active={open} handleChange={handleChange} />

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
