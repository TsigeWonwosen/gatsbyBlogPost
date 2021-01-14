import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"

import "./layout.scss"
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
      <div
        style={{
          flexGrow: "1",
          margin: `0rem auto`,
          maxWidth: 1200,
        }}
      >
        <main>{children}</main>
      </div>
      <SideMenu active={open} />

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
